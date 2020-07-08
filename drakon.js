var a=document.getElementById('index');
var b=document.getElementById('txt');
var ctx=a.getContext('2d');
canvas=[];
obj="";
ctx.font='15px Arial'
ctx.lineWidth=2;
ctx.fillStyle="#c2a894"; 
function action(x, y, text){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.rect(x, y, 120, 40);
	ctx.moveTo(x+60, y);
	ctx.lineTo(x+60, y-20);
	ctx.moveTo(x+60, y+40);
	ctx.lineTo(x+60, y+60);
	ctx.fill();
	ctx.fillStyle="#000";
	ctx.fillText(text, x+45, y+25, 80); 
	ctx.fillStyle="#c2a894";
	ctx.stroke();         
	ctx.closePath();
}
function question(x, y, text){
	ctx.beginPath();
	ctx.moveTo(x+20, y);
	ctx.lineTo(x+100, y);
	ctx.lineTo(x+120, y+20);
	ctx.lineTo(x+100, y+40);
	ctx.lineTo(x+20, y+40);
	ctx.lineTo(x, y+20);
	ctx.lineTo(x+20, y);
	ctx.moveTo(x+60, y);
	ctx.lineTo(x+60, y-20);
	ctx.moveTo(x+60, y+40);
	ctx.lineTo(x+60, y+60);
	ctx.fill();
	ctx.fillStyle="#000";
	ctx.fillText(text, x+45, y+25, 80); 
	ctx.fillStyle="#c2a894";
	ctx.stroke();
	ctx.closePath();
}
function for_start(x, y, text){
	ctx.beginPath();
	ctx.moveTo(x+20, y);
	ctx.lineTo(x+100, y);
	ctx.lineTo(x+120, y+20);
	ctx.lineTo(x+120, y+40);
	ctx.lineTo(x, y+40);
	ctx.lineTo(x, y+20);
	ctx.lineTo(x+20, y);
	ctx.moveTo(x+60, y);
	ctx.lineTo(x+60, y-20);
	ctx.moveTo(x+60, y+40);
	ctx.lineTo(x+60, y+60);
	ctx.fill();
	ctx.fillStyle="#000";
	ctx.fillText(text, x+45, y+25, 80); 
	ctx.fillStyle="#c2a894";
	ctx.stroke();
	ctx.closePath();
}
function for_finish(x, y, text){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+120, y);
	ctx.lineTo(x+120, y+20);
	ctx.lineTo(x+100, y+40);
	ctx.lineTo(x+20, y+40);
	ctx.lineTo(x, y+20);
	ctx.lineTo(x, y);
	ctx.moveTo(x+60, y);
	ctx.lineTo(x+60, y-20);
	ctx.moveTo(x+60, y+40);
	ctx.lineTo(x+60, y+60);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}
function jump(x, y, text){
	ctx.beginPath();
	ctx.moveTo(x+60, y-20);
	ctx.lineTo(x+60, y+60);
	ctx.moveTo(x+100, y+60);
	ctx.lineTo(x+20, y+60);
	ctx.moveTo(x+55, y+40);
	ctx.lineTo(x+60, y+60);
	ctx.lineTo(x+65, y+40);
	ctx.fillStyle="#000";
	ctx.fillText(text, x+5, y+25, 60); 
	ctx.fillStyle="#c2a894";
	ctx.stroke();
	ctx.closePath();
}
function mark(x, y, text){
	ctx.beginPath();
	ctx.moveTo(x+60, y-20);
	ctx.lineTo(x+60, y+60);
	ctx.moveTo(x+80, y+15);
	ctx.lineTo(x+60, y+20);
	ctx.lineTo(x+80, y+25);
	ctx.moveTo(x+60, y+20);
	ctx.lineTo(x+120, y+20);
	ctx.fillStyle="#000";
	ctx.fillText(text, x+5, y+25, 60); 
	ctx.fillStyle="#c2a894";
	ctx.stroke();
	ctx.closePath();
}
function draw_obj(o, x, y, text){
	if(text==null){
		text=""
	}
	if(o=="action"){
		action(x, y, text);
	}
	else if(o=="question"){
		question(x, y, text);
	}
	else if(o=="for_start"){
		for_start(x, y, text);
	}
	else if(o=="for_finish"){
		for_finish(x, y);
	}
	else if(o=="mark"){
		mark(x, y, text);
	}
	else if(o=="jump"){
		jump(x, y, text);
	}
}
function remember(list){
	for(var i=0; i<list.length;i++){
		var a=list[i][1];
		var b=list[i][2];
		o=list[i][0];
		draw_obj(o, a, b, list[i][3]);
	}
}


function menu(num_of_obj){
	if(canvas[num_of_obj][0]!="for_finish"){
		text=prompt("введите текст блока");
	}
	if(text!=null && text!=""){
		canvas[num_of_obj][3]=text;
		ctx.clearRect(0, 0, a.width, a.height);
		remember(canvas);
	}
}

var x, y, draw, num=0;
function start(event){
	x=Math.trunc(event.clientX/120)*130+25;
	y=Math.trunc(event.clientY/80)*80+25;
	draw=1;
	for(var i=0; i<canvas.length;i++){
		if(x<=canvas[i][1]+120 && x>=canvas[i][1] && y<=canvas[i][2]+40 && y>=canvas[i][2]){
			draw=2;
			num=i;
			break;
		}
	}
}

function go(event){
	if(draw>0){
		x=Math.trunc(event.clientX/120)*130+25;
		y=Math.trunc(event.clientY/80)*80+25;
		if(draw==2){
			ctx.clearRect(0, 0, a.width, a.height);
			canvas[num][1]=x;
			canvas[num][2]=y;
			obj=canvas[num][0];
			remember(canvas);
		}
		else{
			ctx.clearRect(0, 0, a.width, a.height);
			remember(canvas);
			draw_obj(obj, x, y);
		}
	}
}

function finish(event){
	if(draw>0){
		if(draw==1){
			canvas.push([obj, x, y, '']);
			menu(canvas.length-1);
		}
		else if(draw==2){
			menu(num);
		}
		x=undefined; 
		y=undefined;
		draw=0;
	}
}
a.addEventListener("mousedown", start);
a.addEventListener("touchstart", start);
a.addEventListener("mousemove", go);
a.addEventListener("touchmove", go);
a.addEventListener("mouseup", finish);
a.addEventListener("touchend", finish);
a.addEventListener("touchcancel", finish);
