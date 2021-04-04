function reshape(n,str){
    let trimmedStr = str.replace(/ /g,'');
    let newStr = "";
    while(trimmedStr!==""){
        newStr = newStr+"\n"+trimmedStr.substring(0,n);
        trimmedStr = trimmedStr.slice(n)
    }
    return newStr;
}

// reshape(2,"1 23 456")
console.log(reshape(3,"abc de fghij"));