/*
Create the DB that persists the information such as
Users, Folders and Tasks
AND fill with testing data.
*/
CREATE DATABASE taskmanager;

USE taskmanager;

CREATE TABLE IF NOT EXISTS user (
    idUser INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    username VARCHAR (255) NOT NULL,
    password VARCHAR (64) NOT NULL,
    PRIMARY KEY (idUser)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS folder (
    idFolder INT NOT NULL AUTO_INCREMENT,
    idUser INT,
    name VARCHAR(25),
    PRIMARY KEY (idFolder),
    FOREIGN KEY (idUser) REFERENCES user(idUser)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS task (
    idTask INT NOT NULL AUTO_INCREMENT,
    idFolder INT,
    content VARCHAR(255),
    state TINYINT,
    PRIMARY KEY (idTask),
    FOREIGN KEY (idFolder) REFERENCES folder(idFolder) ON DELETE CASCADE
)ENGINE = InnoDB;

INSERT INTO user (name, username, password)
VALUES ('Sam Smith', 'littlesam', 'mypw1234'),
       ('Marie Jhonson', 'marie01', 'mypw1234');


INSERT INTO folder (name, idUser)
VALUES  ('Work', 1),
        ('Home', 1),
        ('Market', 1);

INSERT INTO task (idFolder, content, state)
VALUES  (2, "Take the trash out", 0),
        (2, "Go to the gym", 0),
        (2, "Cook dinner", 0),
        (2, "Boil water", 0);

