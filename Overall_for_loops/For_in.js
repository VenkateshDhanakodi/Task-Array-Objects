let req_in = new XMLHttpRequest();
req_in.open("GET","https://restcountries.com/v2/all");

req_in.onload = ()=>{
  let a = JSON.parse(req_in.response);

// For in 
    for (let x in a){
            console.log(a[x].name);
    };
};
req_in.send();