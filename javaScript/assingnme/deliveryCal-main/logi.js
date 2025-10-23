console.log( " Shipping fee")
function ability() {
    let Destination = document.getElementById("Destination").value;
    let Weight = Number (document.getElementById("Weight").value);
    let Tick = document.getElementById("Tick"). checked;


    let baseCost = 800;
    
    
    console.log("basecost" ,baseCost);
    console.log("Destination",Destination);
    console.log("Weight",Weight);
    console.log("Tick",Tick);
   
    

    if(Destination === "Lagos"){
        baseCost += 1000
    } 

     if (Destination  === "Calabar"){
        baseCost += 3000

    }
     if (Destination  === "Delta"){
        baseCost += 4000
    }
   
    
   
    
    if(Weight > 20 ){
        
        
        baseCost += 1000;
    }
    
    if(Tick){
        baseCost *=1.5;
    }


document.getElementById("total").innerText =
   "Your total amount of " + Weight + "kg" +
    " to your destination " + Destination +
    " is ₦" + baseCost;

    console.log(
    "Your total amount of " + Weight + "kg" +
    " to your destination " + Destination +
    " is ₦" + baseCost
);


}