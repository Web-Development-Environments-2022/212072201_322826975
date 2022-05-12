var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var monsters_num;
var current_monsters_num;
const pill_img = new Image();
var Upname = "UpArrowKey";	
var Downname = "DownArrowKey";	
var Leftname = "LeftArrowKey";	
var Rightname = "RightArrowKey";	

const monster_img = new Image();
var points_location;
var monsters= new Array();
var lives;
var food;
const food_img = new Image();
const gun_img = new Image();
var gun;
var food_interval;
var monsters_interval;
var color1_amount;	
var color2_amount;	
var color3_amount;	
var color1;	
var color2;	
var color3;	
var txt;	
var all_food;	
var drawn;
var UP;
var DOWN;
var LEFT;
var RIGHT;
var isFirstGame;
var signUp;
var currentLogged;
var nrows=10;
var ncols=20;


function divswitch(wind){	
	var WindowFrame = document.getElementById("welcome");
	var RegisterFrame = document.getElementById("register");
	var LogInFrame = document.getElementById("log_in");
	var GameFrame = document.getElementById("game_screen");
	if (wind ==1){
		/*
		WindowFrame.style.backgroundColor = (	
			WindowFrame.style.backgroundColor == "none" ? "#ffff00" : "#ffff00" ); 	
			*/
		colorMenu(1);		
		WindowFrame.style.display = (	
			WindowFrame.style.display == "none" ? "block" : "block"); 	
		RegisterFrame.style.display = (	
			RegisterFrame.style.display == "block" ? "none" : "none"); 	
		LogInFrame.style.display = (	
			LogInFrame.style.display == "block" ? "none" : "none"); 	
		GameFrame.style.display = (	
			GameFrame.style.display == "block" ? "none" : "none"); 	
	}
	if (wind ==2){
		colorMenu(2);
		WindowFrame.style.display = (	
			WindowFrame.style.display == "block" ? "none" : "none"); 	
		RegisterFrame.style.display = (	
			RegisterFrame.style.display == "none" ? "block" : "block"); 	
		LogInFrame.style.display = (	
			LogInFrame.style.display == "block" ? "none" : "none"); 	
		GameFrame.style.display = (	
			GameFrame.style.display == "block" ? "none" : "none"); 	
	}
	if (wind ==3){
		colorMenu(3);
		WindowFrame.style.display = (	
			WindowFrame.style.display == "block" ? "none" : "none"); 	
		RegisterFrame.style.display = (	
			RegisterFrame.style.display == "block" ? "none" : "none"); 	
		LogInFrame.style.display = (	
			LogInFrame.style.display == "none" ? "block" : "block"); 	
		GameFrame.style.display = (	
			GameFrame.style.display == "block" ? "none" : "none"); 	
	}
	if (wind==4){
		WindowFrame.style.display = (	
			WindowFrame.style.display == "block" ? "none" : "none"); 	
		RegisterFrame.style.display = (	
			RegisterFrame.style.display == "block" ? "none" : "none"); 	
		LogInFrame.style.display = (	
			LogInFrame.style.display == "block" ? "none" : "none"); 	
		GameFrame.style.display = (	
			GameFrame.style.display == "none" ? "block" : "block"); 	
}
	if (wind ==5){
		var modal = document.getElementById("modal");
		modal.style.display = "block";
	}
    
}

function closeModal(){
	var modal = document.getElementById("modal");
		modal.style.display = "none";
}
function colorMenu(value){
	var windowmenu = document.getElementById("welcome-menu");
	var registermenu = document.getElementById("register-menu");
	var loginmenu = document.getElementById("login-menu");
	var aboutmenu = document.getElementById("about-menu");
	windowmenu.className="notChosen";
	registermenu.className="notChosen";
	loginmenu.className="notChosen";
	aboutmenu.className="notChosen";

	if (value==1){
		windowmenu.className="yesChosen";
	}
	if (value==2){
		registermenu.className="yesChosen";
	}
	if (value==3){
		loginmenu.className="yesChosen";
	}

	if (value==5){
		aboutmenu.className="yesChosen";
	}

}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}



