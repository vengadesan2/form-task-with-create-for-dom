function submitform()  {

    //get element
let firstnameInput =document.getElementById("first-name");
let lastnameInput =document.getElementById("last-name");
let pincodeInput=document.getElementById("pincode");
let addressInput=document.getElementById("address");
let genderInput=document.getElementsByName("gender") ;
let foodchoiseInput =document.getElementById("food-choise");
let stateInput=document.getElementById("state");
let countryInput=document.getElementById("country");



//value from data

let firstname = firstnameInput.value;
let lastname =  lastnameInput.value;
let pincode = pincodeInput.value;
let address = addressInput.value;
let gender= genderSelectedvalue(genderInput); 
let food = foodchoiseInput.value;
let state = stateInput.value;
let country = countryInput.value;
///validate data
if(firstname&&lastname){
    let table = document.getElementById("datatable")
    let newRow = table.insertRow(table.rows.length);

    ///creat row
    let  cell1 =newRow.insertCell(0);
    let  cell2=newRow.insertCell(1);
   let  cell3=newRow.insertCell(2);
   let  cell4=newRow.insertCell(3);
   let  cell5=newRow.insertCell(4);
   let cell6=newRow.insertCell(5);
   let  cell7=newRow.insertCell(6);
   let cell8=newRow.insertCell(7);
//data

cell1.innerHTML=`${firstname}`
cell2.innerHTML=`${lastname}`
cell3.innerHTML=`${pincode}`
cell4.innerHTML=`${address}`
cell5.innerHTML=`${gender}`
cell6.innerHTML=`${food}`
cell7.innerHTML=`${state}`
cell8.innerHTML=`${country}`

///cleardata
firstnameInput.value=""
lastnameInput.value=""
pincodeInput.value=""
addressInput.value=""
resetradiobutton(genderInput);
foodchoiseInput.value=""
stateInput.value=""
countryInput.value=""
}
}
function genderSelectedvalue(radioinput){
    for(var i=0;i<radioinput.length;i++){
if(radioinput[i].checked){
    return radioinput[i].value
   
}
    }
    return null
}
function resetradiobutton(radioinput){
    for(var i=0; i<radioinput.length;i++){
        radioinput[i].checked=false
    }
}
