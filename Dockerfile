FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY public /usr/share/nginx/html

EXPOSE 80
