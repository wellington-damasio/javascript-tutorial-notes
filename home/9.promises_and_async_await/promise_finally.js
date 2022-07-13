// The finally() method is always executed whether the promisse is fulfilled or rejected.
// In the finally() method you can plce the code that cleans up the resource when the promise is 
//settled, regardless of the outcome. By using the finally() method, you can avoid duplicate code.

// JavaScript finally() method example
class Connection {

  execute(query) {
    if(query != 'Insert'  && query != 'Update' && query != 'Delete') 
      throw new Error(`The ${query} is not supported`)

    console.log(`Execute the ${query}`)
    return this
  }

  close() {
    console.log('Close the connection')
  }
}

// The following connect() function returns a promise that resolves to a new Connection if the success
//flag is set to true

const success = true

function connect() {
  return new Promise((resolve, reject) => {
    if(success)
      resolve(new Connection())
    else
      reject('Could not open the database connection')
  }) 
}

// The following example uses the finally() method to close the connection
let globalConnection

connect()
  .then(connection => {
    globalConnection = connection
    return globalConnection.execute('Insert')
  })
  .then(connection => {
    globalConnection = connection 
    return connection.execute('Select')
  })
  .catch(error => console.log(error))
  .finally(() => {
    if(globalConnection)
      globalConnection.close()
  })

