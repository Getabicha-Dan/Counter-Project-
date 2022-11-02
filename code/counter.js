
//(function(){
    
    let Sum = 0;

    
    function plusCounter (){
        
            Sum = 1 + Sum;

            let displayCounter= document.getElementById("displayNumber");
            displayCounter.innerText= Sum;
        }
       
    

    function decrementCounter(){
        if(Sum > 0){
            Sum = Sum -1;
        } 

        let displayCounter = document.getElementById("displayNumber");
        displayCounter.innerText= Sum;
    }
    
    
    let plusButton = document.getElementById("plusButton");
    plusButton.addEventListener("click" , plusCounter);

    let minusButton = document.getElementById("minus");
    minusButton.addEventListener("click" , decrementCounter);


 //})();