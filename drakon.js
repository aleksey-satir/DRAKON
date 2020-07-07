var a=document.getElementById('index');
var b=document.getElementById('txt');
var ctx=a.getContext('2d');
canvas=[];
obj="";
ctx.font='15px Arial'
ctx.lineWidth=2;
ctx.fillStyle="#c2a894"; 
function action(x, y){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.rect(x, y, 120, 40);
	ctx.moveTo(x+60, y);
	ctx.lineTo(x+60, y-20);
	ctx.moveTo(x+60, y+40);
	ctx.lineTo(x+60, y+60);
	ctx.fill();
	ctx.stroke();         
	ctx.closePath();
}
function question(x, y){
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
	ctx.stroke();
	ctx.closePath();
}
function for_start(x, y){
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
	ctx.stroke();
	ctx.closePath();
}
function for_finish(x, y){
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
function jump(x, y){
	ctx.beginPath();
	ctx.moveTo(x+60, y-20);
	ctx.lineTo(x+60, y+60);
	ctx.moveTo(x+100, y+60);
	ctx.lineTo(x+20, y+60);
	ctx.moveTo(x+55, y+40);
	ctx.lineTo(x+60, y+60);
	ctx.lineTo(x+65, y+40);
	ctx.stroke();
	ctx.closePath();
}
function mark(x, y){
	ctx.beginPath();
	ctx.moveTo(x+60, y-20);
	ctx.lineTo(x+60, y+60);
	ctx.moveTo(x+80, y+15);
	ctx.lineTo(x+60, y+20);
	ctx.lineTo(x+80, y+25);
	ctx.moveTo(x+60, y+20);
	ctx.lineTo(x+120, y+20);
	ctx.stroke();
	ctx.closePath();
}
function draw_obj(o, x, y){
	if(o=="action"){
		action(x, y);
	}
	else if(o=="question"){
		question(x, y);
	}
	else if(o=="for_start"){
		for_start(x, y);
	}
	else if(o=="for_finish"){
		for_finish(x, y);
	}
	else if(o=="mark"){
		mark(x, y);
	}
	else if(o=="jump"){
		jump(x, y);
	}
}
function remember(list){
	//ctx.clearRect(0, 0, a.width, a.height);
	for(var i=0; i<list.length;i++){
		var a=list[i][1];
		var b=list[i][2];
		o=list[i][0];
		draw_obj(o, a, b);
	}
}


function menu(num_of_obj){
}

var x, y, draw, num=0;
a.addEventListener('mousedown', e => {
	x=e.clientX;
	y=e.clientY;
	draw=1;
	for(var i=0; i<canvas.length;i++){
		if(x<=canvas[i][1]+120 && x>=canvas[i][1] && y<=canvas[i][2]+40 && y>=canvas[i][2]){
			draw=2;
			num=i;
			break;
		}
	}
});

a.addEventListener('mousemove', e => {
	if(draw>0){
		if(draw==2){
			canvas[num][1]=x;
			canvas[num][2]=y;
			obj=canvas[num][0];
		}
		ctx.clearRect(0, 0, a.width, a.height);
		remember(canvas);
		x=Math.trunc(e.clientX/120)*130+25;
		y=Math.trunc(e.clientY/80)*80+25;
		draw_obj(obj, x, y);	
	}
});

a.addEventListener('mouseup', e => {
	if(draw>0){
		if(draw==1){
			canvas.push([obj, x, y, '']);
		}
		menu(canvas.length-1);
		x=undefined; 
		y=undefined;
		draw=0;
	}
});
