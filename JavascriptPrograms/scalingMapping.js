let lengths = [3, 7, 5];
let multiple = 8;

let scale = (multiple) => { let scale2 = lengths.map((e) => e * multiple)
return scale2;
};
console.log(scale(8));