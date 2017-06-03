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
			m: 100
		},
		moons: [
			{
				filename: "images/moon.png",
				scale_x: 0.2,
				scale_y: 0.2,
				x: 0.5,
				y: 0.5,
				m: 500
			}
		],
		blackhole: {
			filename: "images/blackhole.png",
			scale_x: 0.5,
			scale_y: 0.5,
			x: 0.8,
			y: 0.5,
			m: 1000
		}
	},
	//level 2
	{
		planet: {
			filename: "images/planet.png",
			scale_x: 0.2,
			scale_y: 0.2,
			x: 0.2, //percentage of canvasWidth
			y: 0.5, //percentage of canvasHeight
			m: 100
		},
		moons: [
			{
				filename: "images/moon.png",
				scale_x: 0.2,
				scale_y: 0.2,
				x: 0.5,
				y: 0.33,
				m: 500
			},
			{
				filename: "images/moon.png",
				scale_x: 0.2,
				scale_y: 0.2,
				x: 0.5,
				y: 0.66,
				m: 500
			}
		],
		blackhole: {
			filename: "images/blackhole.png",
			scale_x: 0.5,
			scale_y: 0.5,
			x: 0.8,
			y: 0.5,
			m: 1000
		}
	}
];