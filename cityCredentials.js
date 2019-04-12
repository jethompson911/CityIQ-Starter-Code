const loginCredentials = {
        name: '{yourCity}',
        uaa: 'https://auth.aa.cityiq.io',
        eventservice: '{yourEventServiceURL}',
        metadataservice: '{yourMetaDataServiceURL}',
        websocket: 'wss://{yourWebSocketURL}', //Necessary only for websocket.js
        developer: '{yourClientID}:{yourClientSecret}',
        parking: '{your-Parking-PredixZoneID}',
        environment: '{your-Environment-PredixZoneID}',
        pedestrian: '{your-Pedestrian-PredixZoneID}',
        traffic: '{your-Traffic-PredixZoneID}',
        bbox: '{lat}:{long},{lat}:{long}'
    }

module.exports = loginCredentials
    