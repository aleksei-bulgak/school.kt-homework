FROM node:10.18.1-alpine3.11  as build
WORKDIR /opt
COPY . /opt/
RUN npm ci && npm run build --production


FROM nginx:1.17.7
COPY --from=build /opt/build /usr/share/nginx/html/school.kt-homework
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]