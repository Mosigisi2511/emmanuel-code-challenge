question1
Calculate Demerit Points
function `calculateDemeritPoints()` is designed to simulate the calculation of demerit points based on a given speed compared to a speed limit.
Function
The function checks the speed of a vehicle against a predefined speed limit (70 km/h). Based on the difference between the speed and the speed limit, demerit points are calculated and displayed. If the calculated demerit points exceed 12, a message indicating "licence suspended" is also printed.
- *Speed Limit:** 70 km/h
- *Speed: Initially set to 90 km/h (this can be adjusted ).
- *Demerit Points Calculation:*
  - If the speed is less than or equal to the speed limit, it logs `"Ok"`.
  - If the speed exceeds the speed limit, it calculates demerit points based on the formula `(speed - speedLimit) / 5`, rounded down using `Math.floor()`.
  - It then logs the calculated demerit points using `console.log()`.
  - If demerit points exceed 12, it logs `"licence suspended"`.
question2
The code initializes a variable marks with a value of 60. It then checks the value of marks against predefined ranges using if-else if statements to determine and print the corresponding grade:

Grade "A": If marks is greater than 79.
Grade "B": If marks is between 60 and 79 
Grade "C": If marks is between 50 and 59 
Grade "D": If marks is between 40 and 49 
Grade "E": If marks is 39 or lower
