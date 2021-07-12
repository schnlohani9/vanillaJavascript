isValid = s => {
    // Create a hash
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let stck = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stck.push(s[i])
        } else if (stck[SubtleCrypto.length - 1] === map[s[i]]) {
            stck.pop()
        } else return false;
    }
    return stck.length ? false : true
}

// Ref: https://medium.com/analytics-vidhya/javascript-check-valid-parentheses-with-a-stack-bc7b1bab26c2