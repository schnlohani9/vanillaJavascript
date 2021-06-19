
// function getIdenticalNumber(inputObject){
//     let diffNumber = [];
//     let outputObject  = {};
//     for(let i in inputObject){
//         diffNumber =diffNumber.concat(inputObject[`${i}`]);
//     }
//     diffNumber = new Set(diffNumber);
//     Array.from(diffNumber).reduce((a,b)=>{a[b]=[]})
//     searchArray(outputObject,inputObject)
// }

/* Input*/
const inputObject = {
    a: [1, 2, 3],
    b: [2, 3, 5],
    c: [1, 5],
    d: [2, 3, 5]
}

/* Output*/
// {
//     "1" : ["a","c"],
//     "2" : ["a","b","d"],
//     "3" : ["a","b","d"],
//     "5" : ["b","c","d"]
// }

function searchArray(inputObject) {
    let outputObject = { "1": [], "2": [], "3": [], "5": [] }
    let counter = 0;
    let initialcounter = 0;
    

    for(let keys in outputObject){
        let IOchildrenArrayValues = Object.keys(outputObject)[counter]; // 1
    for (let IOkeys in inputObject) {
        let valueToBePushed = Object.keys(inputObject)[initialcounter];
        let IOchildrenValue = inputObject[`${IOkeys}`] // [1,2,3]
        for (let values in IOchildrenValue) { 
                    if (IOchildrenArrayValues == IOchildrenValue[values]) {
                        Object.values(outputObject)[counter].push(valueToBePushed);
                }

            }
            initialcounter++;
        }
        initialcounter = 0;
        counter++;
    }
        console.log(JSON.stringify(outputObject));
    }

   searchArray(inputObject);
// console.log(getIdenticalNumber(inputObject));