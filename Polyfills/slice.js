// Write polyfills for slice


// ES5 Array.slice polyfill.
// Lets you easily turn array-like objects into actual arrays:
//   Array.slice(arguments).map(...);

Array.prototype.mySlice = function (begin, end) {
    var _slice = Array.prototype.slice;
    var i, arrl = this.length, a = [];
    if (this.charAt) { // Although IE < 9 does not fail when applying Array.prototype.slice
        // to strings, here we do have to duck-type to avoid failing
        // with IE < 9's lack of support for string indexes
        for (i = 0; i < arrl; i++) {
            a.push(this.charAt(i));
        }
    }
    else { // This will work for genuine arrays, array-like objects, NamedNodeMap (attributes, entities, notations), NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes), and will not fail on other DOM objects (as do DOM elements in IE < 9)
        for (i = 0; i < this.length; i++) { // IE < 9 (at least IE < 9 mode in IE 10) does not work with node.attributes (NamedNodeMap) without a dynamically checked length here
            a.push(this[i]);
        }
    }
    return _slice.call(a, begin, end || a.length); // IE < 9 gives errors here if end is allowed as undefined (as opposed to just missing) so we default ourselves
};

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.mySlice(0,2));