window.onload = function(){
	
	var tblRows = document.getElementById("table1").getElementsByTagName("tr");
//	alert(tblRows.length);
//绑定事件
var addEvent = document.addEventListener ? 
		function(el,type,callback){
			el.addEventListener( type, callback, !1 );
		} 
		: function(el,type,callback){
			el.attachEvent( "on" + type, callback );
		};
//精确获取样式
var getStyle = document.defaultView ? function(el,style){
	return document.defaultView.getComputedStyle(el, null).getPropertyValue(style)
} : 
	function(el,style){
		style = style.replace(/\-(\w)/g, function($, $1){
		return $1.toUpperCase();
});
return el.currentStyle[style];
};
var dragManager = {
y:0,

draging:function(e){//mousemove时拖动行
	var handler = dragManager.handler;
	if(handler){
			e = e || event;
		if(window.getSelection){//w3c
			window.getSelection().removeAllRanges();
		}else if(document.selection){
			document.selection.empty();//IE
		}
		var y = e.clientY;
		var down = y > dragManager.y;//是否向下移动
		var tr = document.elementFromPoint(e.clientX,e.clientY);//当前光标所在tr
		if(tr && tr.nodeName == "TD"){
			tr = tr.parentNode;
			dragManager.y = y;
			if( handler !== tr && tr.rowIndex>0 && tr.rowIndex<tblRows.length){
				tr.parentNode.insertBefore(handler, (down ? tr.nextSibling : tr));
			}
		};
	}
},
dragStart:function(e){
	e = e || event;
	var handler = e.target || e.srcElement;
	var tr = document.elementFromPoint(e.clientX,e.clientY);
	if(tr && tr.nodeName == "TD"){
		tr = tr.parentNode;
		if(handler.nodeName == "TD" && tr.rowIndex>0){
			handler = handler.parentNode;
			dragManager.handler = handler;
		if(!handler.getAttribute("data-background")){
			handler.setAttribute("data-background",getStyle(handler,"background-color"));
		}
			//显示为可移动的状态
			handler.style.backgroundColor = "#ccc";
			handler.style.cursor = "move";
			dragManager.y = e.clientY;
		}
	}
},
dragEnd:function(){
	var handler = dragManager.handler;
	if (handler!=null) {
		handler.style.backgroundColor = handler.getAttribute("data-background");
		handler.style.cursor = "default";
		dragManager.handler = null;
	}
},
main:function(el){
	addEvent(el,"mousedown",dragManager.dragStart);
	addEvent(document,"mousemove",dragManager.draging);
	addEvent(document,"mouseup",dragManager.dragEnd);

}
}
var el = document.getElementById("table1");

dragManager.main(el);

}
