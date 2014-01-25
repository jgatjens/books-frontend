'use strict';


// constructor pattern

function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

  // this.toString = function () {
  //   return this.model + " has done " + this.miles + " miles";
  // };

}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};


// Usage:
// We can create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000 );
var ford = new Car("Ford", 2010, 5000 );

// civic.toString();
