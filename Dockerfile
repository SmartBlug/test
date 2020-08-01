FROM node:12-alpine

LABEL MAINTAINER = 'Patrick Bouffel <patrick@bouffel.com>'

WORKDIR /app

ADD *.js package.json package-lock.json /app/

RUN cd /app && \
    npm ci

EXPOSE 3000

USER node
CMD ["node", "app.js"]