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
