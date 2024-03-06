for (let index = 0; index < 10; index++) {
    // console.log(index);
}


let arr = [
    "GFG_1", 
    "GeeksForGeeks",
    "Geeks", 
    21,
    "Computer Science"
];

// console.log(arr);

for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] !== "string") break;
        // console.log(arr[index]);   

}


let index = 0;

while( index < arr.length ){
    // console.log(arr[index]);
    index++;
}

var i =0;
for (;;){
    if (i > 3) break;
        // console.log(i);
        i++
}

// arr.forEach((element) => console.log(element));

const apps = ["Instagram", "Facebook", "Youtube", "Snapchat", "Netflix"];

// apps.forEach( apps => console.log(apps));


for (const a of apps) {
    // console.log(a);
}

for (const a in apps) {
    if (apps.hasOwnProperty.call(apps, a)) {
        const element = apps[a];
        console.log(a);
    }
}


