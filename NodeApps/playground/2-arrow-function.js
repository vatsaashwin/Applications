// Alternative syntax for functions

// const square = function(x) {
//   return x * x;
// };

// const square = x => {
//   return x * x;
// };

// const square = x => x * x;

// console.log(square(3));

const event = {
  name: "Birthday Party",
  guestList: ["Aashwin", "Akshita", "Sheenam"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};
// lessons learned: arrow functions doesn't work well
// for 'this' binding (poor candidates for methods)
// Great candidates for everything else
// We can use ES6 format to avoid this as above

event.printGuestList();
