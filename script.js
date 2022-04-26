'use strict'
class Bag {
  constructor(weight) {
    if (weight) {
      if (this.isOverLimit(weight)) {
        console.log('bag is too heavy')
      } else this.weight = weight
    } else throw new Error('enter a weight')
  }
  isOverLimit(bagWeight) {
    return bagWeight > 50
  }
}

class Passenger {
  bags = []
  passName
  passportNum
  seatNum
  constructor(passName, passportNum, seatNum) {
    this.passName = passName
    this.passportNum = passportNum
    this.seatNum = seatNum
    this.passengerBag = new Bag(5).weight
  }
  addBag(bag) {
    this.bags.push(bag)
  }
}

const bag = new Bag(5)
const passenger = new Passenger('bob', 123234, 2345)
if (!bag.isOverLimit) {
  passenger.addBag(bag)
}

console.log(bag)
console.log(passenger)

class Crew {
  memberName
  position
  staffNumber
  constructor(memberName, position, staffNumber) {
    this.memberName = memberName
    this.position = position
    this.staffNumber = staffNumber
  }
}

class Plane {
  planeName
  constructor(planeName) {
    this.planeName = planeName
  }
}

class Airport {
  airportName
  constructor(airportName) {
    this.airportName = airportName
  }
}