function applySettings(){	
	var scr = document.getElementById("score");
	var tm = document.getElementById("time");
    color1 = document.getElementById("color1").value;	
    color2 = document.getElementById("color2").value;	
    color3 = document.getElementById("color3").value;	
	var gm =document.getElementById("game");
	var Iwon = document.getElementById("winner");
	var Ilost = document.getElementById("loser");
	var err = document.getElementById("balls_error");	
	var rst =document.getElementById("resetbutton");
	var showmnstr = document.getElementById("showmonsters");
	var showfruits = document.getElementById("showfruits");
	var fiver = document.getElementById("5pointercnv");
	var fiftiner = document.getElementById("15pointercnv");
	var twentyfive = document.getElementById("25pointercnv");
	var clr1 = document.getElementById("color1");
	var clr2 = document.getElementById("color2");
	var clr3 = document.getElementById("color3");
    txt = document.getElementById("txt");	
    txt = parseInt(txt.value);	
    mnstr = document.getElementById("n_of_monsters");	
    monsters_num = parseInt(mnstr.value);
	current_monsters_num=monsters_num;	
    var flag_monster=false;	
    var flag_balls=false;	
    var err = document.getElementById("balls_error");	


	if (document.getElementById("U").value=="")
		UP = 38;
	if (document.getElementById("D").value=="")
		DOWN = 40;
	if (document.getElementById("R").value=="")
		RIGHT = 39;
	if (document.getElementById("L").value=="")
		LEFT = 37;
	
    if (txt>=91 || txt<=49 ||!Number.isInteger(txt)){	
        err.style.display = (	
            err.style.display == "none" ? "block" : "block"); 	
        flag_balls=false;	
    }	
    else{	
        err.style.display = (	
            err.style.display == "block" ? "none" : "none"); 	
        flag_balls = true;	
        	
    }	
    var err2 = document.getElementById("monster_error");	
    if (monsters_num>=5 || monsters_num<=0 || !Number.isInteger(monsters_num)){	
        err2.style.display = (	
            err2.style.display == "none" ? "block" : "block"); 	
        flag_monster=false;	
    }	
    else{	
        err2.style.display = (	
            err2.style.display == "block" ? "none" : "none"); 	
        flag_monster=true;	
        	
    }	
	if (flag_monster == true && flag_balls == true){
		
		scr.style.display =(
			scr.style.display == "none" ? "block" : "block"); 
		tm.style.display =(
			tm.style.display == "none" ? "block" : "block"); 
		gm.style.display =(
			gm.style.display == "none" ? "block" : "block"); 
		Ilost.style.display =(
			Ilost.style.display == "block" ? "none" : "none"); 
		Iwon.style.display =(
			Iwon.style.display == "block" ? "none" : "none"); 
		rst.style.display =(
			rst.style.display == "block" ? "none" : "none"); 
		document.getElementById("outputNMonsters").innerText = monsters_num;
		document.getElementById("outputNfruits").innerText = txt;
		showmnstr.style.display =(
			showmnstr.style.display == "none" ? "block" : "block");
		showfruits.style.display =(
			showfruits.style.display == "none" ? "block" : "block");
			var usernameLoggedIn = document.getElementById("usernameLoggedIn");
			usernameLoggedIn.style.display =(
				usernameLoggedIn.style.display == "none" ? "block" : "block"); 
			usernameLoggedInValue.innerText=currentLogged;
			var tempNfru = document.getElementById("txt");
		tempNfru.style.display =(
			tempNfru.style.display == "block" ? "none" : "none"); 
		var tempNmnstr = document.getElementById("n_of_monsters");	
		tempNmnstr.style.display =(
			tempNmnstr.style.display == "block" ? "none" : "none"); 
		clr1.style.display =(
			clr1.style.display ==  "block" ? "none" : "none");
		clr2.style.display =(
			clr2.style.display ==  "block" ? "none" : "none");
		clr3.style.display =(
			clr3.style.display ==  "block" ? "none" : "none");
		
		
		fiver.style.display =(
			fiver.style.display ==  "none" ? "inline-block" : "inline-block");
		fiftiner.style.display =(
			fiftiner.style.display ==  "none" ? "inline-block" : "inline-block");
		twentyfive.style.display =(
			twentyfive.style.display ==  "none" ? "inline-block" : "inline-block");
		var ctx = fiver.getContext("2d");
		ctx.fillStyle = clr1.value;
		ctx.fillRect(1, 1,50,26.99)
		var ctx = fiftiner.getContext("2d");
		ctx.fillStyle = clr2.value;
		ctx.fillRect(1, 1,50,26.99)
		var ctx = twentyfive.getContext("2d");
		ctx.fillStyle = clr3.value;
		ctx.fillRect(1, 1,50,26.99)

		var stbutton= document.getElementById("setSettingsButton");
		stbutton.style.display =(
			stbutton.style.display ==  "block" ? "none" : "none");
		var rndbutton= document.getElementById("randomSettingsButton");
		rndbutton.style.display =(
			rndbutton.style.display ==  "block" ? "none" : "none");
		var game_screen=document.getElementById("game_screen");
		game_screen.style.display =(
			game_screen.style.display ==  "none" ? "block" : "block");
		var gameTop= document.getElementById("topOfCanvas");
		gameTop.style.display =(
			gameTop.style.display ==  "none" ? "block" : "block");
		var gameShow= document.getElementById("game");
		gameShow.style.display =(
			gameShow.style.display ==  "none" ? "block" : "block");
		
			var upB = document.getElementById("U");	
			var downB = document.getElementById("D");	
			var rightB = document.getElementById("R");	
			var leftB = document.getElementById("L");	
			var showupB = document.getElementById("showU");	
			var showdownB = document.getElementById("showD");	
			var showrightB = document.getElementById("showR");	
			var showleftB = document.getElementById("showL");	
			upB.style.display =(	
				upB.style.display ==  "inline-block" ? "none" : "none");	
			downB.style.display =(	
				downB.style.display ==  "inline-block" ? "none" : "none");	
			leftB.style.display =(	
				leftB.style.display ==  "inline-block" ? "none" : "none");	
			rightB.style.display =(	
				rightB.style.display ==  "inline-block" ? "none" : "none");	
			var upB = document.getElementById("U");	
			var downB = document.getElementById("D");	
			var rightB = document.getElementById("R");	
			var leftB = document.getElementById("L");	
				
			showupB.style.display =(	
				showupB.style.display ==  "none" ? "block" : "block");	
			showdownB.style.display =(	
				showdownB.style.display ==  "none" ? "block" : "block");	
			showleftB.style.display =(	
				showleftB.style.display ==  "none" ? "block" : "block");	
			showrightB.style.display =(	
				showrightB.style.display ==  "none" ? "block" : "block");	
				
			document.getElementById("outputU").innerText = Upname;	
			document.getElementById("outputD").innerText = Downname;	
			document.getElementById("outputR").innerText = Rightname;	
			document.getElementById("outputL").innerText = Leftname;
		
         Start();	
		 NewRound();
    }	
}

