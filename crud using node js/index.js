const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

function createRecord(data) {
    fs.appendFile(filePath, data + '\n', (err) => {
        if (err) throw err;
        console.log('Record added successfully.');
    });
}

function readRecords() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

function updateRecord(oldData, newData) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        const updatedData = data.replace(oldData, newData);
        fs.writeFile(filePath, updatedData, (err) => {
            if (err) throw err;
            console.log('Record updated successfully.');
        });
    });
}

function deleteRecord(dataToDelete) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        const updatedData = data.replace(dataToDelete + '\n', '');
        fs.writeFile(filePath, updatedData, (err) => {
            if (err) throw err;
            console.log('Record deleted successfully.');
        });
    });
}

createRecord('Daniyal,18');

readRecords();

updateRecord('Daniyal,18', 'Niaz,42');

deleteRecord('Niaz,42');
