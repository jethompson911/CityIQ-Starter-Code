// Run this command: $node demo1.js
// to return the queries found in the async function demo.
  
// For more details on simulated data please reference the API Documentation Appendix A (https://ie-cities-docs.run.aws-usw02-pr.ice.predix.io/#r_intelligent_cities_appendix_a.html)
// Your municipality will provide the necessary urls, username, password and predix zone ids

// cityiq.js sets up the requests
const cityiq = require("./cityiq.js")
// cityCredentials.js contains all the necessary credentials for reference
const credentials = require("./cityCredentials")

// this function is where queries can be specified.  
async function demo1 (){
    console.log('obtaining pedestrian data')
    // specifies the credentials and begins authentication - see cityiq.js
    let ciq = await cityiq(credentials)
    
    /* To Learn more about how the ciq.assets, ciq.locations and ciq.events functions work, 
    please reference cityiq.js*/

    //obtaining pedestrian data by eventTypes
    let assets = await ciq.assets(credentials.pedestrian,'PEDEVT')
    console.log(assets[0]) // returns the first asset found

    // return all pedestrian events in last 12 hours related to the assetUid found above    
    let events = await ciq.events(credentials.pedestrian,assets[0].assetUid,'assetUid','PEDEVT',ciq.timecalc(12))
    console.log(events[0])

    // return all WALKwAY locations within the tenant bounding box
    let location = await ciq.locations(credentials.pedestrian, 'WALKWAY')
    console.log(location)
}

// instantiates demo function to run queries
demo1()