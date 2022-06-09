# Getting Started with Kafka-Event-Manifest

This is so we can monitor kafka events for STA.

You must run the following command in the src/kafka folder to setup kafka for use

```
./gradlew jar -PscalaVersion=2.13.6
```

You must also get the /dev/sta/client.properties file from Google Drive and put it in your .add123 folder

Then you should be good to go!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in browser

### `npm run data`

Should be ran in parallel to 'npm start' and it will listening for events and directs them to a local file

## This is very much still be worked on and will need more improvement
