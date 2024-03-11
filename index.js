// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(d) {
  return function fareMultiplier(c) {
    return c * d;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, t) {
  if (t == returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if (t == returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }
}
