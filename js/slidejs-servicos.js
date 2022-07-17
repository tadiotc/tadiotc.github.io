
window.addEventListener("load", inicia);
function inicia(){


btnMenu2=document.getElementById("btnmenu2");	
btnMenu2.addEventListener("mouseover", trocamenu);	
btnMenu2.addEventListener("mouseout", trocamenu2);

btnMenu3=document.getElementById("btnmenu3");	
btnMenu3.addEventListener("mouseover", trocamenu);	
btnMenu3.addEventListener("mouseout", trocamenu2);

btnMenu4=document.getElementById("btnmenu4");	
btnMenu4.addEventListener("mouseover", trocamenu);	
btnMenu4.addEventListener("mouseout", trocamenu2);

btnMenu5=document.getElementById("btnmenu5");	
btnMenu5.addEventListener("mouseover", trocamenu);	
btnMenu5.addEventListener("mouseout", trocamenu2);

};

function trocamenu(){
var obj=event.target;
obj.style.color="rgba(255,255,255,1)";	
obj.style.textShadow="1px 1px 10px #fff";	
};
function trocamenu2(){
var obj=event.target;
obj.style.color="rgba(255,255,255,0.6)";
obj.style.textShadow="0px 0px 0px ";};


	var slides=["#s1","#s2","#s3","#s4","#s5","#s6","#s7"];
	slideatual=0;
	slidemax=6;

	$(document).ready(function(){
		
		function comecaSlid(){
		setInterval(troca,10000);
		}
		
		$(comecaSlid);
		
			$("#dv1").fadeIn();
			
			function acoesMenu(){
			$("#dv1, #dv2, #dv3, #dv4").fadeOut();
			$("#dv2 li").fadeOut();
			}
			
			function btnMenu1(){
			$("#dv1").fadeIn();
			}
			$("#btnmenu1").click(function() {
				$(acoesMenu);
				$(btnMenu1);
			});
					
			function btnMenu2(){
			$("#dv2").fadeIn();
			$("#dv2 li:eq(0)").delay(500).fadeIn();
			$("#dv2 li:eq(1)").delay(700).fadeIn();
			$("#dv2 li:eq(2)").delay(900).fadeIn();
			$("#dv2 li:eq(3)").delay(1100).fadeIn();
			}
			$("#btnmenu2").click(function() {
				$(acoesMenu);
				$(btnMenu2);	
			});		

			function btnMenu3(){
			$("#dv3").fadeIn();
			$("#dv3 li").delay(500).fadeIn();
			}
			$("#btnmenu3").click(function() {
				$(acoesMenu);
				$(btnMenu3);	
			});	

			function btnMenu4(){
			$("#dv4").fadeIn();
			  /*	if (window.screen.width < 800) { 
					$('.li2').delay(500).fadeIn();
					$('.li2').css({width:"80%", margin: "0 auto" });
				}
			  	else if (window.screen.width > 800) { 
					$("#dv4 li").delay(500).fadeIn();
				}
				*/
			}
			
			$("#btnmenu4").click(function() {
				$(acoesMenu);
				$(btnMenu4);	
			});		
			
			$("#btnmenu5").click(function() {
				var novaURL = "http://estudiodigitaldf.com.br";
				$(window.document.location).attr('href',novaURL);
			});		

			$("div#slidequadro div").hide();
			$(slides[slideatual]).fadeIn(500);

		function troca(){
			$("div#slidequadro div").fadeOut();
			slideatual++;
			if(slideatual > slidemax){
				slideatual=0;
			}
			$(slides[slideatual]).fadeIn(500);
		}

	});
