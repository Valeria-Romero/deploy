const { NotesModel } = require( './../models/notesModel' )

const NotesController = {
    createNewNote: function(request, response){
        const content = request.body.content;
        const created_at = new Date();
        console.log(request.body);
        newNote = {
            content,
            created_at
        }

        NotesModel
            .createNote( newNote )
            .then( result =>{
                response.status(200).json({message: 'Note created successfully'})
            })
            .catch( err =>{
                console.log(err);
                response.json(err)
            });
    },

    findNotes: function(request, respose){
        NotesModel
            .getAllNotes()
            .then( result =>{
                respose.json( result )
            })
            .catch( error =>{
                respose.json( error ) 
            });
    }
}

module.exports = { NotesController };