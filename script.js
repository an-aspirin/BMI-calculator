// script.js

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startButton').classList.add('hidden');
    document.getElementById('inputSection').classList.remove('hidden');
});

document.getElementById('calculateButton').addEventListener('click', function() {
    // Retrieve input values
    let age = parseFloat(document.getElementById('age').value);
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let MAC = parseFloat(document.getElementById('MAC').value);
    let TSF = parseFloat(document.getElementById('TSF').value);
    let SSF = parseFloat(document.getElementById('SSF').value);
    let THC = parseFloat(document.getElementById('THC').value);
    let CAC = parseFloat(document.getElementById('CAC').value);
    let WC = parseFloat(document.getElementById('WC').value);
    let gender = document.getElementById('gender').value;

    // Calculate ageBioDelta using the function from ageBioDelta.js
    let ageBioDelta = calculateAgeBioDelta(height, weight, MAC, TSF, SSF, THC, CAC, WC, age, gender);
    
    // Calculate phenotype age
    let phenotypeAge = age + ageBioDelta;

    // Show the result
    document.getElementById('inputSection').classList.add('hidden');
    document.getElementById('resultSection').classList.remove('hidden');
    document.getElementById('result').innerText = "Your Phenotype Age is: " + phenotypeAge.toFixed(2);
});
