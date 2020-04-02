var eventUtil={
	//添加事件处理程序
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
			}
		else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
			}
		else{
			element['on'+type]=handler;
			}		
		},
	//删除事件处理程序
	romoveHandler:function(element,type,handler){
		if(element.romoveEventListener){
			element.removeEventListener(type,handler,false);
			}
		else if(element.datachEvent){
			element.detach('on'+type,handler);
			}
		else{
			element['on'+type]=null;
			}		
		
		},
	getEvent:function(event){
		return event?event:window.event;
		},	
		
	getType:function(event){
		return event.type;
		},
	
	//获取目标元素
	getElement:function(event){
		return event.target||event.srcElenment;
		},
	
	//取消默认行为	
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
			}
		else{
			event.returnvalue=false;
			}	
		},
		
	//取消事件冒泡	
	stopPropagation:function(event){
		  if(event.stopPropagation){
			  event.stopPropagation();
			  }
		else{
			event.cancelBubble();
			}	  
		},
	//鼠标滚动值
	getWheelDelta:function(event){
		if(event.wheelDelta)
		{
			return(client.engine.opera&&client.engine.opera<9.5?
			-event.wheelDelta:event.wheelDelta);
			}else{
			return -event.detail*40;
			}
		},
	
	}