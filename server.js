// Code goes here

// Remember to import RPS and RPSLS module from a03 (stated in repo documentation)
import { rps } from "../lib/rpsls.js"; // Right syntax?
import { rpsls } from "../lib/rpsls.js";
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

const portvar = arg2.portvar || 5000; // Another way (Debugging?)
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// Utilize "app.get()" to set the endpoints and ensure they return what's specified in the repo
app.get('/', (req, res) => { // Reference online documentation to understand how to use 'app.get()'
    res.status(200).send("200 OK") // Use "200 OK" string as shown in instructions
})

