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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 5,
						ycenter: 5,
						xlength: 0,
						ylength: 0,
						angle: 0,
						angvelocity: 1,
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 5,
						ycenter: 5,
						xlength: 0,
						ylength: 0,
						angle: 0,
						angvelocity: 1,
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 5,
						ycenter: 5,
						xlength: 0,
						ylength: 0,
						angle: 0,
						angvelocity: 1,
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 5,
						ycenter: 5,
						xlength: 0,
						ylength: 0,
						angle: 0,
						angvelocity: 1,
						m: 1
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 5,
						ycenter: 5,
						xlength: 0,
						ylength: 0,
						angle: 0,
						angvelocity: 1,
						m: 1
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 5,
						ycenter: 5,
						xlength: 0,
						ylength: 0,
						angle: 0,
						angvelocity: 1,
						m: 1
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 5,
						ycenter: 5,
						xlength: 0,
						ylength: 0,
						angle: 0,
						angvelocity: 1,
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
			//level 8
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 5,
						ycenter: 5,
						xlength: 0,
						ylength: 0,
						angle: 0,
						angvelocity: 1,
						m: 1
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
			//level 9
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 5,
						ycenter: 5,
						xlength: 0,
						ylength: 0,
						angle: 0,
						angvelocity: 1,
						m: 1
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
	},
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 0,
						angvelocity: 1,
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
			// level 2
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 0,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 3.14159,
						angvelocity: 1,
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
			// level 3
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.1, //percentage of canvasWidth
					y: 0.8, //percentage of canvasHeight
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: .5,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14159,
						angvelocity: .5,
						m: 300
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.8,
					y: 0.2,
					m: 1000
				}
			},
			// level 4
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.1, //percentage of canvasWidth
					y: 0.5, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.4,
						scale_y: 0.4,
						x: 1.0,
						y: 1.0,
						m: 1000
					},
					{
						filename: "images/moon.png",
						scale_x: 0.4,
						scale_y: 0.4,
						x: 0.5,
						y: 0.0,
						m: 1000
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 1.0,
						ycenter: 1.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 1.0,
						ycenter: 0.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 1.0,
						ycenter: 1.0,
						xlength: 0.2,
						ylength: 0.3,
						angle: 3.14159,
						angvelocity: 2,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 1.0,
						ycenter: 1.0,
						xlength: 0.5,
						ylength: 0.3,
						angle: 3.14159/2,
						angvelocity: 2,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.0,
						xlength: 0.2,
						ylength: 0.3,
						angle: 3.14159,
						angvelocity: 2,
						m: 500
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.8,
					y: 0.2,
					m: 1000
				}
			},
			// level 5
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.1, //percentage of canvasWidth
					y: 0.5, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.4,
						scale_y: 0.4,
						x: 0.5,
						y: 0.0,
						m: 1000
					},
					{
						filename: "images/moon.png",
						scale_x: 0.4,
						scale_y: 0.4,
						x: 0.5,
						y: 1.0,
						m: 1000
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14/2,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 1.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 1.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 1.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14/2,
						angvelocity: 1,
						m: 500
					},{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.5,
						ycenter: 0.0,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14,
						angvelocity: 1,
						m: 500
					},
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
			// level 6
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.1, //percentage of canvasWidth
					y: 0.8, //percentage of canvasHeight
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
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: .5,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14,
						angvelocity: .5,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.3,
						ylength: 0.3,
						angle: 3.12/2,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.3,
						ylength: 0.3,
						angle: 3.12/2 + 3.14,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.4,
						ylength: 0.2,
						angle: 3.14159,
						angvelocity: 2,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.4,
						ylength: 0.2,
						angle: 3.14159 + 3.14,
						angvelocity: 2,
						m: 500
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.8,
					y: 0.2,
					m: 1000
				}
			},
			// level 7
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.3, //percentage of canvasWidth
					y: 0.5, //percentage of canvasHeight
					m: 400
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.5,
						scale_y: 0.5,
						x: 0.7,
						y: 0.9,
						m: 1000
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 0.3,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 0.3,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14159,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 0.3,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14/2,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 0.3,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3*3.14159/2,
						angvelocity: 1,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.1,
						ylength: 0.1,
						angle: 0,
						angvelocity: 2,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.1,
						ylength: 0.1,
						angle: 3.14159/2,
						angvelocity: 2,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.1,
						ylength: 0.1,
						angle: 3.14,
						angvelocity: 2,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.1,
						ylength: 0.1,
						angle: 3*3.14159/2,
						angvelocity: 2,
						m: 500
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.8,
					y: 0.2,
					m: 1000
				}
			},
			// level 8
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.1, //percentage of canvasWidth
					y: 0.3, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.5,
						y: 0.3,
						m: 400
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.5,
						y: 0.8,
						m: 400
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.3,
						y: 0.2,
						m: 400
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.3,
						y: 0.7,
						m: 400
					},
					{
						filename: "images/moon.png",
						scale_x: 0.4,
						scale_y: 0.4,
						x: 0.05,
						y: 0.7,
						m: 800
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.8,
						ycenter: 0.2,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: 4,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.8,
						ycenter: 0.8,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14159,
						angvelocity: 4,
						m: 500
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.8,
					y: 0.2,
					m: 2000
				}
			},
			// level 3
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.1, //percentage of canvasWidth
					y: 0.5, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 2.5,
						y: 2.5,
						m: 500
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: .5,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14,
						angvelocity: .5,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14/2,
						angvelocity: .5,
						m: 700
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14*(3/4),
						angvelocity: .5,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.3,
						ylength: 0.3,
						angle: 3.14/6,
						angvelocity: 1,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.3,
						ylength: 0.3,
						angle: 3.14/6 + 3.14,
						angvelocity: 1,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 3.14/3,
						angvelocity: 2,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 3.14/2,
						angvelocity: 2,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 3.14/3 + 3.14,
						angvelocity: 2,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 3.14/3 *(1/2),
						angvelocity: 2,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 3.14/3 *(7/2),
						angvelocity: 2,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 3.14/3 *(5/2),
						angvelocity: 2,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 3.14/3 *(9/2),
						angvelocity: 2,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: (3.14/3 + 3.14)*(2),
						angvelocity: 2,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3.14/2,
						angvelocity: 4,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3*3.14/2,
						angvelocity: 4,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 7*3.14/2,
						angvelocity: 4,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3*3.14/8,
						angvelocity: 4,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3.14/2 + 3.14,
						angvelocity: 4,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3*3.14/6,
						angvelocity: 4,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3.14/2 + 3.14/3,
						angvelocity: 4,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: (3.14/2 + 3.14)*2,
						angvelocity: 4,
						m: 700
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.6,
						ylength: 0.6,
						angle: 0,
						angvelocity: 6,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 1.0,
						ycenter: 0.5,
						xlength: 0.6,
						ylength: 0.6,
						angle: 3.14,
						angvelocity: 6,
						m: 700
					},
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 1.0,
					y: 0.5,
					m: 1000
				}
			},
		]
	},
];
