Globals
------------
Node. js Global Objects are the objects that are available in all modules. 
Global Objects are built-in objects that are part of the JavaScript and can be 
used directly in the application without importing any particular module.

__dirname
__filename
exports
require()
module
**process


The events_file.js file here is to demonstrate how events module work and how eventEmitter class of events module is used and works

lodash.js file is used to demonstrate how lodash works 

------------------------------------ 
localhost:5000/courses/:courseID

localhost:5000/courses?name=adarsh&age=20   //this whole thing is URL we can parse it to find host, path, params and query string

1.  /courses -- is the url(if taken from the request object)/path(if taken from URL parsing)

2.  courseID is "params" or parameters of the url or route parameter
//usually used when we need to use an ID or filter/find one product

3.  everything after the question mark(?) is called query string parameters or URL parameters
//query strings are mostly used to limit and sort the incoming responses

middlewares
--------------
- app.use(middleware)         //how middlewares be used 

- app.use([middleware1, middleware2])     //more than one middleware can be used

1. app.use(express.static('./public'))      //this rernders all the static files from public folder

2. app.use(express.urlencoded({extended: false}))   //makes the form data available

3. app.use(bodyparser.json())       //parse json data

Routing
---------------
