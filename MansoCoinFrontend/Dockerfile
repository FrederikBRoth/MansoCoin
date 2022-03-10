FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY  /app/build/ .
COPY ./app/nginx/default.conf /etc/nginx/conf.d/default.conf