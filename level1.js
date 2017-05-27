canvasHeight = 500;
canvasWidth = 1000;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

PIXI.loader.add("images/planet.png").add("images/rocket.png").add("images/moon.png").add("images/blackhole.png").load(setup);

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
};

// distance function
function distance(s1, s2) {
  return Math.sqrt(Math.pow(s1.x - s2.x, 2) + Math.pow(s1.y - s2.y, 2));
};

//velocity from gravity from planet1 on planet 2
function gravVelocityX(planet1,planet2) {
  return 1*((planet1.m) / Math.pow(distance(planet1, planet2), 2)) * ((planet1.x - planet2.x) / distance(planet1, planet2))
};

function gravVelocityY(planet1,planet2) {
  return 1*((planet1.m) / Math.pow(distance(planet1, planet2), 2)) * ((planet1.y - planet2.y) / distance(planet1, planet2))
};

function hitTestRectangle(r1, r2) {

  //Calculate `centerX` and `centerY` properties on the sprites
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Calculate the `halfWidth` and `halfHeight` properties of the sprites
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Create a `collision` variable that will tell us
  //if a collision is occurring
  let collision = false;

  //Check whether the shapes of the sprites are overlapping. If they
  //are, set `collision` to `true`
  if (Math.abs(r1.centerX - r2.centerX) < r1.halfWidth + r2.halfWidth
  && Math.abs(r1.centerY - r2.centerY) < r1.halfHeight + r2.halfHeight) {
    collision = true;
  }

  //Return the value of `collision` back to the main program
  return collision;
}

var planet;
var rocket;
var moon; 
var blackhole;
var theta;
var thetaBooRight;
var thetaBooLeft;
var rocketRotBooRight = false;
var rocketRotBooLeft = false;
var spacebarBoo = false;
var zkeyBoo = false;
var resetBoo = false;
var powerbar;
var scoreCounter;
var initialVelocity = 1;
var scoreNumber = 1;
var endGameMessage;

