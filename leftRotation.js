'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
    
    return [...a.slice(d, a.length), ...a.slice(0, d)];
    
    /*
    if(d % a.length == 0){
        return a;
    }

    let n = Math.floor(d/a.length);
    n = d < a.length ? d: d-n*a.length;

   for(let i =0;i <n;i++){
        for(let j=0;j<a.length-1;j++){
            [a[j], a[j+1]] = [a[j+1], a[j]]; 
        }
   }

   return a;
    
   */
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
