var canvasWidth = 1000;
var canvasHeight = 500;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);
var stage = new PIXI.Container();
document.body.appendChild(renderer.view);
b = new Bump(PIXI);

var gameObject = {};
gameObject.time = 0;
gameObject.state = splash;
gameObject.images = ["images/blackhole.png", "images/moon.png", "images/planet.png", "images/rocket.png", "images/up.png", "images/over.png", "images/down.png", "images/1_up.png", "images/1_over.png", "images/1_down.png", "images/2_up.png", "images/2_over.png", "images/2_down.png", "images/helpup.png", "images/helpdown.png", "images/helpover.png"]  //replace this with function that gets all images in directory
gameObject.levels = levels;
gameObject.sprites = {};
gameObject.initialVelocity = .1;

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
function PlanetAndRocket(planet,rocket,xspace,yspace, xscale, yscale, mass) {

		planet.scale.x = xscale;
		planet.scale.y = yscale;
		planet.anchor.set(.5,.5);
		planet.x = xspace*canvasWidth;
		planet.y = yspace*canvasHeight;
		planet.m = mass;

		gameObject.theta = 0;

		rocket.scale.x = .2;
		rocket.scale.y = .2;
		rocket.anchor.set(.5,.5);
		rocket.rotation = 1.5707;
		rocket.x = planet.x + (rocket.height/2 + planet.width/2)*Math.cos(gameObject.theta);
		rocket.y = planet.y + (rocket.height/2 + planet.width/2)*Math.sin(gameObject.theta);
		rocket.vx = 0;
		rocket.vy = 0;
		rocket.m = 1;

		stage.addChild(rocket);
		stage.addChild(planet);
	};

// places any single object, ex: moon, blackhole, etc
function PlaceAstroObject(AstroObject,xspace,yspace, xscale,yscale,mass) {
		AstroObject.anchor.x = 0.5;
		AstroObject.anchor.y = 0.5;
		AstroObject.scale.x = xscale;
		AstroObject.scale.y = yscale;
		AstroObject.x = xspace*canvasWidth;
		AstroObject.y = yspace*canvasHeight;
		AstroObject.vx = 0;
		AstroObject.vy = 0;
		AstroObject.m = mass;

		stage.addChild(AstroObject);
	};

// command + option + [(fold)/ ](unfold)

// adds keyboard functionality
function KeyboardFunc() {
	//Adding keyboard elements
	gameObject.left = gameObject.t.keyboard(37);
	gameObject.up = gameObject.t.keyboard(38);
	gameObject.right = gameObject.t.keyboard(39);
	gameObject.down = gameObject.t.keyboard(40);
	gameObject.spacebar = gameObject.t.keyboard(32);
	gameObject.zkey = gameObject.t.keyboard(90);

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
	};
	gameObject.down.release = function() {
		gameObject.rocketRotBooLeft = false;
	};

	// set spacebar
	gameObject.spacebar.press = function() {
		gameObject.spacebarBoo = true;
	};

	// set zkey for power of velocity
	gameObject.zkey.press = function() {
		gameObject.zkeyBoo = true;
	};
	gameObject.zkey.release = function() {
		gameObject.zkeyBoo = false;
	};
}

function KeyboardReset() {
	gameObject.xkey = gameObject.t.keyboard(88);
	gameObject.xkey.press = function(){
			gameObject.spacebarBoo = false;
	};
}

function setup() {
	gameObject.t = new Tink(PIXI, renderer.view);
	gameLoop();
}

function gameLoop() {
	requestAnimationFrame(gameLoop);
	gameObject.state();
	gameObject.time += 1/60;
	gameObject.t.update();
	renderer.render(stage);
}

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
	}
}

function mainMenu() {
	if (gameObject.setupMainMenu) {
		stage.removeChildren();
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
	}
}

function levelMenu() {
	if (gameObject.setupLevelMenu) {
		stage.removeChildren();

		var level1Button = gameObject.t.button([PIXI.loader.resources["images/1_up.png"].texture, PIXI.loader.resources["images/1_over.png"].texture, PIXI.loader.resources["images/1_down.png"].texture], canvasWidth / 10, canvasHeight / 10);
		level1Button.anchor.x = 0.5;
		level1Button.anchor.y = 0.5;
		level1Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 1;
			gameObject.state = levelSetup;
		};

		var level2Button = gameObject.t.button([PIXI.loader.resources["images/2_up.png"].texture, PIXI.loader.resources["images/2_over.png"].texture, PIXI.loader.resources["images/2_down.png"].texture], canvasWidth * 0.2, canvasHeight / 10);
		level2Button.anchor.x = 0.5;
		level2Button.anchor.y = 0.5;
		level2Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 2;
			gameObject.state = levelSetup;
		};

		gameObject.sprites["level1Button"] = level1Button;
		gameObject.sprites["level2Button"] = level2Button;
		stage.addChild(level1Button);
		stage.addChild(level2Button);
		delete gameObject.setupLevelMenu;

		// Add in help button, with description of how to play
	}
}

