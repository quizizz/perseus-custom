// Regression test script to ensure we haven't broken existing functionality
import * as KAS from './packages/kas/src/index.js';

const tests = [
    // Basic arithmetic
    { input: "2+2", expected: "2+2", description: "Basic addition" },
    { input: "3*4", expected: "3*4", description: "Basic multiplication" },
    { input: "10/5", expected: "10/5", description: "Basic division" },
    { input: "7-3", expected: "7+-3", description: "Basic subtraction" },
    
    // Parentheses (without commas)
    { input: "(2+3)", expected: "2+3", description: "Parentheses with addition" },
    { input: "2(3)", expected: "2*3", description: "Implicit multiplication with parentheses" },
    { input: "\\left(x\\right)", expected: "x", description: "\\left \\right with variable" },
    
    // Functions
    { input: "\\frac{1}{2}", expected: "1/2", description: "Fraction" },
    { input: "\\sqrt{4}", expected: "sqrt(4)", description: "Square root" },
    { input: "x^2", expected: "x^2", description: "Exponent" },
    
    // Variables
    { input: "xy", expected: "x*y", description: "Implicit multiplication of variables" },
    { input: "abc", expected: "a*b*c", description: "Multiple variables" },
    
    // LaTeX constants
    { input: "\\pi", expected: "pi", description: "Pi constant" },
    { input: "\\theta", expected: "theta", description: "Theta constant" },
];

let passed = 0;
let failed = 0;

console.log("Running regression tests...\n");

tests.forEach((test, index) => {
    const result = KAS.parse(test.input);
    if (!result.parsed) {
        console.log(`❌ Test ${index + 1} FAILED: ${test.description}`);
        console.log(`   Input: ${test.input}`);
        console.log(`   Error: ${result.error}`);
        failed++;
    } else {
        const actual = result.expr.print();
        if (actual === test.expected) {
            console.log(`✅ Test ${index + 1} PASSED: ${test.description}`);
            passed++;
        } else {
            console.log(`❌ Test ${index + 1} FAILED: ${test.description}`);
            console.log(`   Input: ${test.input}`);
            console.log(`   Expected: ${test.expected}`);
            console.log(`   Actual: ${actual}`);
            failed++;
        }
    }
});

console.log(`\n${"=".repeat(50)}`);
console.log(`Total: ${tests.length} tests`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`${"=".repeat(50)}`);

process.exit(failed > 0 ? 1 : 0);
