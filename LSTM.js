const brain = require('brain.js'); 

const data = require('./data.json');

const net = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

//console.log(trainingData);

net.train(trainingData, {iterations: 50});
    
const output = net.run("My program has a bug");

console.log(`Category: ${output}`);

//TODO: make the trained network save and load it in to decrease load times.