function levelSetup() {
	stage.removeChildren();
	// adds in rocket
	if (!gameObject.sprites["images/rocket.png"]) {
		gameObject.sprites["images/rocket.png"] = new PIXI.Sprite(PIXI.loader.resources["images/rocket.png"].texture);
	}
	var rocket = gameObject.sprites["images/rocket.png"];
// adding powerbar
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

//adding help button
	var helpbutton = gameObject.t.button([PIXI.loader.resources["images/helpup.png"].texture, PIXI.loader.resources["images/helpover.png"].texture, PIXI.loader.resources["images/helpdown.png"].texture],canvasWidth*(98/100), canvasHeight*(5/100));
  helpbutton.scale.x = .5;
  helpbutton.scale.y = .5;
	helpbutton.anchor.x = .5;
	helpbutton.anchor.y = .5;

	var instructions = new PIXI.DisplayObjectContainer();
	instructions.position.set(0, 0);
	gameObject.sprites["instructions"] = instructions;
  // instructions.anchor.x = .5;
  // instructions.anchor.y = .5;
	var instructionsBox = new PIXI.Graphics();
  // instructionsBox.anchor.x = .5;
  // instructionsBox.anchor.y = .5;
	instructionsBox.beginFill(0xF5F5F5);
	instructionsBox.drawRect(0,0,canvasWidth, canvasHeight);
  instructionsBox.alpha = .5;
	instructionsBox.endFill();
	instructions.addChild(instructionsBox);
	var instructionsWords = new PIXI.Text(
		"Instructions for how to Play! \n -use up and down arrows for spining rocket \n -use right and left arrows for moving rocket about planet \n -use z to change amount of power rocket fires \n -use the spacebar to fire the rocket when ready \n -use x to reset the rocket (note you gain 1 point for this!)",
			{fontFamily: "Arial", fontSize: 32, fill: "white"}
			);
	instructionsWords.anchor.x = .5;
	instructionsWords.anchor.y = .5;
	instructionsWords.x = canvasWidth/2;
	instructionsWords.y = canvasHeight/2;
	instructions.addChild(instructionsWords)

	helpbutton.press = function() {
		stage.addChild(instructions);
	};
	helpbutton.release = function(){
		stage.removeChild(instructions);

	};
	gameObject.sprites["helpbutton"] = helpbutton;

	stage.addChild(helpbutton);

	if (gameObject.scoreNumber == -1) {
		gameObject.scoreNumber = 0;
	}
	var scoreCounter = new PIXI.Text("Score = "+ gameObject.scoreNumber,
		{fontFamily: "Arial", fontSize: 20, fill: 0xFFFFFF, align: 'center'});
	scoreCounter.x = canvasWidth/100;
	scoreCounter.y = 2*canvasHeight/100;
	gameObject.sprites["scoreCounter"] = scoreCounter;
	stage.addChild(scoreCounter);

	//pulls out specfic level info
	placementInfo = gameObject.levels[gameObject.levelNumber];
	//pulls out info for each astro object
	planetinfo = placementInfo.planet;
	if (!gameObject.sprites[planetinfo.filename]) {
		gameObject.sprites[planetinfo.filename] = new PIXI.Sprite(PIXI.loader.resources[planetinfo.filename].texture);
	}
	var planet = gameObject.sprites[planetinfo.filename];
	MoonsArray = placementInfo.moons;
	blackholeinfo = placementInfo.blackhole;
	if (!gameObject.sprites[blackholeinfo.filename]) {
		gameObject.sprites[blackholeinfo.filename] = new PIXI.Sprite(PIXI.loader.resources[blackholeinfo.filename].texture);
	}
	var blackhole = gameObject.sprites[blackholeinfo.filename];
	// use function to add rocket and planet
	PlanetAndRocket(planet, rocket, planetinfo.x, planetinfo.y,
		planetinfo.scale_x, planetinfo.scale_y, planetinfo.m);
	// use function to add blackhole
	PlaceAstroObject(blackhole, blackholeinfo.x, blackholeinfo.y,
		blackholeinfo.scale_x, blackholeinfo.scale_y, blackholeinfo.m);

	//loop to place all MoonsArray
	var i = 0
	while (i < MoonsArray.length) {
		if (!gameObject.sprites[MoonsArray[i].filename + i.toString()]) {
			gameObject.sprites[MoonsArray[i].filename + i.toString()] = new PIXI.Sprite(PIXI.loader.resources[MoonsArray[i].filename].texture);
		}
		var moon = gameObject.sprites[MoonsArray[i].filename + i.toString()];

		PlaceAstroObject(moon, MoonsArray[i].x, MoonsArray[i].y,
			MoonsArray[i].scale_x, MoonsArray[i].scale_y, MoonsArray[i].m);
		i++;

	};

	KeyboardFunc();
	gameObject.state = levelPosition;
}

