var courses = [
	null,
	//course 1
	{
		levels: [
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
						x: 1.5,
						y: 1.5,
						m: 1
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
			},
			//level 3
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
			//level 4
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.15, //percentage of canvasWidth
					y: 0.5, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.35,
						y: 0.5,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.5,
						y: 0.5,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.65,
						y: 0.5,
						m: 500
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.85,
					y: 0.5,
					m: 1000
				}
			},
			//level 5
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.15, //percentage of canvasWidth
					y: 0.75, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.35,
						y: 0.35,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.5,
						y: 0.5,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.65,
						y: 0.65,
						m: 500
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.85,
					y: 0.25,
					m: 1000
				}
			},
			//level 6
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.15, //percentage of canvasWidth
					y: 0.5, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.3,
						y: 0.7,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.55,
						y: 0.15,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.7,
						y: 0.35,
						m: 500
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.85,
					y: 0.45,
					m: 1000
				}
			},
			//level 7
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.15, //percentage of canvasWidth
					y: 0.5, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.4,
						y: 0.5,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.6,
						y: 0.5,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.8,
						y: 0.25,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 1,
						y: 0.5,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.8,
						y: 0.75,
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
			//level fun 1
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.15, //percentage of canvasWidth
					y: 0.25, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.25,
						y: 0.45,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.4,
						y: 0.5,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.7,
						y: 0.3,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.8,
						y: 0.6,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.2,
						y: 0.7,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.4,
						y: 0.8,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.9,
						y: 0.4,
						m: 500
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.9,
					y: 0.75,
					m: 2000
				}
			},
			//level fun 2
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.1, //percentage of canvasWidth
					y: 0.35, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.3,
						y: 0.3,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.5,
						y: 0.3,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.7,
						y: 0.3,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.9,
						y: 0.3,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.3,
						y: 0.7,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.5,
						y: 0.7,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.7,
						y: 0.7,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.9,
						y: 0.7,
						m: 500
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.8,
					y: 0.5,
					m: 2000
				}
			}
		]
	}
];
