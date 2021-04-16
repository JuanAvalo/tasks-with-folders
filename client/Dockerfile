FROM nginx:latest

LABEL version="0.0.1"

RUN rm -rf /etc/nginx/conf.d

COPY nginx /etc/nginx

COPY build /usr/share/nginx/html

CMD nginx -g 'daemon off;'