function setup() {
  theta = 0;

	planet = new PIXI.Sprite(PIXI.loader.resources["images/planet.png"].texture);
	planet.scale.x = .2;
	planet.scale.y = .2;
	planet.anchor.set(.5,.5);
	planet.x = canvasWidth/5;
	planet.y = canvasHeight/2;
	
	rocket = new PIXI.Sprite(PIXI.loader.resources["images/rocket.png"].texture);
	rocket.scale.x = .2;
	rocket.scale.y = .2;
	rocket.anchor.set(.5,.5);
	rocket.rotation = 1.5707;
	rocket.x = canvasWidth/5 + (rocket.height/2 + planet.width/2)*Math.cos(theta);
  rocket.y = canvasHeight/2 + (rocket.height/2 + planet.width/2)*Math.sin(theta);
	rocket.vx = 0;
	rocket.vy = 0;
  rocket.m = 1;

  moon = new PIXI.Sprite(PIXI.loader.resources["images/moon.png"].texture);
  moon.anchor.x = 0.5;
  moon.anchor.y = 0.5;
  moon.scale.x = 0.3;
  moon.scale.y = 0.3
  moon.x = canvasWidth/2;
  moon.y = canvasHeight/2;
  moon.vx = 0;
  moon.vy = 0;
  moon.m = 10000;

  blackhole = new PIXI.Sprite(PIXI.loader.resources["images/blackhole.png"].texture);
  blackhole.anchor.x = .5;
  blackhole.anchor.y = .5;
  blackhole.scale.x = .5;
  blackhole.scale.y = .5;
  blackhole.x = canvasWidth*(4/5);
  blackhole.y = canvasHeight/2;
  blackhole.vx = 0;
  blackhole.vy = 0;
  blackhole.m = 100000;

  stage.addChild(planet);
  stage.addChild(rocket);
  stage.addChild(moon);
  stage.addChild(blackhole);

  
  //adding in velocity powerbar
  powerbar = new PIXI.DisplayObjectContainer();
  powerbar.position.set(canvasWidth/100, canvasHeight/100);
  stage.addChild(powerbar);

  var innerbar = new PIXI.Graphics();
  innerbar.beginFill(0xF5F5F5);
  innerbar.drawRect(0,0,canvasWidth/10, canvasHeight/100);
  innerbar.endFill();
  powerbar.addChild(innerbar);
  
  var outerbar = new PIXI.Graphics();
  outerbar.beginFill(0xFF3300);
  outerbar.drawRect(0,0,canvasWidth/10, canvasHeight/100);
  outerbar.endFill();
  powerbar.addChild(outerbar);

  powerbar.outer = outerbar;
  outerbar.width = 10;

  
  scoreCounter = new PIXI.Text("Score = "+ scoreNumber,
     {fontFamily: "Arial", fontSize: 20, fill: 0xFFFFFF, align: 'center'});
  scoreCounter.x = canvasWidth/100;
  scoreCounter.y = 2*canvasHeight/100;
  stage.addChild(scoreCounter);
		
	//Adding keyboard elements
	var left = keyboard(37), 
		up = keyboard(38),
		right = keyboard(39),
		down = keyboard(40)
    spacebar = keyboard(32)
    zkey = keyboard(90),
    xkey = keyboard(88);

	// setting right key press
	right.press = function() {
		thetaBooRight = true;
	};
	right.release = function() {
    thetaBooRight = false;
  }; 

	// setting left key press
	left.press = function() {
    	thetaBooLeft = true;
  	};
  left.release = function() {
    thetaBooLeft = false;
  }; 

  //set up key press
	up.press = function() {
		rocketRotBooRight = true;
	};
  up.release = function() {
    rocketRotBooRight = false;
  };

  //set down key press
	down.press = function() {
		rocketRotBooLeft = true;
	}	
  down.release = function() {
    rocketRotBooLeft = false;
  };

  // set spacebar
  spacebar.press = function() {
    spacebarBoo = true;
  };

  // set zkey for power of velocity
  zkey.press = function() {
    zkeyBoo = true;
  };
  zkey.release = function() {
    zkeyBoo = false;
  };

  /* 
  //adding in reset key
  xkey.press = function() {
    stage.removeChild(planet);
    stage.removeChild(moon);
    stage.removeChild(blackhole);
    stage.removeChild(rocket);
    stage.removeChild(powerbar);
    stage.removeChild(scoreCounter);

    spacebarBoo = false;
  };

  xkey.release =  function() {
    scoreNumber += 1;
    setup();
  };
  */

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
  //set rocket rotation with up/down clicks
  if (rocketRotBooRight) {
    rocket.rotation += .05; 
  };
  if (rocketRotBooLeft) {
    rocket.rotation -= .05;
  };
  if (thetaBooRight) {
    theta += .05;
    rocket.rotation += .05;
  };
  if (thetaBooLeft) {
    theta -= .05;
    rocket.rotation -= .05;
  };

  //set power with zkey
  if (zkeyBoo){
    powerbar.outer.width += 1;
    initialVelocity += .1;
    if (powerbar.outer.width > canvasWidth/10) {
      powerbar.outer.width =0;
      initialVelocity = .1;
    };
  };

  //set release with spacebar
  if (spacebarBoo) {
    rocket.vx += (initialVelocity)*Math.sin(rocket.rotation) + gravVelocityX(moon,rocket) + gravVelocityX(blackhole,rocket);
    rocket.vy += -1*(initialVelocity)*Math.cos(rocket.rotation) + gravVelocityY(moon,rocket) + gravVelocityY(blackhole,rocket);
    thetaBooLeft = false;
    thetaBooRight = false;
    rocketRotBooLeft = false;
    rocketRotBooRight = false;
  };

  rocket.x = canvasWidth/5 + (rocket.height/2 + planet.width/2)*Math.cos(theta);
  rocket.y = canvasHeight/2 + (rocket.height/2 + planet.width/2)*Math.sin(theta);
  
	rocket.x += rocket.vx
	rocket.y += rocket.vy

  //set game end message
  endGameMessage = new Text(
    "You Win!",
    {font: "64px Futura", fill: "white"}
    );
  endGameMessage.x = canvasWidth/2;
  endGameMessage.y = canvasHeight/2;

  if (hitTestRectangle(rocket, blackhole)) {
    stage.removeChild(planet);
    stage.removeChild(moon);
    stage.removeChild(blackhole);
    stage.removeChild(rocket);
    stage.removeChild(powerbar);
    stage.removeChild(scoreCounter);

    endGameMessage = new PIXI.Text("You Win! \n Your Score = "+ scoreNumber,
     {fontFamily: "Arial", fontSize: 48, fill: 0xFFFFFF, align: 'center'});
    endGameMessage.x = canvasWidth/2;
    endGameMessage.y = canvasHeight/2;

    stage.addChild(endGameMessage);

  }; 

  if (hitTestRectangle(rocket, moon)) {
    stage.removeChild(planet);
    stage.removeChild(moon);
    stage.removeChild(blackhole);
    stage.removeChild(rocket);
    stage.removeChild(powerbar);
    stage.removeChild(scoreCounter);

    spacebarBoo = false;
    scoreNumber += 1;

    setup();
  };
}