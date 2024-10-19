const inputNumber=document.getElementById('inputNumber')
const selectUnit1=document.getElementById('selectUnit1')
const selectUnit2=document.getElementById('selectUnit2')

const ExChange=document.getElementById('button1')

let inputResult=document.getElementById('inputResult')

const audio1=document.getElementById('AudioSuccess')
const audio2=document.getElementById('AudioPress')
const audio3=document.getElementById('AudioWarning')

inputResult.readOnly=true;

inputNumber.addEventListener('input',()=>{
    const value=(inputNumber.value)
    const regex=/^[0-9]+$/.test(value)
    if (regex==true){
        
    }
    else{
        inputNumber.value=null;
        
    }
})




selectUnit1.addEventListener('click',function(){
    const unit1=selectUnit1.options[selectUnit1.selectedIndex].value;
    audio2.play()
    let valueunit1=0;
    switch (selectUnit1.options[selectUnit1.selectedIndex].value){
        case selectUnit1.options[selectUnit1.selectedIndex].value='centi-meter':
            valueunit1=1;
        case selectUnit1.options[selectUnit1.selectedIndex].value='meter':
            valueunit1=100;
        case selectUnit1.options[selectUnit1.selectedIndex].value='kilo-meter':
            valueunit1=100000;
    }
    return(valueunit1)
})

selectUnit2.addEventListener('click',function(){
    const unit2=selectUnit2.options[selectUnit2.selectedIndex].value;
    let valueunit2=0;
    audio2.play()

    switch (unit2){
        case selectUnit2.options[selectUnit2.selectedIndex].value = "centi-meter" :
            {
            valueunit2 =1;
            break;
            }
        case selectUnit2.options[selectUnit2.selectedIndex].value = "meter" :
            {
            valueunit2 = 100 ;
            break;  
            }  
        case selectUnit2.options[selectUnit2.selectedIndex].value = "kilo-meter" :
            {
            valueunit2 = 100000 ;
            break;
            }
        }
    return(valueunit2)
})

ExChange.addEventListener('click',function(){

    let input1=inputNumber.value;
 
    let variable1=selectUnit1.value;

    let variable2=selectUnit2.value;
    
    if (inputNumber.value== ""){
        audio3.play()
        
        inputNumber.style.borderColor="red"
        inputResult.value=""

    }
    else if (inputNumber.value !=""){
        inputNumber.style.borderColor="black"
    switch (variable1){
        case variable1="centi-meter":
            {
                valueunit1=1;
                break;
            }
        case variable1="meter":
            {
                valueunit1=100;
                break;
            }
        case variable1="kilo-meter":
            {
                valueunit1=100000;
                break;
            }
    }

    switch (variable2){
        case variable2="centi-meter":
            {
                valueunit2=1;
                break;
            }
        case variable2="meter":
            {
                valueunit2=100;
                break;
            }
        case variable2="kilo-meter":
            {
                valueunit2=100000;
                break;
            }
    }
    let result1=(`${(Number(inputNumber.value))}`)
    let result2=(`${((valueunit1) / (valueunit2))}`)
    let finalResult=(result1*result2)

    inputResult.value=finalResult;
    inputResult.style.borderColor="green"
    audio1.play()
}
    
})

















