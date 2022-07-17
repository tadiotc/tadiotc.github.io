
		function sumirTudo(){
			$('.slideSlid').hide().animate({"height":"0"});
			$('.slideSlid-ul').hide();
			$('li.seccaoli').hide();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').hide();
		}

		function aparecerInicio(){
			$('.slideSlid').fadeIn().animate({"height":"100%"});
		}
		
		function aparecerResto(){
			$('.slideSlid-ul').delay(1200).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(0)').delay(1500).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(2000).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(0)').addClass('ativa');
		}
		function clicarFechar(){
			$('.slideSlid-ul li.seccaoli:eq(0)').fadeOut();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(500).fadeOut();
			$('.slideSlid-ul').delay(700).fadeOut();
			$('.slideSlid').delay(1000).animate({"height":"0"});
			$('.slideSlid-ul li').delay(1200).fadeOut().removeClass('ativa');	
		}
		
		function proxSli (){
			if($('.slideSlid-ul li.ativa').next('seccaoli')){
				$('.slideSlid-ul li.ativa').fadeOut(400, function(){
					$('.slideSlid-ul li').fadeOut().removeClass('ativa');
					$(this).removeClass('ativa').next().fadeIn().addClass('ativa');
				});
			}else{
				$('.slideSlid-ul li.ativa').fadeOut(400, function(){
					$('.slideSlid-ul li.ativa').removeClass('ativa');
					$('.slideSlid-ul li:eq(0)').fadeIn().addClass('ativa');
					});
				}
			}
			
		

			
			
			 
		
		function anteSli (){
			if($('.slideSlid-ul li.ativa').index()> 1){
				$('.slideSlid-ul li.ativa').fadeOut(400, function(){
					$('.slideSlid-ul li').fadeOut().removeClass('ativa');
					$(this).prev().fadeIn().addClass('ativa');
				});
			}else{
				$('.slideSlid-ul li.ativa').fadeOut(400, function(){
					$('.slideSlid-ul li.ativa').removeClass('ativa');
					$('.slideSlid-ul li:last-of-type').fadeIn().addClass('ativa');
					});
				}
			}





		

	$(document).ready(function(){	
		$(sumirTudo);
		$('a.fechaSlid').click(function( event ) {
			  event.preventDefault();
			  $(clicarFechar);
		 });
		 
		    $('a.proxSlid').on('click',function(){

			  if($('.slideSlid-ul li:eq(15)').hasClass('ativa')){

				$('.slideSlid-ul li').fadeOut().removeClass('ativa');
				$('.slideSlid-ul li').hide();
				$('.slideSlid-ul li:eq(0)').fadeIn().addClass('ativa');

			  }else{
				$(proxSli);
			  }
		   });


		 
		    $('a.anteSlid').on('click',function(){

			  if($('.slideSlid-ul li:eq(0)').hasClass('ativa')){

				$('.slideSlid-ul li').fadeOut().removeClass('ativa');
				$('.slideSlid-ul li').hide();
				$('.slideSlid-ul li:eq(15)').fadeIn().addClass('ativa');

			  }else{
				$(anteSli);
			  }
		   });


		  for ($i = 1; $i <= 4; $i++);
			$first = ($i == 1? 'first' : '');
			$active = ($i == 1? 'active' : '');


  
	});
	
	

 		function aparecer5(){
			$('.slideSlid-ul li').fadeOut().removeClass('ativa');
			$('.slideSlid-ul li').hide();
			$('.slideSlid-ul li:eq(0)').fadeIn().addClass('ativa');
		}
	

 		function aparecerImg(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(0)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(0)').addClass('ativa');
		}


 		function aparecerImg1(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(1)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(1)').addClass('ativa');
		}


 		function aparecerImg2(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(2)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(2)').addClass('ativa');
		}


 		function aparecerImg3(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(3)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(3)').addClass('ativa');
		}


 		function aparecerImg4(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(4)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(4)').addClass('ativa');
		}


 		function aparecerImg5(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(5)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(5)').addClass('ativa');
		}


 		function aparecerImg6(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(6)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(6)').addClass('ativa');
		}


 		function aparecerImg7(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(7)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(7)').addClass('ativa');
		}


 		function aparecerImg8(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(8)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(8)').addClass('ativa');
		}


 		function aparecerImg9(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(9)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(9)').addClass('ativa');
		}


 		function aparecerImg10(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(10)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(10)').addClass('ativa');
		}


 		function aparecerImg11(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(11)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(11)').addClass('ativa');
		}


 		function aparecerImg12(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(12)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(12)').addClass('ativa');
		}


 		function aparecerImg13(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(13)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(13)').addClass('ativa');
		}

 		function aparecerImg14(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(14)').delay(1000).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(1500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(14)').addClass('ativa');
		}

 		function aparecerImg15(){
			$('.slideSlid').fadeIn(100).animate({"height":"100%"},200);
			$('.slideSlid-ul').delay(500).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(15)').delay(1000).fadeIn();
			$('.slideSlid-ul li.seccaoli:eq(15)').addClass('ativa');
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(10000).fadeIn(1000, function(){$(aparecer5);});
			
		}
		
		
	
	var KEYBOARD = {
    left: 37
  , right: 39
		}

$(document).on('keyup.modal', function (event) {
    if (event.which == KEYBOARD.left) {

			if($('.slideSlid-ul li.ativa').index()> 1){
				$('.slideSlid-ul li.ativa').fadeOut(400, function(){
					$('.slideSlid-ul li').fadeOut().removeClass('ativa');
					$(this).prev().fadeIn().addClass('ativa');
				});
			}else{
				$('.slideSlid-ul li.ativa').fadeOut(400, function(){
					$('.slideSlid-ul li.ativa').removeClass('ativa');
					$('.slideSlid-ul li:last-of-type').fadeIn().addClass('ativa');
					});
				}

    } else if (event.which == KEYBOARD.right) {


			if($('.slideSlid-ul li.ativa').next('seccaoli')){
				$('.slideSlid-ul li.ativa').fadeOut(400, function(){
					$('.slideSlid-ul li').fadeOut().removeClass('ativa');
					$(this).removeClass('ativa').next().fadeIn().addClass('ativa');
				});
			}else{
				$('.slideSlid-ul li.ativa').fadeOut(400, function(){
					$('.slideSlid-ul li.ativa').removeClass('ativa');
					$('.slideSlid-ul li:eq(0)').fadeIn().addClass('ativa');
					});
				}



    }
})
