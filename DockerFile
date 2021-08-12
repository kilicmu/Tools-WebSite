FROM nginx:1.15-alpine
COPY /dist /etc/nginx/html
COPY /conf /etc/ngnix
WORKDIR /etc/nginx/html