function levelPosition() {
	var rocket = gameObject.sprites["images/rocket.png"];
	var planet = gameObject.sprites[planetinfo.filename];
	var powerbar = gameObject.sprites["powerbar"];

	rocket.x = planet.x + (rocket.height/2 + planet.width/2)*Math.cos(gameObject.theta);
	rocket.y = planet.y + (rocket.height/2 + planet.width/2)*Math.sin(gameObject.theta);

	//set rocket rotation with up/down clicks
	if (gameObject.rocketRotBooRight) {
		rocket.rotation += .05;
	}
	if (gameObject.rocketRotBooLeft) {
	  	rocket.rotation -= .05;
	}
	//set rocket planet placement with right/left
	if (gameObject.thetaBooRight) {
	    gameObject.theta += .05;
	    rocket.rotation += .05;
	}
	if (gameObject.thetaBooLeft) {
	    gameObject.theta -= .05;
	    rocket.rotation -= .05;
	}
	if (gameObject.zkeyBoo){
		    powerbar.outer.width += 1;
		    gameObject.initialVelocity += .1;
		    if (powerbar.outer.width > canvasWidth/10) {
		    	powerbar.outer.width = 0;
		      	gameObject.initialVelocity = .1;
		    }
	}

	if (gameObject.spacebarBoo) {
		delete gameObject.left;
		delete gameObject.right;
		delete gameObject.up;
		delete gameObject.down;
		delete gameObject.spacebar;
		delete gameObject.zkey;
		KeyboardReset();
		gameObject.state = levelIntegrate;
	} else {
	  	rocket.vx = 0;
	  	rocket.vy = 0;
	}
}

function levelIntegrate() {
	if (!gameObject.spacebarBoo) {
		gameObject.state = levelSetup;
		gameObject.scoreNumber += 1;
	} else {
		var level = gameObject.levels[gameObject.levelNumber];
		var rocket = gameObject.sprites["images/rocket.png"];
		rocket.circular = true
		var planet = gameObject.sprites[level.planet.filename];
		var blackhole = gameObject.sprites[level.blackhole.filename];
		blackhole.circular = true
		rocket.vx += (gameObject.initialVelocity)*Math.sin(rocket.rotation);
		rocket.vx += gravVelocityX(planet, rocket);
		rocket.vx += gravVelocityX(blackhole, rocket);

		var moons = level.moons;
		var moon;
		for (var i = 0; i < moons.length; i++) {
			moon = gameObject.sprites[moons[i].filename + i.toString()];
			moon.circular = true;
			rocket.vx += gravVelocityX(moon, rocket);
		}

		rocket.vy += -1*(gameObject.initialVelocity)*Math.cos(rocket.rotation);
		rocket.vy += gravVelocityY(planet, rocket);
		rocket.vy += gravVelocityY(blackhole, rocket);
		for (var i = 0; i < moons.length; i++) {
			moon = gameObject.sprites[moons[i].filename + i.toString()];
			rocket.vy += gravVelocityY(moon, rocket);
		}

	    rocket.x += rocket.vx
		rocket.y += rocket.vy
		gameObject.initialVelocity = 0;

		if (b.hitTestCircle(blackhole,rocket)) {
			gameObject.levelNumber += 1;
			if (gameObject.levelNumber >= gameObject.levels.length) {
				gameObject.setupLevelMenu = true;
				gameObject.state = levelMenu;
				gameObject.spacebarBoo = false;
				gameObject.scoreNumber = -1;
			} else {
				gameObject.state = levelSetup;
				gameObject.spacebarBoo = false;
				gameObject.scoreNumber = -1;
			}
		}
		for (var i = 0; i < moons.length; i++) {
			moon = gameObject.sprites[moons[i].filename + i.toString()];
			if (b.hitTestCircle(moon, rocket)) {
				gameObject.state = levelSetup;
				gameObject.scoreNumber += 1;
				gameObject.spacebarBoo = false;
			}
		}
	}
}