function rand(){
	var scr = document.getElementById("score");
	var tm = document.getElementById("time");
	var gm =document.getElementById("game");
	var Iwon = document.getElementById("winner");
	var Ilost = document.getElementById("loser");
	var rst =document.getElementById("resetbutton");
	var showmnstr = document.getElementById("showmonsters");
	var showfruits = document.getElementById("showfruits");
	var fiver = document.getElementById("5pointercnv");
	var fiftiner = document.getElementById("15pointercnv");
	var twentyfive = document.getElementById("25pointercnv");
    color1 = getRandomColor();	
    color2 = getRandomColor();	
    color3 = getRandomColor();	
	var clr1 = document.getElementById("color1");
	var clr2 = document.getElementById("color2");
	var clr3 = document.getElementById("color3");	
    txt = Math.floor(Math.random() * (90 - 50 + 1)) + 50;	
    monsters_num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;	
	current_monsters_num=monsters_num;
    var flag_monster=false;	
    var flag_balls=false;	
	scr.style.display =(
		scr.style.display == "none" ? "block" : "block"); 
	tm.style.display =(
		tm.style.display == "none" ? "block" : "block"); 
	gm.style.display =(
		gm.style.display == "none" ? "block" : "block"); 
	Ilost.style.display =(
		Ilost.style.display == "block" ? "none" : "none"); 
	Iwon.style.display =(
		Iwon.style.display == "block" ? "none" : "none"); 
	rst.style.display =(
		rst.style.display = "block" ? "none" : "none"); 
	document.getElementById("outputNMonsters").innerText = monsters_num;
	document.getElementById("outputNfruits").innerText = txt;
	showmnstr.style.display =(
		showmnstr.style.display == "none" ? "block" : "block");
	showfruits.style.display =(
		showfruits.style.display == "none" ? "block" : "block");
		var usernameLoggedIn = document.getElementById("usernameLoggedIn");
		usernameLoggedIn.style.display =(
			usernameLoggedIn.style.display == "none" ? "block" : "block"); 
		usernameLoggedInValue.innerText=currentLogged;
	
	var tempNfru = document.getElementById("txt");
	tempNfru.style.display =(
		tempNfru.style.display == "block" ? "none" : "none"); 
	var tempNmnstr = document.getElementById("n_of_monsters");	
	tempNmnstr.style.display =(
		tempNmnstr.style.display == "block" ? "none" : "none"); 
		
	clr1.style.display =(
		clr1.style.display ==  "block" ? "none" : "none");
	clr2.style.display =(
		clr2.style.display ==  "block" ? "none" : "none");
	clr3.style.display =(
		clr3.style.display ==  "block" ? "none" : "none");
	
	
	fiver.style.display =(
		fiver.style.display ==  "none" ? "inline-block" : "inline-block");
	fiftiner.style.display =(
		fiftiner.style.display ==  "none" ? "inline-block" : "inline-block");
	twentyfive.style.display =(
		twentyfive.style.display ==  "none" ? "inline-block" : "inline-block");
	var ctx = fiver.getContext("2d");
	ctx.fillStyle = color1;
	ctx.fillRect(1, 1,50,26.99)
	var ctx = fiftiner.getContext("2d");
	ctx.fillStyle = color2;
	ctx.fillRect(1, 1,50,26.99)
	var ctx = twentyfive.getContext("2d");
	ctx.fillStyle = color3;
	ctx.fillRect(1, 1,50,26.99)

	var stbutton= document.getElementById("setSettingsButton");
	stbutton.style.display =(
		stbutton.style.display ==  "block" ? "none" : "none");
	var rndbutton= document.getElementById("randomSettingsButton");
	rndbutton.style.display =(
		rndbutton.style.display ==  "block" ? "none" : "none");
    UP = 38;
	DOWN=40;
	LEFT=37;
	RIGHT=39;
	var gamevar = document.getElementById("game_screen");
	gamevar.style.display =(
		gamevar.style.display ==  "none" ? "block" : "block");
	
	var gameTop= document.getElementById("topOfCanvas");
	gameTop.style.display =(
		gameTop.style.display ==  "none" ? "block" : "block");
	var gameShow= document.getElementById("game");
	gameShow.style.display =(
		gameShow.style.display ==  "none" ? "block" : "block");
		var upB = document.getElementById("U");	
		var downB = document.getElementById("D");	
		var rightB = document.getElementById("R");	
		var leftB = document.getElementById("L");	
		var showupB = document.getElementById("showU");	
		var showdownB = document.getElementById("showD");	
		var showrightB = document.getElementById("showR");	
		var showleftB = document.getElementById("showL");	
		upB.style.display =(	
			upB.style.display ==  "inline-block" ? "none" : "none");	
		downB.style.display =(	
			downB.style.display ==  "inline-block" ? "none" : "none");	
		leftB.style.display =(	
			leftB.style.display ==  "inline-block" ? "none" : "none");	
		rightB.style.display =(	
			rightB.style.display ==  "inline-block" ? "none" : "none");	
		var upB = document.getElementById("U");	
		var downB = document.getElementById("D");	
		var rightB = document.getElementById("R");	
		var leftB = document.getElementById("L");	
			
		showupB.style.display =(	
			showupB.style.display ==  "none" ? "block" : "block");	
		showdownB.style.display =(	
			showdownB.style.display ==  "none" ? "block" : "block");	
		showleftB.style.display =(	
			showleftB.style.display ==  "none" ? "block" : "block");	
		showrightB.style.display =(	
			showrightB.style.display ==  "none" ? "block" : "block");	
			
		document.getElementById("outputU").innerText = Upname;	
		document.getElementById("outputD").innerText = Downname;	
		document.getElementById("outputR").innerText = Rightname;	
		document.getElementById("outputL").innerText = Leftname;
    Start();	
	NewRound();
}	

