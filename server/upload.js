const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    var oldPath = file.path
    var newPath = 'test.mp4'
    console.log('file', file.name);
    console.log(file)
    const readStream = fs.createReadStream(file.path);
  fs.rename(oldPath, newPath, function (err) {
    if (err) throw err
    console.log('Successfully renamed - AKA moved!')
})

  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};
