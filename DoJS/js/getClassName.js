
    //获取class属性值（IE 10之前不支持getElementsByClassName）
function getByClass(clsName,parent){
	var oParent=parent?document.getElementsById(parent):document;
	
	var eles=[],
	elements=oParent.getElementsByTagName('*');
	for(var i=0,j=elements.length;i<j;i++){
			if(elements[i].className=clsName){
				eles.push(elements[i])};
		}
		
		return eles;
		
	}
	
	window.onload=drag;
	
	function drag(){
	
		var oTitle=getByClass('loginBox','login')[0];
		oTitle.onmousedown=fnDown;
		
		}
	function fnDown(event){
		event=event||window.event;
		var oDrag=document.getElementById('login');
		//光标按下时光标和面板之间的距离	
		disX=event.clientX-oDrag.offsetLeft;
		disY=event.clientY-oDrag.offsetTop;
		//移动
		document.onmousemove=function(event){
				event=event||window.event;
				fnMove(event,disX,disY);
			}
		//释放鼠标
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			}	
		}		
	function fnMove(e,posX,posY){
			var oDrag=document.getElementById('login');
		var l=e.clientX-posX;
		    t=e.clientY-posY;
			winW=docuemnt.documentElement.clientwidth||document.body.clientWidth;
			winH=docuemnt.documentElement.clientHeight||document.body.clientHeight;
			maxW=winW-oDrag.offsetWidth;
			maxH=winH-ODrag.offsetHeigth;
			if(l<0){
				l=0;}
				else if(l>maxW){
					l=maxW;;
					}
			if(t<0){
				t=0;}
				else if(t>maxH){
					t=maxH;
					 }		
			oDrag.style.left=l+'px';
			oDrag.style.top=t+'px';
		}	