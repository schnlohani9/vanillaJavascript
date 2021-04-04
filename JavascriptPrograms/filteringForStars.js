const averages = [6, 15.7, 9, 18, 22.1, 9.2, 4];

const highlight = (mininumFilter)=>{
    if(mininumFilter==undefined){
        throw "Error";
    };
    let highlight2 = averages.filter(e => e>mininumFilter);
    return highlight2
};
console.log(highlight());