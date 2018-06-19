$(document).ready(function() {
                          
					if(navigator.onLine){
                          
                          $(".complete").hide();
						$(".loader").delay(10000).hide(function(){
							$(this).fadeOut("slow");
							$(".complete").show();
							$(this).hide();
						});
						//$('nav#menu').mmenu();
						//icon image
						/*$("#icon-img").attr("src","img/logo.png");*/
						//splash Screen
						var imageUrl = "/img/splash.png";
						$('.loader').css('background-image', 'url(' + imageUrl + ')');
						


					} 
					else {
						
						
							alert("no Internet Connection");
							window.location.href = "noconnection.html";

						}
					});

		  /*	$(".loader").delay(10000).hide(0);
	    $(".loader").fadeIn("slow");
	}  */
