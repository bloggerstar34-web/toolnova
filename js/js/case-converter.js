function upperCase(){

let t=document.getElementById("text");

t.value=t.value.toUpperCase();

}

function lowerCase(){

let t=document.getElementById("text");

t.value=t.value.toLowerCase();

}

function titleCase(){

let t=document.getElementById("text");

t.value=t.value.toLowerCase().replace(/\b\w/g,function(l){

return l.toUpperCase();

});

}
