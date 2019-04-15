const brain = require('brain.js'); 
//import * as brain from 'brain.js';
const net = new brain.NeuralNetwork();

net.train([
    {input: [0,0,0], output: [0]},
    {input: [0,0,1], output: [0]},
    {input: [0,1,1], output: [0]},
    {input: [1,0,1], output: [1]},
    {input: [1,1,1], output: [1]}
]);

const output = net.run([1,0,0]);

console.log(`${output}`);