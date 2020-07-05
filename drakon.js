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
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}
function connecter(start, finish){
	
}
function remember(list){
	//ctx.clearRect(0, 0, a.width, a.height);
	for(var i=0; i<list.length;i++){
		var a=list[i][1];
		var b=list[i][2];

		if(list[i][0]=="action"){
			action(a, b);
		}
		else if(list[i][0]=="question"){
			question(a, b);
		}
		else if(list[i][0]=="for_start"){
			for_start(a, b);
		}
		else if(list[i][0]=="for_finish"){
			for_finish(a, b);
		}
	}
}
arr=[];

function menu(obj, num){
        var textarea=document.createElement('input');
	var del=document.createElement('button');
	var connect=document.createElement('button');
	textarea.style.position="absolute";
	textarea.style.left=650+"px";
	textarea.style.top=20+"px";
	function clear_menu(){
		textarea.remove();
		del.remove();
		connect.remove();
	}
	del.onclick=function(){
		clear_menu();
		canvas.splice(num, 1);
		ctx.clearRect(0, 0, a.width, a.height);
		remember(canvas);
	}
	del.innerHTML="Удалить";
	del.style.position="absolute";
	del.style.left=650+"px";
	del.style.top=60+"px";

	connect.onclick="";
	connect.innerHTML="Соединить";
	connect.style.position="absolute";
	connect.style.left=650+"px";
	connect.style.top=100+"px";
	
	b.appendChild(textarea);
	b.appendChild(del);
	b.appendChild(connect);
	textarea.focus();

	txt=textarea.value;
}

var x, y, draw;
a.addEventListener('mousedown', e => {
	x=e.clientX;
	y=e.clientY;
	draw=1;
	for(var i=0; i<canvas.length;i++){
		if(x<=canvas[i][1]+120 && x>=canvas[i][1] && y<=canvas[i][2]+40 && y>=canvas[i][2]){
			menu(canvas[i][0], i);
			draw=0;
		}
	}
});

a.addEventListener('mousemove', e => {
	if(draw==1){
		ctx.clearRect(0, 0, a.width, a.height);
		remember(canvas);
		x=Math.trunc(e.clientX/120)*130+25;
		y=Math.trunc(e.clientY/40)*40+25;
		if(obj=="action"){
			action(x, y);
		}
		else if(obj=="question"){
			question(x, y);
		}
		else if(obj=="for_start"){
			for_start(x, y);
		}
		else if(obj=="for_finish"){
			for_finish(x, y);
		}
			
	}
});

a.addEventListener('mouseup', e => {
	if(draw==1){
		canvas.push([obj, x, y, '']);
		menu(obj, canvas.lenght+1);
		x=undefined; 
		y=undefined;
		draw=0;
	}
});


