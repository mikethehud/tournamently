FROM node:latest

# set working directory
RUN mkdir /usr/app
WORKDIR /usr/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json .
RUN yarn install

# start app
CMD ["yarn", "watch"]