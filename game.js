var canvasWidth = 1000;
var canvasHeight = 500;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);
var stage = new PIXI.Container();
document.body.appendChild(renderer.view);

var gameObject = {};
gameObject.time = 0;
gameObject.state = splash;
gameObject.images = ["images/blackhole.png", "images/moon.png", "images/planet.png", "images/rocket.png", "images/up.png", "images/over.png", "images/down.png", "images/1_up.png", "images/1_over.png", "images/1_down.png"]  //replace this with function that gets all images in directory

PIXI.loader.add(gameObject.images).load(setup);

//Functions are all folded, to toggle command+alt+ [ (or) ]

// distance function
function distance(s1, s2) {
  return Math.sqrt(Math.pow(s1.x - s2.x, 2) + Math.pow(s1.y - s2.y, 2));
}

//velocity from gravity from planet1 on planet 2
function gravVelocityX(planet1,planet2) {
  return 1*((planet1.m) / Math.pow(distance(planet1, planet2), 2)) * ((planet1.x - planet2.x) / distance(planet1, planet2))
}

function gravVelocityY(planet1,planet2) {
  return 1*((planet1.m) / Math.pow(distance(planet1, planet2), 2)) * ((planet1.y - planet2.y) / distance(planet1, planet2))
}

// places both the planet and rocket onto the screen
function PlanetAndRocket(planet,rocket,xspace,yspace) {
			
		planet.scale.x = .2;
		planet.scale.y = .2;
		planet.anchor.set(.5,.5);
		planet.x = xspace;
		planet.y = yspace;
		planet.m = 1000

		rocket.scale.x = .2;
		rocket.scale.y = .2;
		rocket.anchor.set(.5,.5);
		rocket.rotation = 1.5707;
		rocket.x = planet.x + (rocket.height/2 + planet.width/2)*Math.cos(gameObject.theta);
		rocket.y = planet.y + (rocket.height/2 + planet.width/2)*Math.sin(gameObject.theta);
		rocket.vx = 0;
		rocket.vy = 0;
		rocket.m = 1;};

// places any single object, ex: moon, blackhole, etc
function PlaceAstroObject(AstroObject,xspace,yspace, xscale,yscale,mass) {
		AstroObject.anchor.x = 0.5;
		AstroObject.anchor.y = 0.5;
		AstroObject.scale.x = xscale;
		AstroObject.scale.y = yscale;
		AstroObject.x = xspace;
		AstroObject.y = yspace;
		AstroObject.vx = 0;
		AstroObject.vy = 0;
		AstroObject.m = mass;};

// command + option + [(fold)/ ](unfold)
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
  return collision;};

// adds keyboard functionality
function KeyboardFunc() {
	//Adding keyboard elements
		gameObject.left = gameObject.t.keyboard(37);
		gameObject.up = gameObject.t.keyboard(38);
		gameObject.right = gameObject.t.keyboard(39);
		gameObject.down = gameObject.t.keyboard(40);
		gameObject.spacebar = gameObject.t.keyboard(32);
		gameObject.zkey = gameObject.t.keyboard(90);
		gameObject.xkey = gameObject.t.keyboard(88);

		// setting right key press
		gameObject.right.press = function() {
			gameObject.thetaBooRight = true;
		};
		gameObject.right.release = function() {
			gameObject.thetaBooRight = false;
		}; 

		// setting left key press
		gameObject.left.press = function() {
			gameObject.thetaBooLeft = true;
		};
		gameObject.left.release = function() {
			gameObject.thetaBooLeft = false;
		}; 

		//set up key press
		gameObject.up.press = function() {
			gameObject.rocketRotBooRight = true;
		};
		gameObject.up.release = function() {
			gameObject.rocketRotBooRight = false;
		};

		//set down key press
		gameObject.down.press = function() {
			gameObject.rocketRotBooLeft = true;
		}	
		gameObject.down.release = function() {
			gameObject.rocketRotBooLeft = false;
		};

		// set spacebar
		gameObject.spacebar.press = function() {
			gameObject.spacebarBoo = true;
		};

		gameObject.xkey.press = function(){
			gameObject.spacebarBoo = false;
			gameObject.scoreNumber += 1;
		};

		// set zkey for power of velocity
		gameObject.zkey.press = function() {
			gameObject.zkeyBoo = true;
		};
		gameObject.zkey.release = function() {
			gameObject.zkeyBoo = false;
		};
};

