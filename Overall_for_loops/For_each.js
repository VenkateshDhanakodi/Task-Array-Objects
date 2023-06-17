let req_each = new XMLHttpRequest();
req_each.open("GET","https://restcountries.com/v2/all");

req_each.onload = ()=>{
  let a = JSON.parse(req_each.response);

// For Each
    a.forEach(element => {
        console.log(element.nativeName);
    });
};

req_each.send();