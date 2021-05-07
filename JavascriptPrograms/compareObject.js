const one = {
    fruit: 'k',
    nutrients: {
        energy: '255kJ',
        minerals: {
            name: 'calcium',
        },
    },
};

const two = {
    fruit: 'k',
    nutrients: {
        energy: '255kJ',
        minerals: {
            name: 'calcium',
        },
    },
};

// Compare the object shallowly
function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

// Compare object if order does not matters
let deepEqualIsOrderMatters = (a, b) => JSON.stringify(a) === JSON.stringify(b)

// Deep Equals
let deepEquals = (a, b) => {
    if (a === b) {
        return true;
    }
    else if (a && b && typeof a === 'object' && typeof b === 'object' && Object.keys(a).length === Object.keys(b).length) {
        if (Array.isArray(a) === Array.isArray(b)) {
            for (let key in a) {
                if (key in b) {
                    if (!deepEquals(a[key], b[key])) {
                        return false
                    }
                } else {
                    return false;
                }
            }
            return true
        }
    }
    return false;
}

console.log(deepEquals(one, two));