var value = Array("Dhruv", "Joshi", "Jay", "Gohel", "Dhaval", "Hirani");

if (value.indexOf("Dhruv") != -1) {
    // console.log("yess, it is there");
}else{
    // console.log("noo, it is not there");
}


// for (let index = 0; index < value.length; index++) {
//     const element = console.log(value[index]);
// }

const filter = value.filter((value) => value.length >  5 )

console.log(filter);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const filter1 = array.filter((array) => array >  5 )

console.log(filter1);


log
