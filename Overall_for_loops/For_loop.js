let req_loop = new XMLHttpRequest();
req_loop.open("GET","https://restcountries.com/v2/all");

req_loop.onload = ()=>{
  let a = JSON.parse(req_loop.response);

// For Loop 
     for(let i = 0; i<a.length; i++){
       console.log(a[i].flags.png);
     };
};
req_loop.send();