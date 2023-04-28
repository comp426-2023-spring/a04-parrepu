// Code goes here

// Remember to import RPS and RPSLS module from a03 (stated in repo documentation)
import {rps} from "./lib/rpsls.js"; // Right syntax? -> Update: Yup
import {rpsls} from "./lib/rpsls.js";
// Also import the dependencies you installed on Powershell
import minimist from "minimist";
import express from "express";

// Same structure as previous assignments
const arg2 = minimist(process.argv.slice(2))

// Make another variable and set the value using the express import
const app = express(); // Set name of variable to app as implied in documentation (pay attention to path -> ex. /app/rpsls/)

// Alternate approach
// if (portvar === null) { Port should default to 5000 if no argument is given | Much easier way of writing this (use '||' below)
    // portvar = 5000;
    // process.exit(0); 
// }

const port = arg2.port || 5000; // Another way (Debugging? -> Works) -> Port should default to 5000 if no argument is specified

// Utilize app variable from earlier here
app.use(express.json());
// Look at online documentation to get syntax for 'urlencoded'
app.use(express.urlencoded({
    extended: true
}))

// Utilize "app.get()" to set the endpoints and ensure they return what's specified in the repo (GET method route)
// Reference online documentation to understand express routing and how to use 'app.get()'
app.get('/app/', (req, res) => { 
    res.status(200).send("200 OK"); // Use "200 OK" string as shown in instructions
})

// Operational requirement 
app.get('/app/rps/', (req, res) => {
    // Same format as above and utilize stringify (look a previous assignment to see how it works) and pass rps() in
    res.status(200).send(JSON.stringify(rps()));
})

// Operational requirement (pass rpsls() instead of rps() into stringify)
app.get('/app/rpsls/', (req, res) => {
    // Use format from above
    res.status(200).send(JSON.stringify(rpsls()));
})


// Operational requirement (Now we're going to utilize 'req.query')
app.get('/app/rps/play/', (req, res) => {
    // What do I pass into rps? -> Update: Use 'req.query'
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
})

// Use the same structure and pass rpsls() as an argument into stringify()
app.get('/app/rpsls/play/', (req, res) => {
    // Do the same thing for rpsls (Also update path above)
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
})


// Operational requirement (Now we're going to utilize 'req.body')
app.post('/app/rps/play/', (req, res) => {
    // Now use the post method route
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
})


// Reference online documentation to see how the following works
app.get('/app/rps/play/:shot', (req, res) => {
    // Get method route (use 'req.params' instead)
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
})

// Follow same logic as two post statements above (now we're just passing rpsls() as an argument into stringify)
app.post('/app/rpsls/play/', (req, res) => {
    // Post method route
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
})


// Note: Pass rpsls() as an argument into stringify
app.get('/app/rpsls/play/:shot', (req, res) => {
    // Get method route (use 'req.params' instead)
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
})

// Checkpoint 1: Run tests to see where you are
// Default endpoint should return "404 NOT FOUND" when any endpoint is not defined 
app.get('/app/*', (req, res) => {
    // Also change the status num to 404 instead of 200
    res.status(404).send("404 NOT FOUND");
})

// Could I just return the following? -> Update: Yes
app.listen(port);

// Debugging: Do I need to do a 'process.exit()' at the end of the file? -> DONT include (will cause potential errors)
// process.exit(0);