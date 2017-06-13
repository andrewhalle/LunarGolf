var canvasWidth = 1000;
var canvasHeight = 500;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);
var stage = new PIXI.Container();
document.body.appendChild(renderer.view);
b = new Bump(PIXI);

var gameObject = {};
gameObject.time = 0;
gameObject.state = splash;
gameObject.images = [
	"images/blackhole.png",
	"images/moon.png",
	"images/planet.png",
	"images/rocket.png",
  "images/rotmoon.png",

	"images/up.png",
	"images/over.png",
	"images/down.png",

	"images/1_up.png",
	"images/1_over.png",                         //replace this with function that gets all images in directory
	"images/1_down.png",

	"images/2_up.png",
	"images/2_over.png",
	"images/2_down.png",

	"images/3_up.png",
	"images/3_over.png",
	"images/3_down.png",

	"images/4_up.png",
	"images/4_over.png",
	"images/4_down.png",

	"images/5_up.png",
	"images/5_over.png",
	"images/5_down.png",

	"images/6_up.png",
	"images/6_over.png",
	"images/6_down.png",

	"images/7_up.png",
	"images/7_over.png",
	"images/7_down.png",

	"images/8_up.png",
	"images/8_over.png",
	"images/8_down.png",

	"images/9_up.png",
	"images/9_over.png",
	"images/9_down.png",

	"images/helpup.png",
	"images/helpdown.png",
	"images/helpover.png"
];
gameObject.courses = courses;
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
		rocket.x = planet.x + (rocket.height/1.75 + planet.width/2)*Math.cos(gameObject.theta);
		rocket.y = planet.y + (rocket.height/1.75 + planet.width/2)*Math.sin(gameObject.theta);
		rocket.vx = 0;
		rocket.vy = 0;
		rocket.m = 1;

		stage.addChild(rocket);
		stage.addChild(planet);
	};

function PlaceRotMoon(rotmoon, xcenter, ycenter, xlength, ylength, xscale, yscale, angle, angvelocity, mass) {
  moontheta = angle;
  moonvelocity = angvelocity;
  rotmoon.anchor.x = 0.5;
  rotmoon.anchor.y = 0.5;
  rotmoon.scale.x = xscale;
  rotmoon.scale.y = yscale;
  rotmoon.x = (xcenter)*canvasWidth + (xlength)*canvasWidth*Math.cos(moontheta);
  rotmoon.y = (ycenter)*canvasHeight + (ylength)*canvasWidth*Math.sin(moontheta);
  rotmoon.vx = 0;
  rotmoon.vy = 0;
  rotmoon.m = mass;
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
		playButton.release = function() {
			gameObject.state = courseMenu;
			gameObject.setupCourseMenu = true;
		};
		gameObject.sprites["playButton"] = playButton;
		stage.addChild(playButton)

		delete gameObject.setupMainMenu;
	}
}

