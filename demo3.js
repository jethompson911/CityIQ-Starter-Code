// Run this command: $node demo3.js
// to return the queries found in the async function demo.
  
// For more details on simulated data please reference the API Documentation Appendix A (https://ie-cities-docs.run.aws-usw02-pr.ice.predix.io/#r_intelligent_cities_appendix_a.html)
// Your municipality will provide the necessary urls, username, password and predix zone ids

// cityiq.js sets up the requests
const cityiq = require("./cityiq.js")
// cityCredentials.js contains all the necessary credentials for reference
const credentials = require("./cityCredentials")

// this function is where queries can be specified.  
async function demo3 (){
    console.log('obtaining environmental data')
    // specifies the credentials and begins authentication - see cityiq.js
    let ciq = await cityiq(credentials)

    /* To Learn more about how the ciq.assets, ciq.locations and ciq.events functions work, 
    please reference cityiq.js*/

    //obtaining environmental data by eventTypes  // please note - environmental data cannot be queried by locationtype
    let assets = await ciq.assets(credentials.environment,'TEMPERATURE') 
    console.log(assets[0]) 
    
    // return all environmental events in the last timespan between 12hours ago and 3 hours ago   
    let events = await ciq.events(credentials.environment,assets[0].assetUid,'assetUid','TEMPERATURE',ciq.timecalc(12))
    console.log(events) 

}

// instantiates demo function to run queries
demo3()