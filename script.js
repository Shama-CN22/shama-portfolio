const text="";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text[i];
i++;
setTimeout(typing,100);
}
}
window.onload=typing;
