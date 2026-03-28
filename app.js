// Unit 0 Final Practice
// Elijah K

// PSEUDOCODE:
// 1. Create simple variables for a study helper example.
// 2. Use strings to build messages for the user.
// 3. Use a control structure to decide what message to show.
// 4. Build an array of study tasks.
// 5. Use the array by adding a task and accessing items.
// 6. Create an object to store information about one study session.

// ==================================================
// SKILL 1: Values, Data Types, and Operations
// This section shows strings, numbers, booleans, and math operations.
// ==================================================

let userName = "Elijah";
let studyMinutes = 45;
let completedLesson = true;
let breakMinutes = 10;

// Use an operation to calculate total time.
let totalTime = studyMinutes + breakMinutes;

console.log("User Name:", userName);
console.log("Study Minutes:", studyMinutes);
console.log("Completed Lesson:", completedLesson);
console.log("Total Time:", totalTime);

// ==================================================
// SKILL 2: Stringing Characters Together
// This section shows template literals and string methods.
// ==================================================

// PSEUDOCODE:
// Combine values into a sentence that describes the study session.

let studyMessage = `${userName} studied for ${studyMinutes} minutes today.`;
let excitedMessage = studyMessage.toUpperCase();

console.log("Study Message:", studyMessage);
console.log("Excited Message:", excitedMessage);

// ==================================================
// SKILL 3: Control Structures and Logic
// This section shows if/else and comparison operators.
// ==================================================

// PSEUDOCODE:
// If the lesson is complete, show a success message.
// Otherwise, show a message to keep going.

if (completedLesson === true && studyMinutes >= 30) {
  console.log("Great job! You completed your lesson and studied for at least 30 minutes.");
} else {
  console.log("Keep going! Try to finish your lesson and study a little more.");
}

// ==================================================
// SKILL 4: Building Arrays
// This section shows how to create an array with multiple values.
// ==================================================

// PSEUDOCODE:
// Create a list of simple study tasks.

let studyTasks = ["Review notes", "Practice coding", "Read lesson"];

console.log("Study Tasks:", studyTasks);

// ==================================================
// SKILL 5: Using Arrays
// This section shows how to add to an array, access items, and use length.
// ==================================================

// PSEUDOCODE:
// Add one new task.
// Then show the first task and the total number of tasks.

studyTasks.push("Take quiz");

console.log("Updated Study Tasks:", studyTasks);
console.log("First Task:", studyTasks[0]);
console.log("Number of Tasks:", studyTasks.length);

// ==================================================
// SKILL 6: Creating and Using Objects
// This section shows how to create an object and access its properties.
// ==================================================

// PSEUDOCODE:
// Create one object that stores details about a study session.
// Then print values from the object.

let studySession = {
  topic: "JavaScript Basics",
  day: "Friday",
  isFinished: completedLesson,
  taskCount: studyTasks.length
};

console.log("Study Session Object:", studySession);
console.log("Topic:", studySession.topic);
console.log("Finished:", studySession.isFinished);
console.log("Task Count:", studySession.taskCount);