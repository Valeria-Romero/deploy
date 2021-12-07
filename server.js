const express = require( 'express' );
const cors = require('cors');
const { NotesRouter} = require( './server/routes/notesRoutes')
const path = require('path');

const app = express();
app.use(cors())
app.use( express.urlencoded( {extended:true}));
app.use(express.json());
app.use( '', NotesRouter )
app.use( express.static(path.join(__dirname, "/public/dist/public")))

require('./server/config/database');

app.all( '*', function(request, response){
    response.sendFile( path.resolve( './public/dist/public/index.html' ) )
});


app.listen( 8080, function(){
    console.log( "Anonymous notes is running in port 8080." );
});