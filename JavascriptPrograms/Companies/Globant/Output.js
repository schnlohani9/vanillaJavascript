//Self ratinng
// JS 7
// HTML 5
// CSS 5
// React 6
// --------------

var obj = {
    val: 1
};

obj.__proto__.inc = function () {
    return this.val++;
}

obj.__proto__.dec = () => {
    connsole.log(this);  // {}  
    return this.val--;
}

obj.inc();    // 2
//
obj.dec();    // 1 / undefined

// -----------------

var obj = {
    name: 'Sachin',
    age: 18,
    city: 'Pune'
}


var [name,age, city] = obj

var currentCity = obj.city;
var [name,age, currentCity] = obj

// -------------------------------

var arr =   [34, -5, 56, -7, 23, -1, 11];
sort(arr) //[11, -5, 23, -7, 34, -1, 56]

function sort(arr) {
  let positiveNumber = [];

  // Finding out the positve number
  for (let number of arr) {

    if (number > 0) {
      positiveNumber.push(number);

    }

  }

  // Sorting the postive number
  let postiveArraySorted = positiveNumber.sort((a, b) => a - b)

// Raplacing it 
let counter = 0;
for (let i in arr) {
  if (arr[i] > 0) {
    arr[i] = postiveArraySorted[counter];
    counter++;
  }
}
console.log(arr);
}


var arr = [34, -5, 56, -7, 23, -1, 11, 111];
sort(arr) //[11, -5, 23, -7, 34, -1, 56]

-------------------

func1();
func2();
race()

//----------------------
// Ways to create object

var sum = {};
sum[a] = "sdfgd";
Object.create({a:"name"});
new Object()

// ----------------------


componentDidMount => useEffect(()=>{},[])

// ----------------------

<c1 />
<c2 />

Context
// ----------------------

'/home'    -> isLoggedIn

// ----------------------
componentDidMount -> useEffect(()=>{},[])

// ----------------------
axios.create({
headers:{
post:{
header1:'header:
}
}})

// -------------------------

<footer>
	<div class="div1">


.div1{
	position: absolute;
  top:0;
  right: 0;
}

// ----------------------


|-------------|
|			  |
|	 		12|
|			  |
|-------------|


<div class="wrap"> 
	<div class="Content">1</div>
  <div class="Content">2</div>
</div>


.wrap {
	height; 400px;
  width: 400px;
  border: 1px solid;
  position: relative;
}


.Content{
position: absolute;
top: 50%;
left: 50%;
transform:
}

// --------------------

https://www.a.sachin.com/index.html		//setLS	name
https://www.b.sachin.com/index.html		//getLS	name
https://www.a.amit.com/index.html		//getLS name

// -------------------

<footer>footer</footer>
<article>art </article>
<header>head</header>