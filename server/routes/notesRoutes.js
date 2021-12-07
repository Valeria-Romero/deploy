const express = require( 'express' )
const NotesRouter = express.Router();
const { NotesController } = require( './../controllers/NotesController' )

NotesRouter
    .route( '/newnote' )
    .post( NotesController.createNewNote )

NotesRouter
    .route( '/allnotes' )
    .get( NotesController.findNotes )

module.exports = { NotesRouter }