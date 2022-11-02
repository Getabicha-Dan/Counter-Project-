
(function(){
    
    function plusCounter (){
   
        Sum = 1 + Sum;
       
    
    }

    let displayCounter= document.getElementById("displayNumber");
    displayCounter.innerText= Sum;
    let Sum = 0;

    let plusButton = document.getElementById("plusButton");
    plusButton.AddEventListener("clik" ,function(){
        plusCounter();
    });
  
    plusCounter();

})();