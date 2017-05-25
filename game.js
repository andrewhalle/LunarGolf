//Note to run, run http-server in terminal first
canvasHeight = 500;
canvasWidth = 1000;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

PIXI.loader.add("planet.png").add("rocket.png").load(setup);

// implementing keyboard actions
function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

var planet;
var rocket;
function setup() {
	planet = new PIXI.Sprite(PIXI.loader.resources["planet.png"].texture);
	planet.scale.x = .2;
	planet.scale.y = .2;
	planet.anchor.set(.5,.5);
	planet.x = canvasWidth/2;
	planet.y = canvasHeight/2;
	
	rocket = new PIXI.Sprite(PIXI.loader.resources["rocket.png"].texture);
	rocket.scale.x = .2;
	rocket.scale.y = .2;
	rocket.anchor.set(.5,.5);
	rocket.rotation = 1.5707;
	rocket.x = canvasWidth/2 + rocket.height/2 + planet.width/2;
	rocket.y = canvasHeight/2;
	rocket.vx = 0;
	rocket.vy = 0;
	
	stage.addChild(planet);
	stage.addChild(rocket);

		
	//Adding keyboard elements
	var left = keyboard(37), 
		up = keyboard(38),
		right = keyboard(39),
		down = keyboard(40);
	// setting right key press
	right.press = function() {
		rocket.vx = +1;
		rocket.vy = 0;
	};
	right.release = function() {
		if (!left.isDown) {
      rocket.vx = 0;
      rocket.vy = 0;
    }
	};
	// setting left key press
	left.press = function() {
    	rocket.vx = -1;
    	rocket.vy = 0;
  	};
  	left.release = function() {
    	if (!right.isDown) {
      	rocket.vx = 0;
    	}
  	};
  	//set up key press
  	up.press = function() {
  		rocket.rotation += 1.5707/5;
  	}
  	down.press = function() {
  		rocket.rotation -= 1.5707/5;
  	}

	

	//set the game state
	state = play;
	//start the loop
	gameLoop();
	
}

function gameLoop() {
	requestAnimationFrame(gameLoop);
	state();
	renderer.render(stage);
}

function play() {
	rocket.x += rocket.vx
	rocket.y += rocket.vy
}