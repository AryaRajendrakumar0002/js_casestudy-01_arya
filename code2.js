var arr = [1,2,3,1,4,4,5,4,7,2,3,4,6,4,4,9,0,2,4];
  
obj = {};
let el,
    max = 0;
for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]]++;
}
  
for (const i in obj) {
    if (max < obj[i]) {
        max = obj[i];
        el = i;
    }
}
  
console.log("The most occured element is: " + el);