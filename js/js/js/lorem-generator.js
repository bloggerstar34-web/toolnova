function genLorem(){

let p=parseInt(document.getElementById("para").value);

let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";

let result="";

for(let i=0;i<p;i++){

result+=text+"\n\n";

}

document.getElementById("out").innerText=result;

}
