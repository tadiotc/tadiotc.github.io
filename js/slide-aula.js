

		function sumirTudo(){
			$('.slideSlid').hide().animate({"height":"0"});
			$('.containerSlid').hide();
			$('li.seccaoli').hide();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').hide();
		}

		function aparecerInicio(){
			$('.slideSlid').fadeIn().animate({"height":"100%"});
		}
		function aparecerResto(){
			$('.containerSlid').delay(1200).fadeIn();
			$('.containerSlid li.seccaoli:eq(0)').delay(1500).fadeIn();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(2000).fadeIn();
			$('.containerSlid li.seccaoli:eq(0)').addClass('ativa');
		}
		function clicarFechar(){
			$('.containerSlid li.seccaoli:eq(0)').fadeOut();
			$('.fechaSlid, .proxSlid, .anteSlid, .numeroSlid').delay(500).fadeOut();
			$('.containerSlid').delay(700).fadeOut();
			$('.slideSlid').delay(1000).animate({"height":"0"});	
		}
		
		function proxSli (){
			if($('.containerSlid li.ativa').next('seccaoli')){
				$('.containerSlid li.ativa').fadeOut(400, function(){
					$('.containerSlid li').fadeOut().removeClass('ativa');
					$(this).removeClass('ativa').next().fadeIn().addClass('ativa');
				});
			}else{
				$('.containerSlid li.ativa').fadeOut(400, function(){
					$('.containerSlid li.ativa').removeClass('ativa');
					$('.containerSlid li:eq(0)').fadeIn().addClass('ativa');
					});
				}
			}
		
		function anteSli (){
			if($('.containerSlid li.ativa').index()> 1){
				$('.containerSlid li.ativa').fadeOut(400, function(){
					$('.containerSlid li').fadeOut().removeClass('ativa');
					$(this).prev().fadeIn().addClass('ativa');
				});
			}else{
				$('.containerSlid li.ativa').fadeOut(400, function(){
					$('.containerSlid li.ativa').removeClass('ativa');
					$('.containerSlid li:last-of-type').fadeIn().addClass('ativa');
					});
				}
			}
		

	$(document).ready(function(){
		$(sumirTudo);
		$(aparecerInicio);
		$(aparecerResto);
		$('a.fechaSlid').click(function( event ) {
			  event.preventDefault();
			  $(clicarFechar);
		 });
		$('a.proxSlid').click(function(){
		  $(proxSli);
		 });
		$('a.anteSlid').click(function(){
		  $(anteSli);
		 });

		  for ($i = 1; $i <= 4; $i++);
			$first = ($i == 1? 'first' : '');
			$active = ($i == 1? 'active' : '');

  
	});