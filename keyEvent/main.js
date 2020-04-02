// JavaScript Document
var data=['iphone','ipad','联想笔记本','蓝牙音箱','小米6'];
var timer=null,
    flag=0;
window.onload=function(){
	var play=document.getElementById('play');
	var stop1=document.getElementById('stop1');
	
	  play.onclick=playFun;
	  stop1.onclick=stopFun;
	  document.onkeyup=function(event){
		  event=event||winfwo.event;
		  if(event.keyCode==13){
			  if(flag==0){
				 playFun();
				 flag=1;
				  }
				  else{
				stopFun();
				flag=0;	  }
			  }
		  }
	}
function playFun(){
	var title=document.getElementById('title');
	var play=document.getElementById('play');
	  clearInterval(timer);
	  timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		title.innerHTML=data[random];
		},100 );	
		play.style.opacity="0.4";
		}
function stopFun(){
	  clearInterval(timer);
	  var stop=document.getElementById('play');
	  stop.style.opacity="1";
	}		