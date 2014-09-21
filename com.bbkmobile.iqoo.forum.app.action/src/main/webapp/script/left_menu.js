// JavaScript Document

$(document).ready(function(){
						   
				$(".main_left_top h2").toggle(function(){
												   
												   $(".menu_s>ul").slideDown(100);
												   $(".menu_s h1").addClass("selected");
												   $(this).addClass("qbss")
												   },function(){
													   
													   $(".menu_s>ul").slideUp(100);
													   $(".menu_s h1").removeClass("selected");
													   $(this).removeClass("qbss");
													   })
				
$(".menu_s li h2").click(function(){
								if($(this).next("ul").is(":hidden")){
								$(this).next("ul").slideDown(100);
								$(this).addClass("selected");
													 
							}else{
								$(this).next("ul").slideUp(100);
								$(this).removeClass("selected");
								}
								})	

$(".menu_s h1").click(function(){
								if($(this).next("ul").is(":hidden")){
								$(this).next("ul").slideDown(100);
								$(this).addClass("selected");
													 
							}else{
								$(this).next("ul").slideUp(100);
								$(this).removeClass("selected");
								}
								})

$(".menu_s li a").click(function(){
								 $(".menu_s h1").removeClass("clicked");
								 $(".menu_s li a").removeClass("selected");
								 $(".menu_s li h2").removeClass("bg_on");
								 $(this).addClass("selected");
								 $(this).parent().parent().parent().find("h1").addClass("clicked");


})

$(".menu_s li h2").hover(function(){
																		 $(this).addClass("over")
																		 },function(){
																			$(this).removeClass("over") 
																			 })

$(".menu_s li li a").click(function(){
								 $(".menu_s h1").removeClass("clicked");
								 $(".menu_s li a").removeClass("selected");
								 $(".menu_s li h2").removeClass("bg_on");
								 $(this).addClass("selected");
								 $(this).parent().parent().parent().find("h2").addClass("bg_on");
								 $(this).parent().parent().parent().parent().parent().find("h1").addClass("clicked");


})
				
						   
})


