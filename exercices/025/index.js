// refactoring the code from ex024 (BIM calculator) using async and await syntax

async function BIM(weight, height) {
  if (typeof weight  !== 'number' || typeof height !== 'number') {
    return Promise.reject('arguments must be of type number')
  }
  return weight / (height * height)
}

async function showBIM(weight, height) {
  try {
    console.log(`Calculating BIM for weight ${weight} and height ${height}...`);

    const result = await BIM(weight, height)
    
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
  } catch (error) {
    console.log(error)
  }
}

//testing
showBIM(71, 1.74);
showBIM(48, 1.60);
showBIM(71, "text");
showBIM(82, 1.72);
showBIM(120, 1.80);