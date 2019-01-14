const loginCredentials = {
        name: '{yourCity}',
        uaa: '{yourUAAurl}',
        eventservice: '{yourEventServiceURL}/v2/',
        metadataservice: '{yourMetaDataServiceURL}/v2/',
        mediaservice: '{yourMediaServiceURL}/v2/',
        websocket: 'wss://{yourWebSocketURL}', //Necessary only for websocket.js
        developer: '{yourClientID}:{yourClientSecret}',
        parking: '{your-Parking-PredixZoneID}',
        environment: '{your-Environment-PredixZoneID}',
        pedestrian: '{your-Pedestrian-PredixZoneID}',
        traffic: '{your-Traffic-PredixZoneID}',
        video: '{your-Video-PredixZoneID}',
        images: '{your-Images-PredixZoneID}',
        bbox: '{lat}:{long},{lat}:{long}'
    }

module.exports = loginCredentials
    