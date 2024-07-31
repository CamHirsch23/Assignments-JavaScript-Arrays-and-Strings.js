// Task 1: Adding and Removing Elements
let fruits = ['apple', 'banana', 'orange'];
console.log('Original array:', fruits);

// Use the push method to add a new element to the end of the array
fruits.push('grape');
console.log('After push:', fruits);

// Use the pop method to remove the last element from the array
let poppedFruit = fruits.pop();
console.log('After pop:', fruits);
console.log('Popped fruit:', poppedFruit);

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];
console.log('Original numbers:', numbers);

// Use the sort method to sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log('Sorted numbers:', numbers);

// Task 3: Applying Array Methods
numbers = [3, 1, 5, 2, 4];
console.log('Original numbers:', numbers);

// Use the map method to double each number in the array
let doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

// Use the filter method to filter out even numbers from the array
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log('Odd numbers:', oddNumbers);

// Use the reduce method to calculate the sum of all numbers in the array
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sum);
