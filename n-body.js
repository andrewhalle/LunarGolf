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

var renderer = PIXI.autoDetectRenderer(1000, 500);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();


var sun;
var earth;
var jupiter;
PIXI.loader.add(["sun.png", "earth.png", "jupiter.png"]).load(setup);
function setup() {
	sun = new PIXI.Sprite(PIXI.loader.resources["sun.png"].texture);
	sun.anchor.x = 0.5;
	sun.anchor.y = 0.5;
	sun.scale.x = 0.3;
	sun.scale.y = 0.3
	sun.x = 500;
	sun.y = 250;
	sun.vx = 0;
	sun.vy = 0;
	sun.m = 500;

	earth = new PIXI.Sprite(PIXI.loader.resources["earth.png"].texture);
	earth.anchor.x = 0.5;
	earth.anchor.y = 0.5;
	earth.scale.x = 0.1;
	earth.scale.y = 0.1;
	earth.x = 700;
	earth.y = 250;
	earth.vx = -1;
	earth.vy = -1;
	earth.m = 1;

	jupiter = new PIXI.Sprite(PIXI.loader.resources["jupiter.png"].texture);
	jupiter.anchor.x = 0.5;
	jupiter.anchor.y = 0.5;
	jupiter.scale.x = 0.2;
	jupiter.scale.y = 0.2;
	jupiter.x = 900;
	jupiter.y = 250;
	jupiter.vx = 0;
	jupiter.vy = -1;
	jupiter.m = 10;

	stage.addChild(sun);
	stage.addChild(earth);
	stage.addChild(jupiter);

	function gameLoop() {
		requestAnimationFrame(gameLoop);
		earth.x += earth.vx;
		earth.y += earth.vy;
		jupiter.x += jupiter.vx;
		jupiter.y += jupiter.vy;

		//earth
		earth.vx += gravVelocityX(sun, earth) + gravVelocityX(jupiter, earth);
		earth.vy += gravVelocityY(sun, earth) - gravVelocityY(jupiter,earth);

		//jupiter
		jupiter.vx += gravVelocityX(sun, jupiter) + gravVelocityX(earth, jupiter);
		jupiter.vy += gravVelocityY(sun, jupiter) - gravVelocityY(earth, jupiter);

		// sun
		sun.vx = 0;
		sun.vy = 0;

		renderer.render(stage);	
	}
	gameLoop();
}