function newGame(){
	var gm =document.getElementById("game");
	var Iwon = document.getElementById("winner");
	var Ilost = document.getElementById("loser");
	var rst =document.getElementById("resetbutton");
	var showmnstr = document.getElementById("showmonsters");
	var showfruits = document.getElementById("showfruits");
	var fiver = document.getElementById("5pointercnv");
	var fiftiner = document.getElementById("15pointercnv");
	var twentyfive = document.getElementById("25pointercnv");
	var fiver = document.getElementById("5pointercnv");
	var fiftiner = document.getElementById("15pointercnv");
	var twentyfive = document.getElementById("25pointercnv");
	var clr1 = document.getElementById("color1");
	var clr2 = document.getElementById("color2");
	var clr3 = document.getElementById("color3");
	var upB = document.getElementById("U");	
	var downB = document.getElementById("D");	
	var rightB = document.getElementById("R");	
	var leftB = document.getElementById("L");	
	var showupB = document.getElementById("showU");	
	var showdownB = document.getElementById("showD");	
	var showrightB = document.getElementById("showR");	
	var showleftB = document.getElementById("showL");
	gm.style.display =(
		gm.style.display == "none" ? "block" : "block"); 
	Ilost.style.display =(
		Ilost.style.display == "block" ? "none" : "none"); 
	Iwon.style.display =(
		Iwon.style.display == "block" ? "none" : "none"); 
	rst.style.display =(
		rst.style.display = "block" ? "none" : "none"); 
	fiver.style.display =(
		fiver.style.display ==  "inline-block" ? "none" : "none");
	fiftiner.style.display =(
		fiftiner.style.display ==  "inline-block" ? "none" : "none");
	twentyfive.style.display =(
		twentyfive.style.display ==  "inline-block" ? "none" : "none");
	
	clr1.style.display =(
		clr1.style.display ==  "none" ? "inline-block" : "inline-block");
	clr2.style.display =(
		clr2.style.display ==  "none" ? "inline-block" : "inline-block");
	clr3.style.display =(
		clr3.style.display ==  "none" ? "inline-block" : "inline-block");
	showmnstr.style.display =(
		showmnstr.style.display == "block" ? "none" : "none");
	showfruits.style.display =(
		showfruits.style.display == "block" ? "none" : "none");
		var usernameLoggedIn = document.getElementById("usernameLoggedIn");
		usernameLoggedIn.style.display =(
			usernameLoggedIn.style.display == "none" ? "block" : "block"); 
		usernameLoggedInValue.innerText=currentLogged;

	var tempNfru = document.getElementById("txt");
	tempNfru.style.display =(
		tempNfru.style.display == "none" ? "inline-block" : "inline-block"); 
	var tempNmnstr = document.getElementById("n_of_monsters");	
	tempNmnstr.style.display =(
		tempNmnstr.style.display == "none" ? "inline-block" : "inline-block"); 
	var stbutton= document.getElementById("setSettingsButton");
	stbutton.style.display =(
		stbutton.style.display ==  "none" ? "inline-block" : "inline-block");
	var rndbutton= document.getElementById("randomSettingsButton");
	rndbutton.style.display =(
		rndbutton.style.display ==  "none" ? "inline-block" : "inline-block");
	keysDown={}
	window.clearInterval(interval);
	window.clearInterval(monsters_interval);
	window.clearInterval(food_interval);
	current_monsters_num=monsters_num;
	showupB.style.display =(	
		showupB.style.display ==  "inline-block" ? "none" : "none");	
	showdownB.style.display =(	
		showdownB.style.display ==  "inline-block" ? "none" : "none");	
	showleftB.style.display =(	
		showleftB.style.display ==  "inline-block" ? "none" : "none");	
	showrightB.style.display =(	
		showrightB.style.display ==  "inline-block" ? "none" : "none");	
	upB.style.display =(	
		upB.style.display ==  "none" ? "block" : "block");	
	downB.style.display =(	
		downB.style.display == "none" ? "block" : "block");	
	leftB.style.display =(	
		leftB.style.display ==  "none" ? "block" : "block");	
	rightB.style.display =(	
		rightB.style.display == "none" ? "block" : "block");
	// Start();	
	// NewRound();
	
}

function getRandomColor(){	
    let highestValue = 0xFFFFFF;	
    let randomNumber = highestValue* Math.random();	
    randomNumber = Math.floor(randomNumber);	
    randomNumber = randomNumber.toString(16);	
    let randomColor = randomNumber.padStart(6,0);	
    return `#${randomColor.toUpperCase()}`	
}

$(document).ready(function() {
	context = canvas.getContext("2d");
	score=0;
	keysDown = {};
	
	signUp={};
	signUp["k"]="k";
	addEventListener(
		"keydown",
		function(e){
			if (e.keyCode==38 || e.keyCode==40)
			{
				e.preventDefault();
			}
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e){
			keysDown[e.keyCode] = false;
			if (e.keyCode==27)
			{
				if(modal.style.display == "block")
					modal.style.display="none";
			}
		},
		false
	);
});

