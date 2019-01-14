// Run this command: $node demo0.js
// to return the queries found in the async function demo0.
  
// For more details on simulated data please reference the API Documentation Appendix A (https://ie-cities-docs.run.aws-usw02-pr.ice.predix.io/#r_intelligent_cities_appendix_a.html)
// Your municipality will provide the necessary urls, username, password and predix zone ids

// cityiq.js sets up the requests
const cityiq = require("./cityiq.js")
// cityCredentials.js contains all the necessary credentials for reference
const credentials = require("./cityCredentials")

// this function is where queries can be specified.  
async function demo0 (){
    console.log('initiating demo')
    // specifies the credentials and begins authentication - see cityiq.js
    let ciq = await cityiq(credentials)  

    console.log('obtaining parking data')

    /* using the assets function - querying using the metadata url for all assets with either 
    eventTypes, assetTypes or mediaTypes specified as the input to this function
    get the first asset that has a parking in event */
    let assets = await ciq.assets(credentials.parking,'PKIN')
    console.log(assets[0])


    // search for the asset above by searching by assetUid.  see the query printed to the console
    let uid = await ciq.assets(credentials.parking, assets[0].assetUid)
    console.log(uid)

    // find uid's parent asset
    let parentUid
    if (uid.parentAssetUid !== undefined) { // undefined was in quotes
        parentUid = await ciq.assets(credentials.parking,'children', uid.parentAssetUid)        
    } else {
        parentUid = await ciq.assets(credentials.parking, uid.assetUid) 
        console.log('uid found previously is a node')       
    }
    console.log(parentUid)

    // get a recent asset by assetType
    let assetByType = await ciq.assets(credentials.parking,'CAMERA')
    console.log(assetByType[0])

    // get a recent asset by mediaType
    let assetByMediaType = await ciq.assets(credentials.parking,'IMAGE')
    console.log(assetByMediaType[0])

    /* using locations function - querying using the metadata url for all locations by locationType, 
    coordinatesType or locationUid.  For locationType and locationUid input first specifier.  
    For coordinates type, input ('GEO','{coordinates}') */
    let loc = await ciq.locations(credentials.parking,'PARKING_ZONE')
    console.log(loc[0])
    
    /* return all parking in events from the last 12 hours related to the camera asset found above
    timecalc is a function declared in cityiq.js. */
    let events = await ciq.events(credentials.parking, assets[0].assetUid,'assetUid','PKIN',ciq.timecalc(1))
    console.log(events[0])
   
}

// instantiates demo function to run queries
demo0()