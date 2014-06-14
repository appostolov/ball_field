var can = document.getElementById("can");
var c = can.getContext('2d');

var obj1 = new Object();
obj1.color = "#f00";
obj1.x = 50;
obj1.y = can.height/2;
obj1.r = 10;
obj1.dir = 85;
obj1.speed = 50/obj1.r;

var obj2 = new Object();
obj2.color = "#f33";
obj2.x = can.width - 50;
obj2.y = can.height/2;
obj2.r = 10;
obj2.dir = -45;
obj2.speed = 50/obj2.r;

var obj3 = new Object();
obj3.color = "#f77";
obj3.x = can.width/2;
obj3.y = 30;
obj3.r = 10;
obj3.dir = -45;
obj3.speed = 50/obj3.r;

var obj4 = new Object();
obj4.color = "#faa";
obj4.x = can.width - 150;
obj4.y = 30;
obj4.r = 10;
obj4.dir = -45;
obj4.speed = 50/obj4.r;

var obj5 = new Object();
obj5.color = "#fee";
obj5.x = can.width - 50;
obj5.y = 200;
obj5.r = 10;
obj5.dir = -45;
obj5.speed = 50/obj5.r;

var obj6 = new Object();
obj6.color = "#fee";
obj6.x = can.width - 50;
obj6.y = 300;
obj6.r = 10;
obj6.dir = -45;
obj6.speed = 50/obj6.r;

var obj7 = new Object();
obj7.color = "#fee";
obj7.x = can.width - 350;
obj7.y = 200;
obj7.r = 10;
obj7.dir = -45;
obj7.speed = 50/obj7.r;

var obj8 = new Object();
obj8.color = "#fee";
obj8.x = can.width - 250;
obj8.y = 400;
obj8.r = 10;
obj8.dir = -45;
obj8.speed = 50/obj8.r;

var obj9 = new Object();
obj9.color = "#fee";
obj9.x = can.width - 150;
obj9.y = 200;
obj9.r = 10;
obj9.dir = -45;
obj9.speed = 50/obj9.r;



var objs = new Array();
objs[0] = obj1;
objs[1] = obj2;
objs[2] = obj3;
objs[3] = obj4;
objs[4] = obj5;
objs[5] = obj6;
objs[6] = obj7;
objs[7] = obj8;
objs[8] = obj9;

var mouseX;
var mouseY;

setInterval(function(){
	
	
	
	c.fillStyle = "black";
	c.fillRect(0,0,can.width,can.height);
	
	for( a=0; a<objs.length; a++ ){
		
		c.fillStyle = objs[a].color;
		c.beginPath();
		c.arc(objs[a].x,objs[a].y,objs[a].r,0,2*Math.PI);
		c.fill();
		
		objs[a].vel_x = objs[a].speed*Math.cos(objs[a].dir*Math.PI/180);
		objs[a].vel_y = objs[a].speed*Math.sin(objs[a].dir*Math.PI/180);
		
		if(a!=9){
			objs[a].x += objs[a].vel_x;
			objs[a].y += objs[a].vel_y;
		}
		
		
		objs[9].x = mouseX;
		objs[9].y = mouseY;
		
		for(var b = 0; b<objs.length; b++){
			if(b!=a){
				if(Math.sqrt(Math.pow(objs[b].x - objs[a].x,2) + Math.pow(objs[b].y - objs[a].y,2))<objs[b].r + objs[a].r){
					var dir_b = Math.atan2(objs[b].y - objs[a].y,objs[b].x - objs[a].x)*180/Math.PI;
					objs[b].dir = dir_b;
					objs[a].dir = dir_b+180;
				}
			}
		}
		
		if(objs[a].x < objs[a].r){
			objs[a].x = objs[a].r;
			objs[a].dir = 180-objs[a].dir;
		}
		if(objs[a].x > can.width - objs[a].r){
			objs[a].x = can.width - objs[a].r;
			objs[a].dir = 180-objs[a].dir;
		}
		if(objs[a].y < objs[a].r){
			objs[a].y = objs[a].r;
			objs[a].dir = -objs[a].dir;
		}
		if(objs[a].y > can.height - objs[a].r){
			objs[a].y = can.height - objs[a].r;
			objs[a].dir = -objs[a].dir;
		}
	}
	
},17);

function initCanvas(){
	c.canvas.addEventListener('mousemove',function(event){
		mouseX = event.clientX - c.canvas.offsetLeft;
		mouseY = event.clientY - c.canvas.offsetTop;
	});
	var obj10 = new Object();
	obj10.color = "#fee";
	obj10.x = mouseX;
	obj10.y = mouseY;
	obj10.r = 50;
	obj10.dir = -45;
	obj10.speed = 50/obj9.r;
	
	objs[9]=obj10;
	
}
