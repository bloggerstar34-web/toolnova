function countWords(){

let text=document.getElementById("text").value.trim();

let words=text===""?0:text.split(/\s+/).length;

let chars=text.length;

document.getElementById("words").innerHTML="Words : "+words;

document.getElementById("chars").innerHTML="Characters : "+chars;

}
