function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeOfDay === 'lunch') {
        resolve('Grilled Cheese')
      } else if (timeOfDay === 'breakfast') {
        resolve('Pancakes')
      } else if (timeOfDay === 'dinner') {
        resolve('Hamburgers')
      } else {
        reject(`I'm not hungry right now`)
    }}, 1000)
  })
}


// Call yout function and resolve the promise here! 
whatToEat('lunch')
.then((message) => {
  console.log('Success! Favorite Food is:')
  console.log(message)
})
.catch(message => {
  console.log(message)
})


// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 

// If the `timeOfDay` is anything else reject the promise with 
// the 'message' I'm not hungry right now.  