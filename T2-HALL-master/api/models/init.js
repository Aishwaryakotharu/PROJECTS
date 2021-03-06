const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "room" 
})

  .then(() => {
    console.log('Successfully connected to database')
  })

  .catch(error => {
    console.error('Error connecting to MongoDB database', error)
  })

module.exports = mongoose
