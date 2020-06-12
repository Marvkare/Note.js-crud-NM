const notesCtrl = {};

const Note = require('../models/Note')
notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note')
    
}

notesCtrl.createNewNote = async (req, res)  => {
    const {title, description   }= req.body;
    const newNote = new Note ({title, description})
    await newNote.save()
    console.log(newNote)

}

notesCtrl.renderNotes = (req, res) => {
    res.send('render notes')
}

notesCtrl.renderEditForm = (req, res) => {
    res.send('Edit form')
}

notesCtrl.updateNote = (req, res) => {
    res.sen('update')
}
notesCtrl.deleteNotes = (req, res) => {
    res.sen('note deleted ')
}
module.exports = notesCtrl;