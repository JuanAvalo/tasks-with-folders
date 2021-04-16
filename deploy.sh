#!/usr/bin/env bash

# verify if docker daemon is running
if ! ( ps -A | grep [d]ocker | grep -v grep | awk '{print $1}' &>/dev/null ) ; then
    echo "Docker is not running: start docker service and try again"
    exit 1
fi

# verify if docker-compose is installed
if ! ( which docker-compose &>/dev/null ) ; then
    echo "Cant find command docker-compose in \$PATH, install docker-compose and try again"
    exit 2
fi

# start our containers
echo "Starting containers..."
docker-compose up -d

# check for errors
if [[ $? -ne 0 ]] ; then
    echo "Error executing [docker-compose up -d]"
    exit 3
else
    # wait for mysql to initialize..
    echo "Please wait 30seg while our environment starts properly..."
    sleep 30
fi

# verify that our mysql container is up & running
if ! ( docker ps --filter name=mysql | grep "Up" ) ; then
    echo "Error on mysql container :-("
    exit 4
fi

# inject our .sql file to create/populate everything into the container db
echo "Initializing our database..."
docker exec -i mysql mysql -u root -p'sDiM+OLDQXek' < ./db/scripts/create_db.sql

if [[ $? -eq 0 ]] ; then
    echo "# ...And our App is running :-D"
    echo -e "\n\tTest it by visiting http://___:8080\n"
else
    echo "Something failed... :-("
fi