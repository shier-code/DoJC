eventUtil.addHandler(window,'load',function(){
	var go=document.getElementById("go");
	var box1=document.getElementById("box1");
	  
	  eventUtil.addHandler(box1,'click',function(){
		  alert("我是父盒子");
		  });
    eventUtil.addHandler(go,'click',function(e){
		var e=eventUtil.getEvent(e);
		alert(eventUtil.getElement(e));
		eventUtil.preventDefault(e);
		eventUtil.stopPropagation(e);
		});		  
});