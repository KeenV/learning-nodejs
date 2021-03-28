var url = 'mongodb://localhost:27017'

// A Client to MongoDB
var MongoClient = require('mongodb').MongoClient

// Make a connection to MongoDB Service
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err
  console.log('Connected to MongoDB!')

  const db = client.db('newdb')
  // print database name
  console.log('Switched to ' + db.databaseName + ' database')

  // create(db, () => {
  //   client.close()
  // })

  const doc = { name: 'Roshan', age: '22' }

  // insert document to 'users' collection using insertOne
  db.collection('users').insertOne(doc, function (err, res) {
    if (err) throw err
    console.log('Document inserted', res)
    // close the connection to db when you are done with it
    client.close()
    // drop(db, () => {
    //   client.close()
    // })
  })

  const docs = [{ name: 'Udat', age: '21' },
    { name: 'Karthik', age: '24' },
    { name: 'Anil', age: '23' }]

  // insert multiple documents to 'users' collection using insertOne
  db.collection('users').insertMany(docs, function (err, res) {
    if (err) throw err
    console.log(res.insertedCount + ' documents inserted')
    // close the connection to db when you are done with it
    client.close()
    // remove(db, () => {
    //   client.close()
    // })
  })

  db.collection('users', function (err, collection) {
    // handle the error if any
    if (err) throw err
    // delete the mongodb collection
    collection.remove({}, function (err, result) {
      // handle the error if any
      if (err) throw err
      console.log('Collection is deleted! ' + result)
      // close the connection to db when you are done with it
      db.close()
    })
  })
})

export function drop(db, callback) {
  // delete the database
  db.dropDatabase(function (err, result) {
    console.log('Error : ' + err)
    if (err) throw err
    console.log('Operation Success ? ' + result)
    // after all the operations with db, close it.
    callback()
  })
}

export function create(db, callback) {
  db.createCollection('users', function (err, result) {
    if (err) throw err
    console.log('Collection is created!', result)
    // close the connection to db when you are done with it
    callback()
  })
}

export async function insertDocuments(db) {
  // Get the documents collection
  const collection = db.collection('restaurants')

  // Insert some documents
  const result = await collection.insertMany([
    {
      name: 'Sun Bakery Trattoria',
      stars: 4,
      categories: [
        'Pizza', 'Pasta', 'Italian', 'Coffee', 'Sandwiches',
      ],
    }, {
      name: 'Blue Bagels Grill',
      stars: 3,
      categories: [
        'Bagels', 'Cookies', 'Sandwiches',
      ],
    },
  ])

  return result
}

export async function findDocuments(db) {
  const collection = db.collection('restaurants')

  const docs = await collection.find({}).toArray()

  console.log('Found the following records')
  console.log(docs)

  return docs
}

export async function indexCollection(db) {
  const collection = db.collection('restaurants')

  const result = await collection.createIndex({
    name: 1,
  })

  return result
}
