/* Before Begining save script as websocket.js, then:
   1. input your client credentials in cityCredentials.js and make appropriate modifications to line 14
   2. verify you have node.js installed with this command: $ node -v
   3. verify you have node package manager installed with this command: $ npm -v
   4. navigate to the directory you have saved this file.  
   5. install node-fetch and ws packages with this command: $ npm install node-fetch ws
   6. in the directory that this file is saved, run this command: $ node websocket.js
*/

// Note this websocket demo returns Parking Related Events only.  
// If you do not intend to use the Parking API, please change the eventTypes and headers for the approrpiate API.

// cityCredentials.js contains all the necessary credentials for reference
const credentials = require("./cityCredentials")
/* be sure to input your credentials to the cityCredentials.js file.  
the following declaration establishes your credentials */

const fetch = require('node-fetch')
const WebSocket = require('ws')
const btoa = str => new Buffer(str).toString('base64')

// requests function formats requests via node.js
function request(url, headers, body) {
  let options = { headers: headers, body:body}
  return fetch(url, options).then(result => {
      if (result.status>=400) return(result.statusText) 
      else return result.text().then(txt => {
          try { return JSON.parse(txt) }
          catch (err) { return txt }
      })
  })
}

async function listen() {   
  
  // REST requests necessary for getting the token - first layer of authentication
  let result = (await request(credentials.uaa+'?grant_type=client_credentials',{authorization:'Basic '+btoa(credentials.developer)}))
  let token = result.access_token
  
  // REST request for metadata
  let queryURL = credentials.metadataservice+'metadata/assets/search?q=eventTypes:PKIN'
  let headersIn = {authorization: 'Bearer '+token,'predix-zone-id':credentials.parking}
  
  let asset = (await request(queryURL,headersIn)).content
  console.log('There are '+asset.length+' assets with parking in events')
  let asset0 = asset[0].assetUid
  console.log('Will now query for Parking events related to '+asset0)
  
  // WebSocket Connection  
  let ws = new WebSocket(credentials.websocket, {headers: headersIn})

  ws.on('open', function open() {
    console.log('listening')  
    ws.send(JSON.stringify({assetUID:asset0,eventTypes:["PKIN","PKOUT"]}));
  })
  ws.on('message', data => console.log(data))
  ws.on('error', err => console.log(err))
}

listen()