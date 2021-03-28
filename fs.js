var fs = require('fs')

// read file sample.html
fs.readFile('sample.html',
  // callback function that is called when reading file is done
  function (err, data) {
    if (err) throw err
    // data is a buffer containing file content
    console.log(data.toString('utf8'))
  })

// writeFile function with filename, content and callback function
fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
  if (err) throw err
  console.log('File is created successfully.')
})

// appendFile function with filename, content and callback function
fs.appendFile('newfile_2.txt', 'Learn Node FS module', function (err) {
  if (err) throw err
  console.log('File is created successfully.')
})

// open function with filename, file opening mode and callback function
fs.open('newfile_3.txt', 'w', function (err, file) {
  if (err) throw err
  console.log('File is opened in write mode.')
})

// write data to file sample.html
fs.writeFile('sample.txt',
  'HELLO',
  'ascii',
  // callback function that is called after writing file is done
  function (err) {
    if (err) throw err
    // if no error
    console.log('Data is written to file successfully.')
  })

// fs.rename('sample.txt', 'sample_old.txt', function (err) {
//   if (err) throw err
//   console.log('File Renamed.')
// })

// delete file named 'sample.txt'
fs.unlink('sample.txt', function (err) {
  if (err) throw err
  // if no error, file has been deleted successfully
  console.log('File deleted!')
})

// include fs-extra package
// var fs = require('fs-extra')

// var source = 'folderA'
// var destination = 'folderB'

// // copy source folder to destination
// fs.copy(source, destination, function (err) {
//   if (err) {
//     console.log('An error occured while copying the folder.')
//     return console.error(err)
//   }
//   console.log('Copy completed!')
// })