function courseMenu() {
	if (gameObject.setupCourseMenu) {
		stage.removeChildren();
		gameObject.t.buttons = [];

		var courseMenuTitle = new PIXI.Text(
			"Courses",
			{fontFamily: "Arial", fontSize: 32, fill: "white"}
		);
		courseMenuTitle.anchor.x = 0.5;
		courseMenuTitle.anchor.x = 0.5;
		courseMenuTitle.x = canvasWidth / 2;
		courseMenuTitle.y = canvasHeight / 10;

		var course1 = gameObject.t.button([PIXI.loader.resources["images/1_up.png"].texture, PIXI.loader.resources["images/1_over.png"].texture, PIXI.loader.resources["images/1_down.png"].texture], canvasWidth * 0.2, canvasHeight / 2);
		course1.anchor.x = 0.5;
		course1.anchor.y = 0.5;
		course1.scale.x = 2;
		course1.scale.y = 2;
		course1.release = function() {
			gameObject.courseNumber = 1;
			gameObject.state = levelMenu;
			gameObject.setupLevelMenu = true;
		}

		var course2 = gameObject.t.button([PIXI.loader.resources["images/2_up.png"].texture, PIXI.loader.resources["images/2_over.png"].texture, PIXI.loader.resources["images/2_down.png"].texture], canvasWidth * 0.5, canvasHeight / 2);
		course2.anchor.x = 0.5;
		course2.anchor.y = 0.5;
		course2.scale.x = 2;
		course2.scale.y = 2;
		course2.release = function() {
			gameObject.courseNumber = 2;
			gameObject.state = levelMenu;
			gameObject.setupLevelMenu = true;
		}

		var course3 = gameObject.t.button([PIXI.loader.resources["images/3_up.png"].texture, PIXI.loader.resources["images/3_over.png"].texture, PIXI.loader.resources["images/3_down.png"].texture], canvasWidth * 0.8, canvasHeight / 2);
		course3.anchor.x = 0.5;
		course3.anchor.y = 0.5;
		course3.scale.x = 2;
		course3.scale.y = 2;
		course3.release = function() {
			gameObject.courseNumber = 3;
			gameObject.state = levelMenu;
			gameObject.setupLevelMenu = true;
		}

		gameObject.sprites["courseMenuTitle"] = courseMenuTitle;
		gameObject.sprites["course1"] = course1;
		gameObject.sprites["course2"] = course2;
		gameObject.sprites["course3"] = course3;

		stage.addChild(courseMenuTitle);
		stage.addChild(course1);
		stage.addChild(course2);
		stage.addChild(course3);

		delete gameObject.setupCourseMenu;
	}
}