function Start() {

	board = new Array();
	points_location = new Array();
	
	pac_color = "yellow";
	var cnt = nrows*ncols;
	var food_remain = txt;	
    all_food = food_remain;	
    color1_amount = float2int(0.60*all_food);	
    color2_amount = float2int(0.30*all_food);	
    color3_amount = float2int(0.10*all_food);	
    	
    drawn= false;	
	pacman_remain = 1;
	
	shape.direction="RIGHT";
	monster_img.src = 'images/ghost.png';	
	pill_img.src = 'images/Pill.png';
	for (var m = 0; m < monsters_num; m++) {
		monsters[m]=new Object();
	}
	lives=5;
	live1.src = 'images/life_true.png';
	live1.width=50;
	live2.src = 'images/life_true.png';
	live2.width=50;
	live3.src = 'images/life_true.png';
	live3.width=50;
	live4.src = 'images/life_true.png';
	live4.width=50;
	live5.src = 'images/life_true.png';
	live5.width=50;
	food_img.src = 'images/food.png' 
	food=new Object();
	food.i=5;
	food.j=0;
	food.isEaten=false;

	gun_img.src= 'images/kill_ghost.jpg';
	gun = new Object();
	gun.i=3;
	gun.j=0;
	gun.isEaten=false;
	free_space = new Array();	

	start_time = new Date();
	for (var i = 0; i < ncols; i++) {
		board[i] = new Array();
		points_location[i]=new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < nrows; j++) {
			if (
				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2)
			) {
				board[i][j] = 4;
				points_location[i][j]=4;

				
			} else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					food_remain--;
					var chosen_color= choose_color();	
                    if (chosen_color=="blue"){	
                        board[i][j] = "b";	
						points_location[i][j]="b";
                    }	
                    if (chosen_color=="green"){	
                        board[i][j] = "g";	
						points_location[i][j]="g";
                    }	
                    if (chosen_color=="red"){	
                        board[i][j] = "r";
						points_location[i][j]="r";	
                    }
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					if ((i==0 && j==0)|| ((i==0 && j==19)) || ((i==19 && j==0)) || ((i==19 && j==19))){	
						continue;	
					}
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;
					points_location[i][j]=0;
					

				} else {
					board[i][j] = 0;
					points_location[i][j]=0;
					free_space.push([i,j]);
				}
				cnt--;
			}
		}		
	}
	board[food.i][food.j]=9;
	board[gun.i][gun.j]=10;
	var random_number = Math.floor(Math.random() * (free_space.length - 0 + 1)) + 0;	
	var random_square = free_space[random_number];	
	board[random_square[0]][random_square[1]] = "heal";	
	points_location[random_square[0]][random_square[1]] = "heal";
	
	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		var chosen_color= choose_color();	
        if (chosen_color=="blue"){	
            board[emptyCell[0]][emptyCell[1]] = "b";	
        }	
        if (chosen_color=="green"){	
            board[emptyCell[0]][emptyCell[1]] = "g";	
        }	
        if (chosen_color=="red"){	
            board[emptyCell[0]][emptyCell[1]] = "r";	
        }
		food_remain--;
	}
	createIntervals();

}

function float2int (value) {	
    return value | 0;	
}

function NewRound(){
	var arr = new Array();
	var options= new Array();
	options[0]=[0,0];
	options[1]=[0,9];	
	options[2]=[19,0];	
	options[3]=[19,9];

	if (monsters_num==4)
	{
		arr=options;
	}

	if (monsters_num==1)
	{
		var rand = Math.floor(Math.random()*4);
		arr[0]=options[rand];
	}
	if (monsters_num==3)
	{
		var rand = Math.floor(Math.random()*4);
		if (rand==0){
			arr[0]=options[1];
			arr[1]=options[2];
			arr[2]=options[3];
		}
		if (rand==1){
			arr[0]=options[0];
			arr[1]=options[2];
			arr[2]=options[3];
		}
		if (rand==2){
			arr[0]=options[0];
			arr[1]=options[1];
			arr[2]=options[3];
		}	
		if (rand==3){
			arr[0]=options[0];
			arr[1]=options[1];
			arr[2]=options[2];
		}	
	}
	if (monsters_num==2)
	{
		var rand1 = Math.floor(Math.random()*4);
		arr[0]=options[rand1];
		var rand2 = Math.floor(Math.random()*3);
		while(rand2==rand1)
		{
			rand2 = Math.floor(Math.random()*3);
		}
		arr[1]=options[rand2];
	}
	for (var k=0;k<arr.length;k++)
	{

		var i = arr[k][0];
		var j = arr[k][1];
		board[i][j]=k+5;
		monsters[k].i=i;
		monsters[k].j=j;
	}
}


function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 9 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[UP]) {
		return 1;
	}
	if (keysDown[DOWN]) {
		return 2;
	}
	if (keysDown[LEFT]) {
		return 3;
	}
	if (keysDown[RIGHT]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	var xsizecenter = (canvas.width/ncols)-10;
	var ysizecenter = (canvas.height/nrows)-10;
	for (var i = 0; i < ncols; i++) {
		for (var j = 0; j < nrows; j++) {
			var center = new Object();
			center.x = i * (canvas.width/ncols) + (canvas.width/(ncols*2));
			center.y = j * (canvas.height/nrows) + (canvas.height/(nrows*2));
			if (board[i][j] == 2) {
				context.beginPath();
				if (shape.direction=="UP")
					context.arc(center.x, center.y, 20, 1.65 * Math.PI, 1.35 * Math.PI); // up
				if (shape.direction=="RIGHT")
					context.arc(center.x, center.y, 20, 0.15 * Math.PI, 1.85 * Math.PI); // right
				if (shape.direction=="LEFT")
					context.arc(center.x, center.y, 20, 1.15 * Math.PI, 0.85 * Math.PI); // left
				if (shape.direction=="DOWN")
					context.arc(center.x, center.y, 20, 0.65 * Math.PI, 0.35 * Math.PI); // down
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				if (shape.direction=="UP")
					context.arc(center.x - 15, center.y - 5, 5, 0, 2 * Math.PI); // up
				if (shape.direction=="RIGHT")
					context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // right
				if (shape.direction=="LEFT")
					context.arc(center.x - 5, center.y - 15, 5, 0, 2 * Math.PI); // left
				if (shape.direction=="DOWN")
					context.arc(center.x - 15, center.y + 5, 5, 0, 2 * Math.PI); // down

				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == "b" || board[i][j] == "g" || board[i][j] == "r") { //a fruit 
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				if (board[i][j]=="b"){	
                    context.fillStyle = color1; //color	
				    context.fill();	
                }	
                if (board[i][j]=="g"){	
                    context.fillStyle = color2; //color	
				    context.fill();	
                }	
                if (board[i][j]=="r"){	
                    context.fillStyle = color3; //color	
				    context.fill();	
                }
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.strokeStyle  = "red"; //color
				context.shadowColor = '#d53';
				context.shadowBlur = 4;
				context.lineJoin = 'bevel';
				context.lineWidth = 2;
				context.strokeRect(center.x - (canvas.width/ncols)/2, center.y - (canvas.height/nrows)/2, (canvas.width/ncols), (canvas.height/nrows));

			} else if (board[i][j] == 5){
				context.drawImage(monster_img, center.x-xsizecenter/2,center.y-ysizecenter/2,xsizecenter,ysizecenter);
			}
			else if (board[i][j] == 6){
				context.drawImage(monster_img, center.x-xsizecenter/2,center.y-ysizecenter/2,xsizecenter,ysizecenter);
			}
			else if (board[i][j] == 7){
				context.drawImage(monster_img, center.x-xsizecenter/2,center.y-ysizecenter/2,xsizecenter,ysizecenter);
			}
			else if (board[i][j] == 8){
				context.drawImage(monster_img, center.x-xsizecenter/2,center.y-ysizecenter/2,xsizecenter,ysizecenter);
			}
			else if (board[i][j]==9){
				context.drawImage(food_img, center.x-xsizecenter/2,center.y-ysizecenter/2,xsizecenter,ysizecenter);
			}
			else if (board[i][j]==10){
				context.drawImage(gun_img, center.x-xsizecenter/2,center.y-ysizecenter/2,xsizecenter,ysizecenter);
			}
			else if (board[i][j] == "heal"){	
				context.drawImage(pill_img, center.x-25,center.y-25,50,50);	
			}
		}
	}
	// context.fillRect(10, 10, 50, 50);
	// context.fillStyle =
	// 'rgba(0, 0, 200, 0.5)';
	// context.fillRect(30, 30, 50, 50);
	r=2;
	// context.lineJoin = "round";
}

