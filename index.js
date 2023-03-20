//Challenge 1: Student Grade Generator

const studentMarks = prompt("Please enter the student's marks (between 0 and 100):"); //prompts user to input marks 

if (studentMarks >= 0 && studentMarks <= 100) {//this line is for validating that the marks input are gradeable by ensuring marks are between 0 and 100.
// If the input is valid, check the value of the marks and output the correct grade
  if (studentMarks >= 80) {
    console.log("Grade: A");
    return "Grade A"
  } 
  else if (studentMarks >= 60) {
    console.log("Grade: B");
    return "Grade B"
  } 
  else if (studentMarks >= 50) {
    console.log("Grade: C");
    return "Grade C"
  } 
  else if (studentMarks >= 40) {
    console.log("Grade: D");
    return "Grade D"
  } 
  else {
    console.log("Grade: E");//No need to put in else if less than 40 for the last one it would have been an unnecessary clutter 
    return "Grade E"
  }
} 
else {
  console.log("Invalid input. Please enter marks between 0 and 100.");// if marks input by user are invalid returns this error message 
  return "Invalid input. Please enter marks between 0 and 100.";
}

//Challenge 2: Speed Detector 

// Define a function that takes the speed of the car as input
function calculateDemeritPoints(speed) {
  // Set the speed limit and the demerit points for each 5 km/h above the limit
  const speedLimit = 70;
  const demeritPointsPer5Kmh = 1;

  // Check if the speed is less than or equal to the speed limit
  if (speed <= speedLimit) {
    return "Ok"; // If so, return "Ok"
  } 
  else {
    // If the speed is above the limit, calculate the number of demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / 5) * demeritPointsPer5Kmh;

    // If the driver gets more than 12 points, return "License suspended"
    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return "Points: " + demeritPoints; // Otherwise, return the number of demerit points
    }
  }
}

// Prompt the user to enter the speed of the car
let speed = parseInt(prompt("Enter the speed of the car (in km/h): "));

// Call the function and output the result
const result = calculateDemeritPoints(speed);
console.log(result);

//Challenge 3: Net Salary Calculator

function salaryCalculator(basicPay = parseInt(prompt("Enter your basic pay: ")), benefits = parseInt(prompt("Enter your benefits: "))) {
  
  const grossPay = basicPay + benefits;
  const nssfOldRates = 400;
  const pension = 0.06 * grossPay;
  const taxableIncome = grossPay - (nssfOldRates + pension); //this calculates the taxable income by deducting the nssf rates and pension from the grosspay

   const taxReliefCalculator = (taxableIncome) => {
      if (taxableIncome < 24000) {
         return (taxRelief = 0);
      } else {
         return (taxRelief = 2400);
      }
   };

   //    Payroll parameters
   const taxReliefConst = taxReliefCalculator(taxableIncome);
   const taxPayableConst = taxCalculator(taxableIncome);
   const nhifConst = nhifCalculator(grossPay);
   const netPay = grossPay - nssfOldRates - pension - (taxPayableConst - taxReliefConst) - nhifConst;

   console.log(`Gross pay: ${grossPay}`);
   console.log(`NSSF: ${nssfOldRates}`);
   console.log(`Pension: ${pension}`);
   //    taxCalculator(grossPay, nssfOldRates, pension);
   console.log(`Gross Salary: Ksh ${grossPay}, NSSF: Ksh ${nssfOldRates}, Pension: Ksh ${pension}, Tax payable: Ksh ${taxPayableConst}, Tax Relief: Ksh ${taxReliefConst}, NHIF: Ksh ${nhifConst}, Net Pay: Ksh ${netPay.toLocaleString()}`
   );
   return `Gross Salary: Ksh ${grossPay}, NSSF: Ksh ${nssfOldRates}, Pension: Ksh ${pension}, Tax payable: Ksh ${taxPayableConst}, Tax Relief: Ksh ${taxReliefConst}, NHIF: Ksh ${nhifConst}, Net Pay: Ksh ${netPay.toLocaleString()}`;

// Gross Salary calculator
function taxCalculator(taxableIncome) {
  if (taxableIncome >= 24000) {
     let taxBracket1;
     let taxBracket2;
     let taxBracket3;
     let taxPayable;
     if (taxableIncome < 24001) {
        taxBracket1 = 0.1 * taxableIncome;
        taxPayable = Math.round(taxBracket1);
          console.log(`tax payable: ${taxPayable}`);
        return taxPayable;
     } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
        taxBracket1 = 0.1 * 24000;
        taxBracket2 = 0.25 * (taxableIncome - 24000);
        taxPayable = Math.round(taxBracket1 + taxBracket2);
         console.log(`tax payable: ${taxPayable}`);
        return taxPayable;
     } else if (taxableIncome > 32333) {
        taxBracket1 = 0.1 * 24000;
        taxBracket2 = 0.25 * (32333 - 24000);
        taxBracket3 = 0.3 * (taxableIncome - 32333);
        taxPayable = Math.round(taxBracket1 + taxBracket2 + taxBracket3);
         console.log(`tax payable: ${taxPayable}`);
        return taxPayable;
     }
  }
}

// console.log(taxCalculator(65450, 200, 3927));

// NHIF Calculator
function nhifCalculator(grossPay) {
  let nhifRate;
  if (grossPay <= 5999) {
     nhifRate = 150;
     return nhifRate;
  } else if (grossPay >= 6000 && grossPay <= 7999) {
     nhifRate = 300;
     return nhifRate;
  } else if (grossPay >= 8000 && grossPay <= 11999) {
     nhifRate = 400;
     return nhifRate;
  } else if (grossPay >= 12000 && grossPay <= 14999) {
     nhifRate = 500;
     return nhifRate;
  } else if (grossPay >= 15000 && grossPay <= 19999) {
     nhifRate = 600;
     return nhifRate;
  } else if (grossPay >= 20000 && grossPay <= 24999) {
     nhifRate = 750;
     return nhifRate;
  } else if (grossPay >= 25000 && grossPay <= 29999) {
     nhifRate = 850;
     return nhifRate;
  } else if (grossPay >= 30000 && grossPay <= 34999) {
     nhifRate = 900;
     return nhifRate;
  } else if (grossPay >= 35000 && grossPay <= 34999) {
     nhifRate = 950;
     return nhifRate;
  } else if (grossPay >= 40000 && grossPay <= 44999) {
     nhifRate = 1000;
     return nhifRate;
  } else if (grossPay >= 45000 && grossPay <= 49999) {
     nhifRate = 1100;
     return nhifRate;
  } else if (grossPay >= 50000 && grossPay <= 59999) {
     nhifRate = 1200;
     return nhifRate;
  } else if (grossPay >= 60000 && grossPay <= 69999) {
     nhifRate = 1300;
     return nhifRate;
  } else if (grossPay >= 70000 && grossPay <= 79999) {
     nhifRate = 1400;
     return nhifRate;
  } else if (grossPay >= 80000 && grossPay <= 89999) {
     nhifRate = 1500;
     return nhifRate;
  } else if (grossPay >= 90000 && grossPay <= 99999) {
     nhifRate = 1600;
     return nhifRate;
  } else if (grossPay >= 100000) {
     nhifRate = 1700;
     return nhifRate;
  }
}
}
return salaryCalculator()
console.log(salaryCalculator());