function levelMenu() {
	if (gameObject.setupLevelMenu) {
		stage.removeChildren();
		gameObject.t.buttons = [];


		var levelMenuTitle = new PIXI.Text(
			"Levels",
			{fontFamily: "Arial", fontSize: 32, fill: "white"}
		);
		levelMenuTitle.anchor.x = 0.5;
		levelMenuTitle.anchor.x = 0.5;
		levelMenuTitle.x = canvasWidth / 2;
		levelMenuTitle.y = canvasHeight / 10;

		var level1Button = gameObject.t.button([PIXI.loader.resources["images/1_up.png"].texture, PIXI.loader.resources["images/1_over.png"].texture, PIXI.loader.resources["images/1_down.png"].texture], canvasWidth * 0.35, canvasHeight * 0.4);
		level1Button.anchor.x = 0.5;
		level1Button.anchor.y = 0.5;
		level1Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 1;
			gameObject.state = levelSetup;
		};

		var level2Button = gameObject.t.button([PIXI.loader.resources["images/2_up.png"].texture, PIXI.loader.resources["images/2_over.png"].texture, PIXI.loader.resources["images/2_down.png"].texture], canvasWidth * 0.45, canvasHeight * 0.4);
		level2Button.anchor.x = 0.5;
		level2Button.anchor.y = 0.5;
		level2Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 2;
			gameObject.state = levelSetup;
		};

		var level3Button = gameObject.t.button([PIXI.loader.resources["images/3_up.png"].texture, PIXI.loader.resources["images/3_over.png"].texture, PIXI.loader.resources["images/3_down.png"].texture], canvasWidth * 0.55, canvasHeight * 0.4);
		level3Button.anchor.x = 0.5;
		level3Button.anchor.y = 0.5;
		level3Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 3;
			gameObject.state = levelSetup;
		};

		var level4Button = gameObject.t.button([PIXI.loader.resources["images/4_up.png"].texture, PIXI.loader.resources["images/4_over.png"].texture, PIXI.loader.resources["images/4_down.png"].texture], canvasWidth * 0.65, canvasHeight * 0.4);
		level4Button.anchor.x = 0.5;
		level4Button.anchor.y = 0.5;
		level4Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 4;
			gameObject.state = levelSetup;
		};

		var level5Button = gameObject.t.button([PIXI.loader.resources["images/5_up.png"].texture, PIXI.loader.resources["images/5_over.png"].texture, PIXI.loader.resources["images/5_down.png"].texture], canvasWidth * 0.3, canvasHeight * 0.6);
		level5Button.anchor.x = 0.5;
		level5Button.anchor.y = 0.5;
		level5Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 5;
			gameObject.state = levelSetup;
		};

		var level6Button = gameObject.t.button([PIXI.loader.resources["images/6_up.png"].texture, PIXI.loader.resources["images/6_over.png"].texture, PIXI.loader.resources["images/6_down.png"].texture], canvasWidth * 0.4, canvasHeight * 0.6);
		level6Button.anchor.x = 0.5;
		level6Button.anchor.y = 0.5;
		level6Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 6;
			gameObject.state = levelSetup;
		};

		var level7Button = gameObject.t.button([PIXI.loader.resources["images/7_up.png"].texture, PIXI.loader.resources["images/7_over.png"].texture, PIXI.loader.resources["images/7_down.png"].texture], canvasWidth * 0.5, canvasHeight * 0.6);
		level7Button.anchor.x = 0.5;
		level7Button.anchor.y = 0.5;
		level7Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 7;
			gameObject.state = levelSetup;
		};

		var level8Button = gameObject.t.button([PIXI.loader.resources["images/8_up.png"].texture, PIXI.loader.resources["images/8_over.png"].texture, PIXI.loader.resources["images/8_down.png"].texture], canvasWidth * 0.6, canvasHeight * 0.6);
		level8Button.anchor.x = 0.5;
		level8Button.anchor.y = 0.5;
		level8Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 8;
			gameObject.state = levelSetup;
		};

		var level9Button = gameObject.t.button([PIXI.loader.resources["images/9_up.png"].texture, PIXI.loader.resources["images/9_over.png"].texture, PIXI.loader.resources["images/9_down.png"].texture], canvasWidth * 0.7, canvasHeight * 0.6);
		level9Button.anchor.x = 0.5;
		level9Button.anchor.y = 0.5;
		level9Button.release = function() {
			gameObject.scoreNumber = -1;
			gameObject.levelNumber = 9;
			gameObject.state = levelSetup;
		};

		gameObject.sprites["levelMenuTitle"] = levelMenuTitle;
		gameObject.sprites["level1Button"] = level1Button;
		gameObject.sprites["level2Button"] = level2Button;
		gameObject.sprites["level3Button"] = level1Button;
		gameObject.sprites["level4Button"] = level2Button;
		gameObject.sprites["level5Button"] = level1Button;
		gameObject.sprites["level6Button"] = level2Button;
		gameObject.sprites["level7Button"] = level1Button;
		gameObject.sprites["level8Button"] = level2Button;
		gameObject.sprites["level9Button"] = level1Button;

		stage.addChild(levelMenuTitle);
		stage.addChild(level1Button);
		stage.addChild(level2Button);
		stage.addChild(level3Button);
		stage.addChild(level4Button);
		stage.addChild(level5Button);
		stage.addChild(level6Button);
		stage.addChild(level7Button);
		stage.addChild(level8Button);
		stage.addChild(level9Button);

		delete gameObject.setupLevelMenu;

		// Add in help button, with description of how to play
	}
}

function levelSetup() {
	stage.removeChildren();
	gameObject.t.buttons = [];
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
	placementInfo = gameObject.courses[gameObject.courseNumber].levels[gameObject.levelNumber];
	//pulls out info for each astro object
	planetinfo = placementInfo.planet;
	if (!gameObject.sprites[planetinfo.filename]) {
		gameObject.sprites[planetinfo.filename] = new PIXI.Sprite(PIXI.loader.resources[planetinfo.filename].texture);
	}
	var planet = gameObject.sprites[planetinfo.filename];
	MoonsArray = placementInfo.moons;
  RotMoonsArray = placementInfo.rotmoons;
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
	var i = 0;
	while (i < MoonsArray.length) {
		if (!gameObject.sprites[MoonsArray[i].filename + i.toString()]) {
			gameObject.sprites[MoonsArray[i].filename + i.toString()] = new PIXI.Sprite(PIXI.loader.resources[MoonsArray[i].filename].texture);
		}
		var moon = gameObject.sprites[MoonsArray[i].filename + i.toString()];

		PlaceAstroObject(moon, MoonsArray[i].x, MoonsArray[i].y,
			MoonsArray[i].scale_x, MoonsArray[i].scale_y, MoonsArray[i].m);
		i++;

	};
  //loop to place all rotational Moons
  var i = 0;
  while (i < RotMoonsArray.length) {
    if (!gameObject.sprites[RotMoonsArray[i].filename + i.toString()]) {
			gameObject.sprites[RotMoonsArray[i].filename + i.toString()] = new PIXI.Sprite(PIXI.loader.resources[RotMoonsArray[i].filename].texture);
		}
		var rotmoon = gameObject.sprites[RotMoonsArray[i].filename + i.toString()];

		PlaceRotMoon(rotmoon, RotMoonsArray[i].xcenter, RotMoonsArray[i].ycenter, RotMoonsArray[i].xlength,
      RotMoonsArray[i].ylength ,RotMoonsArray[i].scale_x, RotMoonsArray[i].scale_y,
      RotMoonsArray[i].angle ,RotMoonsArray[i].angvelocity ,RotMoonsArray[i].m);

    RotMoonsArray[i].angle += (.01)*RotMoonsArray[i].angvelocity
		i++;
  }

	KeyboardFunc();
	gameObject.state = levelPosition;
}