function setup() {
	gameObject.t = new Tink(PIXI, renderer.view);
	gameObject.sprites = {};
	for (var i = 0; i < gameObject.images.length; i++) {
		gameObject.sprites[gameObject.images[i]] = new PIXI.Sprite(PIXI.loader.resources[gameObject.images[i]].texture);
	}

	gameLoop();};

function gameLoop() {
	requestAnimationFrame(gameLoop);
	gameObject.state();
	gameObject.time += 1/60;
	gameObject.t.update();
	renderer.render(stage);};

function splash() {
	if (gameObject.time == 0) {
		var splashText = new PIXI.Text(
			"Two Nerds Games",
			{fontFamily: "Arial", fontSize: 32, fill: "white"}
		);
		splashText.alpha = 0;
		splashText.anchor.x = 0.5;
		splashText.anchor.y = 0.5;
		splashText.position.set(canvasWidth / 2, canvasHeight / 2);
		gameObject.sprites["splashText"] = splashText;
		stage.addChild(splashText);
	} else if (gameObject.time < 1) {
		gameObject.sprites["splashText"].alpha += 1 / 60;
	} else if (gameObject.time < 4) {
		gameObject.sprites["splashText"].alpha = 1;
	} else if (gameObject.time < 5) {
		gameObject.sprites["splashText"].alpha -= 1 / 60;
	} else {
		gameObject.setupMainMenu = true;
		gameObject.state = mainMenu;
	}};

function mainMenu() {
	if (gameObject.setupMainMenu) {
		stage.removeChild(gameObject.sprites["splashText"]);
		var title = new PIXI.Text(
			"Lunar Golf",
			{fontFamily: "Arial", fontSize: 32, fill: "white"}
		);
		title.anchor.x = 0.5;
		title.anchor.y = 0.5;
		title.position.set(canvasWidth / 2, canvasHeight / 4);
		gameObject.sprites["title"] = title;
		stage.addChild(title);

		var playButton = gameObject.t.button([PIXI.loader.resources["images/up.png"].texture, PIXI.loader.resources["images/over.png"].texture, PIXI.loader.resources["images/down.png"].texture], canvasWidth / 2, 0.6 * canvasHeight);
		playButton.anchor.x = 0.5;
		playButton.anchor.y = 0.5;
		playButton.tap = function() {
			gameObject.state = levelMenu;
			gameObject.setupLevelMenu = true;
		};
		gameObject.sprites["playButton"] = playButton;
		stage.addChild(playButton)

		delete gameObject.setupMainMenu;
	}};

function levelMenu() {
	if (gameObject.setupLevelMenu) {
		stage.removeChild(gameObject.sprites["title"]);
		stage.removeChild(gameObject.sprites["playButton"]);
		var level1Button = gameObject.t.button([PIXI.loader.resources["images/1_up.png"].texture, PIXI.loader.resources["images/1_over.png"].texture, PIXI.loader.resources["images/1_down.png"].texture], canvasWidth / 10, canvasHeight / 10);
		level1Button.anchor.x = 0.5;
		level1Button.anchor.y = 0.5;
		level1Button.release = function() {
			gameObject.state = level1;
			gameObject.level1Setup = true;
		};
		gameObject.sprites["level1Button"] = level1Button;
		stage.addChild(level1Button);
		delete gameObject.setupLevelMenu;

		// Add in help button, with description of how to play
	}};

