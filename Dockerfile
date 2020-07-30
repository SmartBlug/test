FROM node:12-alpine

LABEL MAINTAINER = 'Patrick Bouffel <patrick@bouffel.com>'

ADD *.js package.json package-lock.json README.md /app/

RUN cd app

EXPOSE 3000

USER node
CMD ["node", "app.js"]