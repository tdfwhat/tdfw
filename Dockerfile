FROM node:21-bookworm-slim

RUN apt-get update 
RUN apt-get install -y \
            build-essential git curl

RUN apt-get install -y python3

RUN yarn global add gatsby-cli
RUN yarn global add sanity@latest

