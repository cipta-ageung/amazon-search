# node version
FROM node:12.14.1 as builder

# Create directory for react container
RUN mkdir -p /usr/src/app

# Set workdir
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

ARG profile

ENV profile=$profile

ARG port

ENV port=$port_forward

COPY package.json /usr/src/app/package.json

# Install package
RUN npm install

#RUN npm install react-scripts -g --silent
RUN npm install react-scripts -g
COPY . /usr/src/app

RUN npm run build

##STAGE 2
FROM nginx:1.15.9-alpine
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder  /usr/src/app/build /usr/share/nginx/html

EXPOSE ${port}
#EXPOSE 8082
CMD ["nginx", "-g", "daemon off;"]
