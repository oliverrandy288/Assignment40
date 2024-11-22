<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Assignment</title>
</head>
<body>

    <h1>JavaScript Assignment - Console Output</h1>

    <script>
        // Task 1: Declare variables to represent student information
        let studentName;
        let studentAge;
        let studentGrade;
        let isPresent;

        // Task 2: Assign sample values to the student information variables
        studentName = "Alice";
        studentAge = 15;
        studentGrade = 10;
        isPresent = true;

        // Task 3: Display the student information using console.log() statements
        console.log("Student Name:", studentName);
        console.log("Student Age:", studentAge);
        console.log("Student Grade:", studentGrade);
        console.log("Attendance Status:", isPresent ? "Present" : "Absent");

        // ------------------------------------------------------------

        // Exploring JavaScript Operators (Simple Calculator)

        // Task 1: Declare variables for arithmetic operations
        let num1;
        let num2;

        // Task 2: Assign sample numeric values to the variables
        num1 = 10;
        num2 = 5;

        // Task 3: Perform arithmetic operations on your numeric values using various operators and display the results
        console.log("Sum:", num1 + num2);
        console.log("Difference:", num1 - num2);
        console.log("Product:", num1 * num2);
        console.log("Quotient:", num1 / num2);

        // Task 4: Explore assignment operators and update the values of variables
        num1 += 2;  // num1 = num1 + 2
        num2 *= 3;  // num2 = num2 * 3

        console.log("Updated num1:", num1);
        console.log("Updated num2:", num2);

        // Task 5: Use comparison operators to compare the values of variables
        console.log("Is num1 equal to num2?", num1 === num2);
        console.log("Is num1 greater than num2?", num1 > num2);
        console.log("Is num1 not equal to num2?", num1 !== num2);

        // Task 6: Apply logical operators to combine conditions and display the results
        let isPositive = (num1 > 0) && (num2 > 0); // Check if both numbers are positive
        let isEven = (num1 % 2 === 0) || (num2 % 2 === 0); // Check if at least one number is even

        console.log("Are both numbers positive?", isPositive);
        console.log("Is at least one number even?", isEven);

    </script>

</body>
</html>
