FROM arm32v7/node:10-slim AS build

WORKDIR /code

COPY package*.json /code/
RUN npm install
COPY src src
RUN npm run build

FROM arm32v7/node:10-slim

WORKDIR /code
COPY --from=build /code/node_modules /code/node_modules
COPY --from=build /code/dist /code

COPY fetch-forever.sh /code/fetch-forever.sh
CMD [ "/code/fetch-forever.sh" ]
