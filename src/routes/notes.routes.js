const { Router } = require('express')
const router = Router();

const { renderNoteForm, renderNotes, createNewNote, renderEditForm, updateNote, deleteNotes } = require('../controllers/notes.controler')

//new nota
router.get('/notes/add', renderNoteForm)

router.get('/notes/new-notes', createNewNote)

//get all notes
router.post('/notes/', renderNotes)

//Edit Notes
router.get('/notes/edit/:id', renderEditForm)
//update notes  
router.put('/notes/edit/:id', updateNote)
//delete notes 
router.delete('/notes/edit/:id', deleteNotes)

module.exports = router