// Step 1: Import the 'fs' module
const fs = require('fs');

// Step 2: Create a file and write to it
// fs.writeFileSync('demo.txt', 'This is a demo file created using Node.js!');

// Step 3: Read the file's content
const data = fs.readFileSync('demo.txt', 'utf8');
console.log('File Content:', data);

// Step 4: Append more text to the file
// fs.appendFileSync('demo.txt', '\nAdding more content!');

// Step 5: Read the updated file content
// const updatedData = fs.readFileSync('demo.txt', 'utf8');
console.log('Updated File Content:', updatedData);
