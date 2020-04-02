    function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
			}else{
			return getComputedStyle(obj,false)[attr];	
				}
		}	

	
	function startMove(obj,json,fn){
		
		clearInterval(obj.timer);
		
		obj.timer=setInterval(function(){
			var flag=true;
			for(var attr in json){
			// 取得当前值
			var icur=0;
			if(attr=='opacity'){
				icur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}else{
			    icur=parseInt(getStyle(obj,attr));
				}
			//计算速度	
			var ispeed=(json[attr]-icur)/10;
			ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
			//检测停止
			if(icur!=json[attr]){
				flag=false;
				}
		
			if(attr=='opacity')
				{    obj.style.filter='alpha(opacity:'+(icur+ispeed)+')';
					obj.style.opacity=(icur+ispeed)/100;
				}else{
					obj.style[attr]=icur+ispeed+'px';
					
					}	
			  }
			if(flag)
			{
				clearInterval(obj.timer);
				if(fn){
					fn();
					}		
			}
			},200);
		
		}
	


