// practicing Promises on javascript (BMI calculator)

function BMI(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number")
      reject("Arguments must be of type number")
    else 
      resolve(weight / (height**2))
  })
}

function showBMI(weight, height) {
  BMI(weight, height)
  .then((result) => {
    console.log(`The BIM result was ${result}`);
    if (result < 18.5) 
      console.log("Situation: underweight");
    else if(result < 25) 
      console.log("Situation: normal weight");
    else if(result < 30) 
      console.log("Situation: overweight");
    else if(result < 40) 
      console.log("Situation: obese");
    else 
      console.log("Situation: morbidly obese");
  })
  .catch((err) => {
      console.log(err);
  });
  console.log(`Calculating BIM for weight ${weight} and height ${height}...`);
}

//testing
showBMI(71, 1.74);
showBMI(48, 1.60);
showBMI(71, "texto");
showBMI(82, 1.72);
showBMI(120, 1.80);
