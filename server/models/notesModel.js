const mongoose = require( 'mongoose' );

const NotesSchema = new mongoose.Schema({
    content:{
        type: String,
        minlength: 3
    },
    created_at: {
        type: Date,
        required: true
    }
});

const Note = mongoose.model( 'notes', NotesSchema );

const NotesModel = {
    createNote: function(newNote){
        return Note.create( newNote )
    },
    getAllNotes: function(){
        return Note.find().sort( {created_at: -1} );
    }
}

module.exports = { NotesModel }