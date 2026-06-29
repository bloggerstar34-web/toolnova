function genPass(){

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let len=document.getElementById("len").value;

let pass="";

for(let i=0;i<len;i++){

pass+=chars.charAt(Math.floor(Math.random()*chars.length));

}

document.getElementById("pass").innerHTML=pass;

}
