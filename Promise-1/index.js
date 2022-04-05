// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>> Success! <<<');
    resolve('>>> Success! <<<');
    // reject("--- Oops ---");
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved successfully! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// The promise gets rejected, reject() throws an error, line 13 gets printed and line 14 prints the reject message

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// when you call both resolve and reject, reject() throws an error

// **3)** Does the order matter you call resolve and reject matter? Test this.
// Yes it matters what order you call resolve and reject, if you were to put
// resolve above reject then when you call both of them, resolve will run first and skips passed reject

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// If you call resolve or reject more than once, the first instance of resolve or reject runs and skips to the next line