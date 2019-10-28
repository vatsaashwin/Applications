// Run code and see output.
// Why does 0 second timer print after Stopping...?
// Lessions learned:
// How async node works:

// 1. Call stack:
// main() --> log() --> remove log() -->**setTimeout([])--> moves to Node APIs
// --> ***setTimeout()--> moves to Node APIs-->we are left with only main()
// --> log('stopping') --> removes log --> removes main-->++
// -->from callback Q: Callback( 0 sec)--> log('0 sec)--> remove log
// --> from callback Q: Callback( 2 sec) --> log('2 sec')--> removes log

// Node APIs:
// **setTimeout( 2 sec)--> ***setTimeout( 0 sec)--> moves to Callback Queue

// Callback Queue:
//***Callback (0 sec)-->moves to call stack after main() is removed-->
// **Callback (2 sec)--> moves to call stack when callback 0 is removed-->

// Event Loop:
// Looks at Call stack and Callback Queue
// If the Call stack is empty, it moves the fn from callback Q to Call Stack
// If not,waits.

console.log("Starting...");

setTimeout(() => {
  console.log("2 second timer");
}, 2000);

setTimeout(() => {
  console.log("0 second timer");
}, 0);

console.log("Stopping....");
