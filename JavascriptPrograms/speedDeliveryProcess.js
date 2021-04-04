// ## Speed up the delivery process
// ### Description
// Write a function that will calculate total time taken to deliver the package to the customer
// - It should return the total time from order placement to order delivered.
// - It should also mentioned how many halts were there (CourierFacility). *Count arrived and left as 1 entity*
// - It should mentioned the time courier stay at CourierFacility and on which facility it stays for long (use the location key for name of the facility).

// [Video Description](https://youtu.be/AtCPsfKa5u8)
// #### Input
// ```
// [
//     { id: 1, title: "orderPlaced", createdAt: 1589265720000 },
//     { id: 2, title: "orderPacked", createdAt: 1589272920000 },
//     { id: 3, title: "orderShipped", createdAt: 1589316120000 },
//     { id: 4, title: "orderArrivedCourierFacility", createdAt: 1589316120000, location: "first" },
//     { id: 5, title: "orderLeftCourierFacility", createdAt: 1589347800000, location: "first" },
//     { id: 6, title: "orderArrivedCourierFacility", createdAt: 1589560200000, location: "second" },
//     { id: 7, title: "orderLeftCourierFacility", createdAt: 1589581800000, location: "second" },
//     { id: 8, title: "orderArrivedCourierFacility", createdAt: 1589970600000, location: "third" },
//     { id: 9, title: "orderLeftCourierFacility", createdAt: 1590136200000, location: "third" },
//     { id: 10, title: "orderOutForDelivery", createdAt: 1590226200000 },
//     { id: 11, title: "orderDelivered", createdAt: 1590169740000 }
// ]
// ```
// #### Output
// ```
// {
//   totalTime: "10 hrs 20 min",
//   totalHalt: 3,
//   halts: { first: "5 hrs", second: "6 hrs", third: "12 hrs" },
//   maxStay: "third"
// }
// ```

let courierInfo = [
    { id: 1, title: "orderPlaced", createdAt: 1589265720000 },
    { id: 2, title: "orderPacked", createdAt: 1589272920000 },
    { id: 3, title: "orderShipped", createdAt: 1589316120000 },
    { id: 4, title: "orderArrivedCourierFacility", createdAt: 1589316120000, location: "first" },
    { id: 5, title: "orderLeftCourierFacility", createdAt: 1589347800000, location: "first" },
    { id: 6, title: "orderArrivedCourierFacility", createdAt: 1589560200000, location: "second" },
    { id: 7, title: "orderLeftCourierFacility", createdAt: 1589581800000, location: "second" },
    { id: 8, title: "orderArrivedCourierFacility", createdAt: 1589970600000, location: "third" },
    { id: 9, title: "orderLeftCourierFacility", createdAt: 1590136200000, location: "third" },
    { id: 10, title: "orderOutForDelivery", createdAt: 1590226200000 },
    { id: 11, title: "orderDelivered", createdAt: 1590169740000 }
];

var output = {};

function totalHalt() {
    let count = 0;
    for (let i = 0; i < courierInfo.length; i++) {
        if (courierInfo[i].title == "orderArrivedCourierFacility" && courierInfo[i + 1].title === "orderLeftCourierFacility") {
            count++;
        }
    }
    return count;
}

function getHaltTime() {
    let halts = {};
    let maxStay;

    function getTimeComputing(location) {
        for (let i in courierInfo) {
            if (courierInfo[i].location === location) {
                return (courierInfo[parseInt(i) + 1].createdAt - courierInfo[i].createdAt);
            }
        }
    }

    let timeHaltForFirst = getTimeComputing("first");
    let timeHaltForSecond = getTimeComputing("second");
    let timeHaltForThird = getTimeComputing("third");

    if (timeHaltForFirst > timeHaltForSecond && timeHaltForFirst > timeHaltForThird) {
        maxStay = "first"
    }
    else if (timeHaltForSecond > timeHaltForFirst && timeHaltForSecond > timeHaltForThird) {
        maxStay = "second"
    }
    else if (timeHaltForThird > timeHaltForSecond && timeHaltForThird > timeHaltForFirst) {
        maxStay = "third"
    }

    halts.first = timeHaltForFirst;
    halts.second = timeHaltForSecond;
    halts.third = timeHaltForThird;

    output.halts = halts;
    output.maxStay = maxStay;
}

output.totalTime = courierInfo[courierInfo.length - 1].createdAt - courierInfo[0].createdAt;
output.totalHalt = totalHalt();
getHaltTime();
console.log(output);