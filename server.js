const { appendFile } = require('fs');
const mongoose = require('mongoose');



// Connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log mongoose queries
mongoose.set('debug', true);

app.listen(Port, () => console.log(` ************** Connected on localhost:${PORT} ************* `))