function choose_color(){	
    while (true){	
        var number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;	
        if (color1_amount+color2_amount+color3_amount!=0){	
            if (number==1){ //blue	
                if (color1_amount!=0){	
                    color1_amount--;	
                    return "blue";	
                }	
            }	
            if (number==2){ //green	
                if (color2_amount!=0){	
                    color2_amount--;	
                    return "green";	
                }	
            }	
            if (number==3){ //red	
                if (color3_amount!=0){	
                    color3_amount--;	
                    return "red";	
                }	
            }	
        }	
        else {	
            return "blue";	
        }	
    }
}

function UpdatePosition() {
	board[shape.i][shape.j] = points_location[shape.i][shape.j];
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.direction="UP";
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < (nrows-1) && board[shape.i][shape.j + 1] != 4) {
			shape.direction="DOWN";
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.direction="LEFT";
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < (ncols-1) && board[shape.i + 1][shape.j] != 4) {
			shape.direction="RIGHT";
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == "b") { //color score	
		score+=5;	
		points_location[shape.i][shape.j]="";
		free_space.push([shape.i,shape.j]);
	}	
    if (board[shape.i][shape.j] == "g") { //color score	
		score+=15;	
		points_location[shape.i][shape.j]="";
		free_space.push([shape.i,shape.j]);
	}	
    if (board[shape.i][shape.j] == "r") { //color score	
		score+=25;	
		points_location[shape.i][shape.j]="";
		free_space.push([shape.i,shape.j]);
	}	
	if (board[shape.i][shape.j] == "heal") { //heal	
		if (lives < 5){	
			AddLife();	
			free_space.push([shape.i,shape.j]);	
			points_location[shape.i][shape.j]="";
		}
	}
	board[shape.i][shape.j] = 2;
	if (shape.i==food.i && shape.j==food.j && food.isEaten==false)
	{
		score+=50;
		food.isEaten=true;
		points_location[shape.i][shape.j]="";
	}
	if (shape.i==gun.i && shape.j==gun.j && gun.isEaten==false)
	{
		
		gun.isEaten=true;
		points_location[shape.i][shape.j]="";
		free_space.push([shape.i,shape.j]);
		killMonster();
	}
	for (var k=0; k<current_monsters_num; k++)
	{
		if (monsters[k].i==shape.i && monsters[k].j==shape.j){	
			KillLife();
			randomspawn(shape.i,shape.j);	
		}
		}

	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	lblTime.value = 60-time_elapsed;
	if (time_elapsed >=60) {
		if (score<100)
		{
			lblScore.value = score;	
			lblTime.value=60-(currentTime - start_time) / 1000;	
			// window.alert("You are better than "+ score+" points!");
			loser();
			endGame();
		}
		else
		{
			lblScore.value = score;	
			lblTime.value=60-(currentTime - start_time) / 1000;
	
			// window.alert("Winner!!!");
			endGame();
			win();
		}
	}
	
	if (score >= (color1_amount*5+color2*15+color3*25-10)) {	
        lblScore.value = score;	
		lblTime.value=60-(currentTime - start_time) / 1000;
		endGame();
		win();

	} else {
		Draw();
	}
	
}
function randomspawn(i_pac,j_pac){	
	board[i_pac][j_pac] = "";	
	while(true){	
		var random_number = Math.floor(Math.random() * (free_space.length - 0 + 1)) + 0;	
		var random_square = free_space[random_number];	
		var i = random_square[0];	
		var j = random_square[1];	
		if ((i==0 && j==0)|| ((i==0 && j==19)) || ((i==19 && j==0)) || ((i==19 && j==19))){	
			continue;	
		}	
		board[random_square[0]][random_square[1]] = 2;	
		shape.i = random_square[0]	
		shape.j = random_square[1]	
		break;	
	}	
}	

function win(){
	var Iwon = document.getElementById("winner");
	var gm = document.getElementById("game");
	var rst = document.getElementById("resetbutton");
	Iwon.style.display =(
		Iwon.style.display == "none" ? "block" : "block"); 
	gm.style.display =(
		gm.style.display == "block" ? "none" : "none"); 
	rst.style.display =(
		rst.style.display == "none" ? "inline-block" : "inline-block"); 

}

function loser(){
	var Ilost = document.getElementById("loser");
	var gm = document.getElementById("game");
	var rst = document.getElementById("resetbutton");
	Ilost.style.display =(
		Ilost.style.display == "none" ? "block" : "block"); 
	gm.style.display =(
		gm.style.display == "block" ? "none" : "none"); 
	rst.style.display =(
		rst.style.display == "none" ? "inline-block" : "inline-block"); 
}

