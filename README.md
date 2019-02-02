# youtvfetcher

## Build

```
npm run build
```

## Run

```
eval $(pass youtv)
node dist
```

## Docker on ARM

## Build

```
docker build -t stefanscherer/youtvfetcher .
```

## Run

```
eval $(pass youtv)
docker run -e YOUTV_USERNAME -e YOUTV_PASSWORD stefanscherer/youtvfetcher
```

## Run in Docker Compose

Create a local file `youtvfetcher/.youtvfetcher.json` file.
Spin up a container with this `docker-compose.yml` file

```yaml
youtvfetcher:
  image: stefanscherer/youtvfetcher:latest
  restart: always
  volumes:
    - './youtvfetcher/.youtvfetcher.json:/root/.youtvfetcher.json'
    - '/mnt/Public/Shared Videos:/media'
  working_dir: '/media'
```

and

```
docker-compose up -d youtvfetcher
```
