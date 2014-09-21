
function back(needConfig){  
        var referurl;  
        referurl=document.referrer;  
        if(needConfig&&typeof top.referrer_config_url==="string"&&top.referrer_config_url.length>0){
        	referurl=top.referrer_config_url;
        }
        window.location.href=referurl;  
        return false;  
        }
function goBack(needConfig) {
	back(needConfig);  
}


$(document).ready(function(){
						   
						   $("#go_back").click(function(){
														goBack();
														return false;
														
														});
						   
						   
						   });

$(document).ready(function(){
						   if($("#shenhe_nopass").is(":checked")){
							   $("#shenhe_nopass_why").attr("disabled",false);
							   $("#ceshi_pass_baogao").attr("disabled",true);
							   $("#ceshi_nopass_baogao").attr("disabled",false);
							   }else{
								   $("#shenhe_nopass_why").attr("disabled",true);
							   $("#ceshi_pass_baogao").attr("disabled",false);
							   $("#ceshi_nopass_baogao").attr("disabled",true);
							   }
							$("#shenhe_pass").click(function(){
															   $("#shenhe_nopass_why").attr("disabled",true);
															   $("#ceshi_pass_baogao").attr("disabled",false);
							   $("#ceshi_nopass_baogao").attr("disabled",true);
															   });
							$("#shenhe_nopass").click(function(){
															   $("#shenhe_nopass_why").attr("disabled",false);
															   $("#ceshi_pass_baogao").attr("disabled",true);
							   $("#ceshi_nopass_baogao").attr("disabled",false);
															   });
					   
						   });
						   
//zuoshengdong add start		   
 $(document).ready(function(){
						   if($("#test_nopass").is(":checked")){
							   $("#test_nopass_why").attr("disabled",false);
							   }else{
								   $("test_nopass_why").attr("disabled",true);
							   }
							$("#test_pass").click(function(){
															   $("#test_nopass_why").attr("disabled",true);
															   });
							$("#test_nopass").click(function(){
															   $("#test_nopass_why").attr("disabled",false);
															   });
					   
						   });
//zuoshengdong add end
						   
						   
$(document).ready(function(){
						   $(".yysh_table thead").toggle(function(){
							$(this).next().hide();
							$(this).find("h1").addClass("down");
							},function(){
								$(this).next().show();
								$(this).find("h1").removeClass("down");
								});
						   });


$(document).ready(function(){
   $("input[type=radio]").next().click(function(){
        $(this).prev().attr("checked", true);
   });
   
	/*列表页面checkbox全选和反选*/
   $("#checkall").bind("click", function () {
	   if($.fn.jquery==='1.4'){
		   $("[name = recordId]:checkbox").attr("checked",this.checked);//attr("checked", );
	   }else{
		   $("[name = recordId]:checkbox").prop("checked",this.checked);
	   }
   });

   // chkItem事件
   $("[name = recordId]:checkbox").bind("click", function () {
       var $chk = $("[name = recordId]:checkbox");
       if($.fn.jquery==='1.4'){
    	   $("#checkall").attr("checked", $chk.length == $chk.filter(":checked").length);
       }else{
    	   $("#checkall").prop("checked", $chk.length == $chk.filter(":checked").length);
       }
   });
	
});


$(document).ready(function(){
						   
						   $(".list_select li").hover(function(){
															   $(this).addClass("ehover");
															   },function(){
																   $(this).removeClass("ehover");
																   });
						   
						   });

$(function(){
	//移到右边
	$('#add').click(function() {
	//获取选中的选项，删除并追加给对方
		$('#select1 option:selected').appendTo('#select2');
	});
	//移到左边
	$('#remove').click(function() {
		$('#select2 option:selected').appendTo('#select1');
	});
	//双击选项
	$('#select1').dblclick(function(){ //绑定双击事件
		//获取全部的选项,删除并追加给对方
		$("option:selected",this).appendTo('#select2'); //追加给对方
	});
	//双击选项
	$('#select2').dblclick(function(){
	   $("option:selected",this).appendTo('#select1');
	});
});


$(function(){
    
$("#shaixuan2").click(function(){   	   
	   var shaixuan2_input = $("#filterName2").val();
	   
	  if(shaixuan2_input==""){
	   
    $("#select2").children("span").each(function(){ 
    $(this).children().clone().replaceAll($(this));         //use the content of the <span> replace the <span>使用<SPAN>内容取代<SPAN>
 });
	
	}else{
		$("#select2").children("span").each(function(){ 
    $(this).children().clone().replaceAll($(this));         //use the content of the <span> replace the <span>使用<SPAN>内容取代<SPAN>
 });

     $("#select2").children("option:not(:contains(" + shaixuan2_input + "))").each(function(){ 
     $(this).wrap("<span style='display:none'></span>");
  });
	 }
});

}); 

$(function(){
	   
	$(".table_color tr:even").addClass("even");

	$(".table_color2 tr:odd").addClass("even");

	});