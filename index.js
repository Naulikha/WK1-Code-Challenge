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
  } else {
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
const speed = parseInt(prompt("Enter the speed of the car (in km/h): "));

// Call the function and output the result
const result = calculateDemeritPoints(speed);
console.log(result);