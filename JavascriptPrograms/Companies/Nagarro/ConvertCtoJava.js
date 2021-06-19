// Convert java_variable to c varriable and vice versa
// Input: this_is_a_variable 
// Output: thisIsAVariable

function transform(str) {

    str = str.trim().split('');

    let res = '';

    str.forEach((ele, index) => {

        if (str[index] === '_') {

            res = res + str[index + 1].toUpperCase();

            str.splice(index, 1);

        } else if (str[index] === str[index].toUpperCase()) {

            res = res + '_' + str[index].toLowerCase()

        } else {

            res = res + str[index];

        }

    })

    return res;

}

let output = transform("thisIsAVariable");
console.log(output);