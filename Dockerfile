
FROM node:16-buster
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . ./

ENV NEXT_PUBLIC_APP_URL=https://www.qozyapparel.us

RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run","start"]