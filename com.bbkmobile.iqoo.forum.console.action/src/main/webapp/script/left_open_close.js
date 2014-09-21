$(function(){
		$("#closeLink").toggle(function(){
		$(this).attr("class","close");		
		$("#leftTd").hide();

		},function(){
		$(this).attr("class","open");	
		$("#leftTd").show();
		});	

	});