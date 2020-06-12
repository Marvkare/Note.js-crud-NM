const mongoose = require('mongoose')

const { NOTES_APP_MONGOOB_HOST, NOTES_APP_MONGOOB_DATABASE } = process.env;
const MONGOOB_URL =`mongodb://${NOTES_APP_MONGOOB_HOST}/${NOTES_APP_MONGOOB_DATABASE}`

mongoose
.connect(MONGOOB_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
    .then(db => console.log('Database is conected'))
    .catch(err => console.log(err));