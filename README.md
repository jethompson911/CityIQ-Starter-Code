

NOTE THIS REPOSITORY HAS BEEN MOVED TO https://github.com/CityIQ/StarterCode

============================================================================================================

This sample code uses node.js and node-fetch  
The sample code runs in the command line and returns data the user has access to.

To recieve access, please contact your municipality for the appropriate credentials and replace them in cityCredentials.js.
For more information about the simulated data, please visit: https://ie-cities-docs.run.aws-usw02-pr.ice.predix.io/#r_intelligent_cities_appendix_a.html 


to run demo0.js the parking demo:
within the starter code directory, run the command:
$ node demo0.js

all other demo#.js files run separately and only require cityiq.js and cityCredentials.js



Details about api-starter-code:

demo#.js is where modifications should be made.
Input your own credentials to credentials.js and make appropriate modifications to the demo#.js files' city variable.

Please note, the simulated data makes all predix-zone-ids available to you, however some cities may restrict what access and therefore zones you have.

Cities may vary their predix-zone-ids therefore modify the zone-id variables as needed within the demo#.js code. Also note the urls available to you may not be complete with the corect endings following predix.io, please compare them with the simulated data urls to ensure functionality


1. ensure node.js is in your path
2. in the ic-apis-starter folder run the following command:
$ npm install node-fetch --save

3. to run the code select a demo file and run :
$ node demoX.js to view output
