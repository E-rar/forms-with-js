function multiply (){
    
    document.write(document.getElementById("number").value*2);
    
}
function calcAge (){
    document.write(2021-document.getElementById("geburtsjahr").value)

}
function diffAge(){
    if(document.getElementById("alter1").value>document.getElementById("alter2").value){
        document.getElementById("diff").innerHTML=document.getElementById("alter1").value-document.getElementById("alter2").value;
    }
    else{
        document.getElementById("diff").innerHTML=document.getElementById("alter2").value-document.getElementById("alter1").value;
    }
}