function moveMonster()
{
	for (var k = 0; k < current_monsters_num; k++) {
		board[monsters[k].i][monsters[k].j] = points_location[monsters[k].i][monsters[k].j];
		x = shape.i;
		y = shape.j;
		var randomNum = Math.random();
		if (randomNum<0.5) //move X
		{
			if (monsters[k].i>x){
				if (isFreeForMonster(monsters[k].i-1,monsters[k].j))
					monsters[k].i-=1;}
			else {
				if (monsters[k].i<x)
					if (isFreeForMonster(monsters[k].i+1,monsters[k].j))
						monsters[k].i+=1;
			}
		}
		else //move y
		{
			if (monsters[k].j>y) 
			{
				if (isFreeForMonster(monsters[k].i,monsters[k].j-1))
					monsters[k].j-=1;
			}
			else {if (monsters[k].j<y)
				if (isFreeForMonster(monsters[k].i,monsters[k].j+1))

					monsters[k].j+=1;
			}
		}

		board[monsters[k].i][monsters[k].j] = k+5;
		if (monsters[k].i==shape.i && monsters[k].j==shape.j){	
			KillLife()	
			randomspawn(shape.i, shape.j);	
		}
	}
}

function isFreeForMonster(i,j)
{
	if (points_location[i][j]==4)
		return false;
	if (board[i][j]==5 || board[i][j]==6 || board[i][j]==7 || board[i][j]==8 || board[i][j]==9 || board[i][j]==10)
		return false;
	if (i<0 || i>(ncols-1))
		return false;
	if (j<0 || j>(nrows-1))
		return false;
	return true;
}

function isFreeForFood(i,j)
{
	if (points_location[i][j]==4)
		return false;
		if (i<0 || i>(ncols-1))
		return false;
	if (j<0 || j>(nrows-1))
		return false;
	if (board[i][j]==5 || board[i][j]==6 || board[i][j]==7 || board[i][j]==8 || board[i][j]==10 || board[i][j]==9)
		return false;
	return true;
}

function moveFoodAndGun()
{
	if (food.isEaten==false)

		moveFood();
	
	if (gun.isEaten== false)

		moveGun();
}

function moveFood()
{
	board[food.i][food.j] = points_location[food.i][food.j];
	var randumNum2 = Math.floor(Math.random() * 4); //0 or 1 or 2 or 3
	switch(randumNum2) {
		case 0:
			if (isFreeFood0(food)==true)
				break;
			else
			{
				if (isFreeFood1(food)==true)
					break;
				else
				{
					if (isFreeFood2(food)==true)
						break;
					else
					{
						if (isFreeFood3(food)==true)
							break;
					}
				}
			}
		case 1:
			if (isFreeFood1(food)==true)
				break;
			else
			{
				if (isFreeFood2(food)==true)
					break;
				else
				{
					if (isFreeFood3(food)==true)
						break;
					else
					{
						if (isFreeFood0(food)==true)
							break;
					}
				}
			}
		case 2:
			if (isFreeFood2(food)==true)
				break;
			else
			{
				if (isFreeFood3(food)==true)
					break;
				else
				{
					if (isFreeFood0(food)==true)
						break;
					else
					{
						if (isFreeFood1(food)==true)
							break;
					}
				}
			}
		case 3:
			if (isFreeFood3(food)==true)
				break;
			else
			{
				if (isFreeFood0(food)==true)
					break;
				else
				{
					if (isFreeFood1(food)==true)
						break;
					else
					{
						if (isFreeFood2(food)==true)
							break;
					}
				}
			}
		
	}
	board[food.i][food.j] = 9;
	
}
function isFreeFood0(food){
	if (isFreeForFood(food.i-1,food.j))
	{
		food.i-=1;
		return true;
	}
	return false;
}

function isFreeFood1(food){
	if (isFreeForFood(food.i+1,food.j))
	{
		food.i+=1;
		return true;
	}
	return false;
}

function isFreeFood2(food){
	if (isFreeForFood(food.i,food.j-1))
	{
		food.j-=1;
		return true;
	}
	return false;
}

function isFreeFood3(object){
	if (isFreeForFood(object.i,object.j+1))
	{
		object.j+=1;
		return true;
	}
	return false;
}

function moveGun()
{
	board[gun.i][gun.j] = points_location[gun.i][gun.j];
	var randumNum2 = Math.floor(Math.random() * 4); //0 or 1 or 2 or 3
	switch(randumNum2) {
		case 0:
			if (isFreeFood0(gun)==true)
				break;
			else
			{
				if (isFreeFood1(gun)==true)
					break;
				else
				{
					if (isFreeFood2(gun)==true)
						break;
					else
					{
						if (isFreeFood3(gun)==true)
							break;
					}
				}
			}
		case 1:
			if (isFreeFood1(gun)==true)
				break;
			else
			{
				if (isFreeFood2(gun)==true)
					break;
				else
				{
					if (isFreeFood3(gun)==true)
						break;
					else
					{
						if (isFreeFood0(gun)==true)
							break;
					}
				}
			}
		case 2:
			if (isFreeFood2(gun)==true)
				break;
			else
			{
				if (isFreeFood3(gun)==true)
					break;
				else
				{
					if (isFreeFood0(gun)==true)
						break;
					else
					{
						if (isFreeFood1(gun)==true)
							break;
					}
				}
			}
		case 3:
			if (isFreeFood3(gun)==true)
				break;
			else
			{
				if (isFreeFood0(gun)==true)
					break;
				else
				{
					if (isFreeFood1(gun)==true)
						break;
					else
					{
						if (isFreeFood2(gun)==true)
							break;
					}
				}
			}
		
	}
	board[gun.i][gun.j] = 10;
}

