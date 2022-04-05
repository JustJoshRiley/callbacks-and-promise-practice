function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') { 
        resolve('hello ' + name);
      } else {
        reject('Name must be a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}


// Above we have two functions that returns promises. 
// These are greet and uppercaser. 
// Notice how we chain these promises together. The 
// Result of one is then passed to the next. 

greet('Your name') // Returns a Promise
.then(str => uppercaser(str))  // Upper case the results from greet() Returns a Promise
.then(str => console.log(str)) // Log the results of uppercaser()
.catch(err => console.log(err)) // Catches an error

// Challenges: get greet() to fail by passing a non string value
// What happens?
// Greet throws an error, and here we log the error 
greet(5)
.catch(err => {
  console.log('---Promise Rejection---')
  console.log(err)
  console.log('-----------------------')
})

// Challenge: get uppercaser() to fail by passing a non string value
// What happens?
// Upercaser throws an error and here we log the error 
uppercaser(15)
.catch(err => {
  console.log('--Uppercaser Promise Rejection---')
  console.log(err)
  console.log('---------------------------------')
})
.catch(err => {
  console.log('second error')
})


// Challenge: Notice there is only a single .catch() at the end. 
// Explain the behavior?
// if any .then() throws an error, it catches the first occurence of and error instance
// if you wanted to catch an error instance inside of the .catch() you would want to throw the err and add a second .catch()