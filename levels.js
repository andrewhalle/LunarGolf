var levels = [
	null,
	//level 1
	{
		planet: {
			filename: "images/planet.png",
			scale_x: 0.2,
			scale_y: 0.2,
			x: 0.2, //percentage of canvasWidth
			y: 0.5, //percentage of canvasHeight
			m: 1000
		},
		moons: [
			{
				filename: "images/moon.png",
				scale_x: 0.3,
				scale_y: 0.3,
				x: 0.5,
				y: 0.5,
				m: 10000
			}
		],
		blackhole: {
			filename: "images/blackhole.png",
			scale_x: 0.5,
			scale_y: 0.5,
			x: 0.8,
			y: 0.5,
			m: 100000
		}
	}
];