function level1() {
	if (gameObject.level1Setup) {
		if (!gameObject.notFirstPlay) {
			gameObject.scoreNumber = 0;
		}
		stage.removeChild(gameObject.sprites["level1Button"]);
		gameObject.theta = 0;
		gameObject.initialVelocity = 1;

		var planet = gameObject.sprites["images/planet.png"]
		var rocket = gameObject.sprites["images/rocket.png"]
		var moon = gameObject.sprites["images/moon.png"]
		var blackhole = gameObject.sprites["images/blackhole.png"]

		PlanetAndRocket(planet,rocket,canvasWidth/5,canvasHeight/2)
		PlaceAstroObject(moon, canvasWidth/2, canvasHeight/2, .3,.3,10000)
		PlaceAstroObject(blackhole, canvasWidth*(4/5), canvasHeight/2, .5,.5,100000)

		stage.addChild(planet);
		stage.addChild(rocket);
		stage.addChild(moon);
		stage.addChild(blackhole);


		//adding in velocity powerbar
		var powerbar = new PIXI.DisplayObjectContainer();
		powerbar.position.set(canvasWidth/100, canvasHeight/100);
		gameObject.sprites["powerbar"] = powerbar;
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


		var scoreCounter = new PIXI.Text("Score = "+ gameObject.scoreNumber,
		{fontFamily: "Arial", fontSize: 20, fill: 0xFFFFFF, align: 'center'});
		scoreCounter.x = canvasWidth/100;
		scoreCounter.y = 2*canvasHeight/100;
		gameObject.sprites["scoreCounter"] = scoreCounter;
		stage.addChild(scoreCounter);

		KeyboardFunc();

		delete gameObject.level1Setup;
		gameObject.level1play = true;

	} else if (gameObject.level1play) {
		var rocket = gameObject.sprites["images/rocket.png"];
		var powerbar = gameObject.sprites["powerbar"];
		var moon = gameObject.sprites["images/moon.png"];
		var blackhole = gameObject.sprites["images/blackhole.png"];
		var planet = gameObject.sprites["images/planet.png"];
		var scoreCounter = gameObject.sprites["scoreCounter"];

		//set rocket rotation with up/down clicks
	  	if (gameObject.rocketRotBooRight) {
			rocket.rotation += .05; 
		}
		if (gameObject.rocketRotBooLeft) {
		  	rocket.rotation -= .05;
		}
		if (gameObject.thetaBooRight) {
		    gameObject.theta += .05;
		    rocket.rotation += .05;
		}
		if (gameObject.thetaBooLeft) {
		    gameObject.theta -= .05;
		    rocket.rotation -= .05;
		}

		//set power with zkey
		if (gameObject.zkeyBoo){
		    powerbar.outer.width += 1;
		    gameObject.initialVelocity += .1;
		    if (powerbar.outer.width > canvasWidth/10) {
		    	powerbar.outer.width =0;
		      	gameObject.initialVelocity = .1;
		    }
		}

		//set release with spacebar
		if (gameObject.spacebarBoo) {
		    rocket.vx += (gameObject.initialVelocity)*Math.sin(rocket.rotation) 
		    	+ gravVelocityX(moon,rocket) + gravVelocityX(blackhole,rocket)
		    	+ gravVelocityX(planet,rocket);
		    rocket.vy += -1*(gameObject.initialVelocity)*Math.cos(rocket.rotation)
		    	 + gravVelocityY(moon,rocket) + gravVelocityY(blackhole,rocket)
		    	 +gravVelocityY(planet,rocket);
		    gameObject.thetaBooLeft = false;
		    gameObject.thetaBooRight = false;
		    gameObject.rocketRotBooLeft = false;
		    gameObject.rocketRotBooRight = false;
		  } else {
		  	rocket.vx = 0;
		  	rocket.vy = 0;
		  };

		rocket.x = planet.x + (rocket.height/2 + planet.width/2)*Math.cos(gameObject.theta);
		rocket.y = planet.y + (rocket.height/2 + planet.width/2)*Math.sin(gameObject.theta);
		rocket.x += rocket.vx
		rocket.y += rocket.vy

		if (hitTestRectangle(rocket, blackhole)) {
		    stage.removeChild(planet);
		    stage.removeChild(moon);
		    stage.removeChild(blackhole);
		    stage.removeChild(rocket);
		    stage.removeChild(powerbar);
		    stage.removeChild(scoreCounter);
		    gameObject.state = levelMenu;
		    gameObject.spacebarBoo = false;
		    gameObject.setupLevelMenu = true;
		    delete gameObject.level1play;
		    delete gameObject.notFirstPlay;
		}

		if (hitTestRectangle(rocket, moon)) {
		    stage.removeChild(planet);
		    stage.removeChild(moon);
		    stage.removeChild(blackhole);
		    stage.removeChild(rocket);
		    stage.removeChild(powerbar);
		    stage.removeChild(scoreCounter);

		    gameObject.spacebarBoo = false;
		    gameObject.scoreNumber += 1;
		    gameObject.notFirstPlay = true;
		    gameObject.level1Setup = true;
		    delete gameObject.level1play;
		}
	}
}