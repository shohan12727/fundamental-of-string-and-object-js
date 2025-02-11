const mobile = {
    brand : "samsung",
    color : "black",
    camera : "50mp",
    price : 35000

}

//for of : array 
//for in : object 

for(const prop in mobile){
    console.log(prop),
    console.log(mobile[prop])  
}