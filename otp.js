let clickMe=document.querySelector("#click-me-btn");
let popupContainer=document.querySelector(".popup-container")
let otpInputContainer=document.querySelector(".otp-input-container");
let otpInput=document.getElementsByTagName("input");



// CHECK IF IT IS A NUMBER  OR NOT FUNCTION
const checkNumber=(event)=>{
   
    let asciiVal=event.which
    console.log("ascii is  "+asciiVal)
    if (asciiVal === 8  || asciiVal===39) {
        return true;
    } else if( asciiVal === 37){
        return true;

    }
    else if ( asciiVal < 48 || asciiVal > 57 ) {
        return false;
    } else {
        return true;
    }

}




// NEXT INPUT FUNCTION
const nextInputFun=(event)=>{
    let nextInput=event.target.nextElementSibling
         nextInput.focus();

}

// PREVIOUS INPUT FUNCTION
const previousInputFun=(event)=>{
    let previousInput=event.target.previousElementSibling;
    previousInput.focus()

}


// OTP CONTAINER HANDLER FUNCTION
const otpInputContainerHandler=(event)=>{
    let maxLength=1;
     let enterLength=event.target.value.length;
    if(checkNumber(event)){
    if(event.which==39){
        console.log("inside "+event.which)
        rightArrow(event);
    }
    else if(event.which===37){
        leftArrow(event);
    }
    //  let maxLength=1;
    //  let enterLength=event.target.value.length;
    else if(enterLength>=maxLength){
         console.log("target is "+event.target)
         nextInputFun(event);
        
 
        
      }
       else if(enterLength===0 && event.which!="39" && event.which!="37"){
           previousInputFun(event)

}
    }
}


 
        


        
         
       
        
    
   


// PASTE AND AUTO FILL OTP FUNCTION
const otpPasteHandler=(event)=>{
    let data=event.clipboardData.getData('text');
    
    for(let i=0;i<data.length;i++){
        console.log(data[i])
      otpInput[i].value=data[i];
       console.log(otpInput[i])
    }
}

   
   
    


// RIGHT ARROW PRESS 
const rightArrow=(event)=>{
    if(event.which=="39"){
        nextInputFun(event);
    }
}
// LEFT ARROW PRESS
const leftArrow=(event)=>{
    if(event.which=="37"){
        previousInputFun(event)

    }
}

// ALL EVENT LISTENERS
clickMe.addEventListener("click",()=>{
    popupContainer.classList.add("show");
})
otpInputContainer.addEventListener("keyup",otpInputContainerHandler);
otpInputContainer.addEventListener("paste",otpPasteHandler)