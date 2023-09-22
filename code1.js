var arr =[1,2,3,4];
function array(){
    console.log(arr[0]);
}
array();
let n =arr[0];
function prime(n){
    
    if(n<2)
    return '${n}not a prime number'
      for(let i =2;i<n;i++){
          if(n % i === 0){
              return '${n}not a prime number'
          }
      }
      return '${n} is a prime number'
}
prime(n);