// learning how to use npm and nodejs 

const dayjs = require("dayjs");

const birthYear = "1997-03-31";
birthdayLog(birthYear);

function birthdayLog(birthDate) {
  const currentDate = dayjs();
  const year = dayjs(birthDate);
  const age = currentDate.diff(year, "year");

  const nextBirthday = year.add(age + 1, "year");

  const daysToNextBirthday = nextBirthday.diff(currentDate, "day") + 1;
  
  console.log(` - Your current age is ${age}.`);
  console.log(` - Your next birthday is ${nextBirthday.format("DD/MM/YYYY")}.`);
  console.log(` - There are ${daysToNextBirthday} days remaining for you to be ${age+1} years old.`);
};


