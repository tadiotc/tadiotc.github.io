
window.addEventListener("load", inicia);

function inicia(){
/*dv1=document.getElementById("dv1");	
dv1.addEventListener("mouseover", trocaCima);	
dv1.addEventListener("mouseout", trocaOrig);	
*/
btnMenu=document.getElementById("btnmenu1");	
btnMenu.addEventListener("mouseover", trocamenu);	
btnMenu.addEventListener("mouseout", trocamenu2);

btnMenu2=document.getElementById("btnmenu2");	
btnMenu2.addEventListener("mouseover", trocamenu);	
btnMenu2.addEventListener("mouseout", trocamenu2);

btnMenu3=document.getElementById("btnmenu3");	
btnMenu3.addEventListener("mouseover", trocamenu);	
btnMenu3.addEventListener("mouseout", trocamenu2);

btnMenu4=document.getElementById("btnmenu4");	
btnMenu4.addEventListener("mouseover", trocamenu);	
btnMenu4.addEventListener("mouseout", trocamenu2);
};
/*
function trocaCima(){
var obj=event.target;
obj.style.backgroundColor="#c90";	
};
function trocaOrig(){
var obj=event.target;
obj.style.backgroundColor="#000";	
};
*/
function trocamenu(){
var obj=event.target;
obj.style.backgroundColor="#090";	
};
function trocamenu2(){
var obj=event.target;
obj.style.backgroundColor="#c90";	
};
