// CommonJS test to avoid module issues
const parser = require('./src/__genfiles__/parser.js').parser;

console.log('Testing: 2,2 (without parentheses)');
try {
    const result = parser.parse('2,2');
    console.log('Result:', result);
} catch (e) {
    console.log('Error:', e.message);
}

console.log('\nTesting: 2 2 (with space)');
try {
    const result = parser.parse('2 2');
    console.log('Result:', result);
} catch (e) {
    console.log('Error:', e.message);
}
