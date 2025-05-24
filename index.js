// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an Express application
const app = express();
const port = 3000;

// Variable to track user authorization status
let userIsAuthorised = false;

// Middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the main HTML page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Middleware function to check the password submitted by the user
function passwordCheck(req, res, next) {
    const password = req.body["password"];

    // If the password matches the correct one, set user as authorized
    if (password === "ILoveProgramming") {
        userIsAuthorised = true;
    }

    // Move to the next middleware or route handler
    next();
}

// Apply the password-checking middleware
app.use(passwordCheck);

// Route to handle login attempts
app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        // If authorized, serve the secret page
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        // If not authorized, serve the main page again
        res.sendFile(__dirname + "/public/index.html");
        // Alternatively, redirect to the homepage
        // res.redirect("/");
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});