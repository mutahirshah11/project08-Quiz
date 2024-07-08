import inquirer from "inquirer";
const Quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1 : What is the main purpose of TypeScript?",
        choices: [" A) To style web pages", "B) To handle server-side logic", "C) To add static types to JavaScript", "D) To manage databases"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2 : Which keyword is used to define a variable in TypeScript?",
        choices: ["A) var", "B) let", "C) const", "D) All of the above"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3 : What will be the data type in this code  : let isDone = false; ?",
        choices: ["A) Number", "B) String", "C) Boolean", "D) All of the above"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4 : Who developed TypeScript?",
        choices: ["A) Google ", "B) Microsoft", "C) Amazon ", "D) Apple"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5 : When was TypeScript first released?",
        choices: ["A) 1998 ", "B) 2012", "C) 2013 ", "D) 2017"]
    }
]);
let score = 0;
switch (Quiz.question_1) {
    case "C) To add static types to JavaScript":
        console.log("1. Correct ");
        ++score;
        break;
    default:
        console.log("1.Incorrect");
}
switch (Quiz.question_2) {
    case "D) All of the above":
        console.log("2. Correct ");
        ++score;
        break;
    default:
        console.log("2.Incorrect");
}
switch (Quiz.question_3) {
    case "C) Boolean":
        console.log("3. Correct ");
        ++score;
        break;
    default:
        console.log("3.Incorrect");
}
switch (Quiz.question_4) {
    case "B) Microsoft":
        console.log("4. Correct ");
        ++score;
        break;
    default:
        console.log("4.Incorrect");
}
switch (Quiz.question_5) {
    case "B) 2012":
        console.log("5. Correct ");
        ++score;
        break;
    default:
        console.log("5.Incorrect");
}
console.log(`Your Score is : ${score} out of 5 `);
