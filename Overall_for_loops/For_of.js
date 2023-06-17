let req_of = new XMLHttpRequest();
req_of.open("GET","https://restcountries.com/v2/all");

req_of.onload = ()=>{
  let a = JSON.parse(req_of.response);

// For of 
    for(x of a){
        console.log(x)
    };
};

req_of.send();