import express from "express";
const app = express();
const port = process.env.PORT || 5000;
console.log(`Port is ${process.env.PORT}`);

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world changed!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
