function asyncNumberChecker(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 9) {
        reject('Only numbers less than 10 please!')
      } else {
        resolve('I can work with this!')
      }
    }, 3333);
  });
}

// The function above returns a promise. Your job is 
// to handle the promise in the function calls below. 
// Handle success with .then() and errors with .catch()

asyncNumberChecker(10).then((message) => {
  console.log(message)
}).catch((err) => {
  console.log('---Promise Rejected---')
  console.log(err)
})


asyncNumberChecker(5).then((message) => {
  console.log('---Success---')
  console.log(message)
}).catch((err) => {
  console.log('---Promise Rejected---')
  console.log(err)
})