function KillLife()
{
	lives--;
	score-=10;
	if (lives==0)
	{
		loser();
		endGame();
		
	}
	else{
		for (var k = 0; k < current_monsters_num; k++) {
			board[monsters[k].i][monsters[k].j] = points_location[monsters[k].i][monsters[k].j];
		}
		if (lives==4)
		{
			live5.src = 'images/life_false.png';
		}
		else if (lives==3)
		{
			live4.src = 'images/life_false.png';
		}
		else if (lives==2)
		{
			live3.src = 'images/life_false.png';		
		}
		else{
			live2.src = 'images/life_false.png';		
		}

		NewRound();
	}
}

function killMonster()
{
	var k =current_monsters_num-1;
	board[monsters[k].i][monsters[k].j] = points_location[monsters[k].i][monsters[k].j];
	free_space.push([monsters[k].i][monsters[k].j]);

	current_monsters_num--;
}

function myEventD(event,text) {
	switch(text)	
	{	
		case 'U':	
			Upname = event.key;	
			break;	
		case 'D':	
			Downname = event.key;	
			break;	
		case 'R':	
			Rightname = event.key;	
			break;	
		case 'L':	
			Leftname = event.key;	
			break;		
	}
	var r = event.key; 
	document.getElementById(text).value = "";
}

function AddLife()	
{	
	lives++;	
		
	if (lives==5)	
	{	
		live5.src = 'images/life_true.png';	
	}	
	else if (lives==4)	
	{	
		live4.src = 'images/life_true.png';	
	}	
	else if (lives==3)	
	{	
		live3.src = 'images/life_true.png';			
	}	
	else{	
		live2.src = 'images/life_true.png';			
	}	
}	


function myEventU(event,text) {
	switch(text)
	{
		case 'U':
			UP=event.keyCode;
			break;
		case 'D':
			DOWN=event.keyCode;
			break;
		case 'R':
			RIGHT=event.keyCode;
			break;
		case 'L':
			LEFT=event.keyCode;
			break;	
	}
	var r = event.key; 
	document.getElementById(text).value = r;
}

function myEventP(event,text) {
	var r = event.key; 
	document.getElementById(text).value = "";
}

$().ready(function() {

	$("#submitRegister").click(function(){
		$('#username_error').hide();   
		$('#name_error').hide();   
		$('#password_error').hide();   
		$('#date_error').hide();   
		$('#email_error').hide();   

		let usernameValue = $('#Username').val();
		let nameValue = $('#name').val();
		let passwordValue = $('#password').val();
		let dateValue = $('#date').val();
		let emailValue = $('#Email').val();


		if (checkUsername() && checkPassword() && checkName()&& checkEmail() && checkDate())
			signup();
		return false;
		// checkUsername();
		// checkPassword();
		// checkName();
		// checkEmail();
		// checkDate();
		function checkUsername(){
			if (usernameValue.length == '') {
			$('#username_error').show();
			$('#username_error').html
			("*required");
			username_error_var = false;
				return false;
			}
			return true;
		}
		function checkPassword(){
		if (passwordValue.length == '') {
			$('#password_error').show();
			$('#password_error').html
			("*required");
			password_error_var = false;
				return false;
		}
		if (passwordValue.length <6) {
			$('#password_error').show();
			$('#password_error').html
			("*at least 6 chars");
			password_error_var = false;
				return false;
		}
		if (!/\d/.test(passwordValue))
		{
			$('#password_error').show();
			$('#password_error').html
			("*must include numbers");
			password_error_var = false;
				return false;
		}
		if (!/[a-zA-Z]/.test(passwordValue))
		{
			$('#password_error').show();
			$('#password_error').html
			("*must include letters");
			password_error_var = false;
				return false;
		}
		return true;
	}
	function checkName(){

		if (nameValue.length == '') {
			$('#name_error').show();
			$('#name_error').html
			("*required");
			name_error_var = false;
				return false;
		}
		if (/\d/.test(nameValue))
		{
			$('#name_error').show();
			$('#name_error').html
			("*cannot include numbers");
			name_error_var = false;
				return false;
		}
		return true;
	}

	function checkEmail(){
		if (emailValue.length == '') {
			$('#email_error').show();
			$('#email_error').html
			("*required");
			email_error_var = false;
				return false;
		}
		if (!/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/.test(emailValue))
		{
			$('#email_error').show();
			$('#email_error').html
			("*email invalid");
			email_error_var = false;
				return false;
		}
		return true;
	}
	function checkDate(){
		if (dateValue.length == '') {
			$('#date_error').show();
			$('#date_error').html
			("*required");
			date_error_var = false;
				return false;
		}
		return true;
	}
	  });
	});


function createIntervals(){
	keysDown={}
	interval = setInterval(UpdatePosition, 150);
	monsters_interval = setInterval(moveMonster, 1000);
	food_interval = setInterval(moveFoodAndGun, 1000);
}

function endGame()
{
	keysDown={}
	window.clearInterval(interval);
	window.clearInterval(monsters_interval);
	window.clearInterval(food_interval);
	current_monsters_num=monsters_num;
	score=0;
	time_elapsed=0;
}



function login(){
	let user=document.getElementById("UsernameLogin").value;
	let pass=document.getElementById("passwordLogin").value;
	if(user in signUp)
		if (signUp[user]==pass){
			currentLogged=user;
			var LogInFrame = document.getElementById("log_in");
			var GameFrame = document.getElementById("game_screen");
			LogInFrame.style.display = (	
				LogInFrame.style.display == "block" ? "none" : "none"); 	
			GameFrame.style.display = (	
				GameFrame.style.display == "none" ? "block" : "block"); 				
		}
		else{
			window.alert("login failed");
		}
		else{
			window.alert("login failed");
		}
		
}

function signup(){
	let user=document.getElementById("Username").value;
	let pass=document.getElementById("password").value;
	if(!(user in signUp)){
		signUp[user]=pass;
		window.alert("registered");
		return;
	}
	window.alert("User already exists");

}