function levelPosition() {
	var rocket = gameObject.sprites["images/rocket.png"];
	var planet = gameObject.sprites[planetinfo.filename];
	var powerbar = gameObject.sprites["powerbar"];

	rocket.x = planet.x + (rocket.height/1.75 + planet.width/2)*Math.cos(gameObject.theta);
	rocket.y = planet.y + (rocket.height/1.75 + planet.width/2)*Math.sin(gameObject.theta);

  var i = 0;
  while (i < RotMoonsArray.length) {
    if (!gameObject.sprites[RotMoonsArray[i].filename + i.toString()]) {
			gameObject.sprites[RotMoonsArray[i].filename + i.toString()] = new PIXI.Sprite(PIXI.loader.resources[RotMoonsArray[i].filename].texture);
		}
		var rotmoon = gameObject.sprites[RotMoonsArray[i].filename + i.toString()];

    RotMoonsArray[i].angle += (.01)*RotMoonsArray[i].angvelocity;
    rotmoon.x = (RotMoonsArray[i].xcenter)*canvasWidth + (RotMoonsArray[i].xlength)*canvasWidth*Math.cos(RotMoonsArray[i].angle);
    rotmoon.y = (RotMoonsArray[i].ycenter)*canvasHeight + (RotMoonsArray[i].ylength)*canvasWidth*Math.sin(RotMoonsArray[i].angle);
		i++;
  }

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
		var level = gameObject.courses[gameObject.courseNumber].levels[gameObject.levelNumber];
		var rocket = gameObject.sprites["images/rocket.png"];
		rocket.circular = true
		var planet = gameObject.sprites[level.planet.filename];
    planet.circular = true
		var blackhole = gameObject.sprites[level.blackhole.filename];
		blackhole.circular = true

    var i = 0;
    while (i < RotMoonsArray.length) {
      if (!gameObject.sprites[RotMoonsArray[i].filename + i.toString()]) {
  			gameObject.sprites[RotMoonsArray[i].filename + i.toString()] = new PIXI.Sprite(PIXI.loader.resources[RotMoonsArray[i].filename].texture);
  		}
  		var rotmoon = gameObject.sprites[RotMoonsArray[i].filename + i.toString()];

      RotMoonsArray[i].angle += (.01)*RotMoonsArray[i].angvelocity;
      rotmoon.x = (RotMoonsArray[i].xcenter)*canvasWidth + (RotMoonsArray[i].xlength)*canvasWidth*Math.cos(RotMoonsArray[i].angle);
      rotmoon.y = (RotMoonsArray[i].ycenter)*canvasHeight + (RotMoonsArray[i].ylength)*canvasWidth*Math.sin(RotMoonsArray[i].angle);
  		i++;
    }

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
			if (gameObject.levelNumber >= gameObject.courses[gameObject.courseNumber].levels.length) {
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
    if (b.hitTestCircle(planet,rocket)) {
      gameObject.state = levelSetup;
      gameObject.scoreNumber += 1;
      gameObject.spacebarBoo = false;
    }
	}
}
