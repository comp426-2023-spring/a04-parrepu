// Code goes here

// Remember to import RPS and RPSLS module from a03 (stated in repo documentation)
import {rps, rpsls} from "./lib/rpsls.js"; // Right syntax?
// import { rpsls } from "./lib/rpsls.js";
// Also import the dependencies you installed on Powershell
import express from "express";
import minimist from "minimist";

// Same structure as previous assignments
const arg2 = minimist(process.argv.slice(2))

// Make another variable and set the value using the express import
const app = express(); // Set name of variable to app as implied in documentation

// if (portvar === null) { Port should default to 5000 if no argument is given | Much easier way of writing this (use '||' below)
    // portvar = 5000;
    // process.exit(0); 
// }

const port = arg2.port || 5000; // Another way (Debugging?) -> Port should default to 5000 if no argument is specified

// Utilize app variable from earlier here
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// Utilize "app.get()" to set the endpoints and ensure they return what's specified in the repo (GET method route)
app.get('/app/', (req, res) => { // Reference online documentation to understand express routing and how to use 'app.get()'
    res.status(200).send("200 OK"); // Use "200 OK" string as shown in instructions
})

// Operational requirement 
app.get('/app/rps/', (req, res) => {
    // Same format as above and utilize stringify (look a previous assignment to see how it works)
    res.status(200).send(JSON.stringify(rps()));
})

// Operational requirement (just pass rpsls() into stringify instead)
app.get('/app/rpsls/', (req, res) => {
    // Use format from above
    res.status(200).send(JSON.stringify(rpsls()));
})

// Operational requirement (Accept Request Bodies)
app.get('/app/rps/play/', (req, res) => {
    // What do I pass into rps? -> Update: Use 'req.query'
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
})

app.get('/app/rpsls/play/', (req, res) => {
    // Do the same thing for rpsls (Also update path above)
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
})

app.post('/app/rps/play/', (req, res) => {
    // Now use the post method route
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
})

app.post('/app/rpsls/play/', (req, res) => {
    // Post method route
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
})

app.get('/app/rps/play/:shot', (req, res) => {
    // Get method route (use 'req.params' instead)
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
})

app.get('/app/rpsls/play/:shot', (req, res) => {
    // Get method route (use 'req.params' instead)
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
})

// Checkpoint 1: Run tests to see where you are
app.get('/app/*', (req, res) => {
    // Default endpoint should return "404 NOT FOUND" when any endpoint in not defined 
    // Also change the status num to 404
    res.status(404).send("404 NOT FOUND");
})

// Could I just return the following? -> Yes
app.listen(port);

// Do I need to do a process.exit(); at the end of the file?
// process.exit(0);