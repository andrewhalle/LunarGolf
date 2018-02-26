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
	//course 3
	{
		levels: [
			null,
			//level 1
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.3,
					scale_y: 0.3,
					x: 0.15, //percentage of canvasWidth
					y: 0.7, //percentage of canvasHeight
					m: 500
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.5,
						scale_y: 0.5,
						x: 0.5,
						y: 0.5,
						m: 2000
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 0,
						angvelocity: 3,
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
						angle: 0,
						angvelocity: 3,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3.14/2,
						angvelocity: 3,
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
						angle: 3.14/2,
						angvelocity: 3,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3.14,
						angvelocity: 3,
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
						angle: 3.14,
						angvelocity: 3,
						m: 500
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.0,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3.14*3/2,
						angvelocity: 3,
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
						angle: 3.14*3/2,
						angvelocity: 3,
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
					x: 0.1, //percentage of canvasWidth
					y: 0.2, //percentage of canvasHeight
					m: 500
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.7,
						y: 0.33,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.7,
						y: 0.66,
						m: 500
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						xcenter: 0.9,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 0,
						angvelocity: 10,
						m: 1
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.9,
					y: 0.5,
					m: 1000
				}
			},
			//level 3
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.25,
					scale_y: 0.25,
					x: 0.5, //percentage of canvasWidth
					y: 0.5, //percentage of canvasHeight
					m: 1000
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.2,
						y: 0.2,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.2,
						y: 0.8,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.8,
						y: 0.2,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.8,
						y: 0.8,
						m: 500
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: 3,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14/2,
						angvelocity: 3,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14,
						angvelocity: 3,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14*3/2,
						angvelocity: 3,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.9,
						ycenter: 0.15,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0,
						angvelocity: 3,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.9,
						ycenter: 0.15,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14/2,
						angvelocity: 3,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.9,
						ycenter: 0.15,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14,
						angvelocity: 3,
						m: 300
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.9,
						ycenter: 0.15,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.14*3/2,
						angvelocity: 3,
						m: 300
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.9,
					y: 0.15,
					m: 1000
				}
			},
			//level 4
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.15,
					scale_y: 0.15,
					x: 0.05, //percentage of canvasWidth
					y: 0.8, //percentage of canvasHeight
					m: 200
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.3,
						y: 0.5,
						m: 1000
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.5,
						y: 0.5,
						m: 1000
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.7,
						y: 0.5,
						m: 1000
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.5,
						ycenter: 0.55,
						xlength: 0.35,
						ylength: 0.35,
						angle: 0,
						angvelocity: 7,
						m: 1000
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.5,
						ycenter: 0.55,
						xlength: 0.35,
						ylength: 0.35,
						angle: 3.14,
						angvelocity: 7,
						m: 1000
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.95,
					y: 0.15,
					m: 1000
				}
			},
			//level 5
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.15,
					scale_y: 0.15,
					x: 0.1, //percentage of canvasWidth
					y: 0.75, //percentage of canvasHeight
					m: 200
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						x: 0.35,
						y: 0.35,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						x: 0.5,
						y: 0.5,
						m: 800
					},
					{
						filename: "images/moon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						x: 0.65,
						y: 0.65,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						x: 0.35,
						y: 0.65,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.15,
						scale_y: 0.15,
						x: 0.65,
						y: 0.35,
						m: 500
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.1,
						ycenter: 0.75,
						xlength: 0.15,
						ylength: 0.15,
						angle: 0,
						angvelocity: 3,
						m: 100
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.85,
						ycenter: 0.35,
						xlength: 0.1,
						ylength: 0.15,
						angle: 0,
						angvelocity: 3.5,
						m: 100
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.1,
						ycenter: 0.75,
						xlength: 0.15,
						ylength: 0.15,
						angle: 3.14,
						angvelocity: 3,
						m: 100
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.85,
						ycenter: 0.35,
						xlength: 0.1,
						ylength: 0.15,
						angle: 3.14,
						angvelocity: 3.5,
						m: 100
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.85,
					y: 0.35,
					m: 900
				}
			},
			//level 6
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.2,
					scale_y: 0.2,
					x: 0.85, //percentage of canvasWidth
					y: 0.25, //percentage of canvasHeight
					m: 200
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.7,
						y: 0.15,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 0.7,
						y: 0.45,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.45,
						y: 0.75,
						m: 900
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.50,
						y: 0.15,
						m: 900
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.15,
						ycenter: 0.35,
						xlength: 0.1,
						ylength: 0.15,
						angle: 0,
						angvelocity: 4,
						m: 200
					},{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.15,
						ycenter: 0.35,
						xlength: 0.1,
						ylength: 0.15,
						angle: 3.14,
						angvelocity: 4,
						m: 200
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.45,
						ycenter: 0.75,
						xlength: 0.15,
						ylength: 0.15,
						angle: 0,
						angvelocity: 4.3,
						m: 200
					},{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.45,
						ycenter: 0.75,
						xlength: 0.15,
						ylength: 0.15,
						angle: 3.14,
						angvelocity: 4.3,
						m: 200
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.15,
					y: 0.35,
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
					y: 0.2, //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.4,
						y: 0.0,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.6,
						y: 0.0,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.8,
						y: 0.0,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.4,
						y: 1.0,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.6,
						y: 1.0,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.8,
						y: 1.0,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 1.0,
						y: 0.3,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 1.0,
						y: 0.7,
						m: 500
					},
					{
						filename: "images/moon.png",
						scale_x: 0.3,
						scale_y: 0.3,
						x: 0.5,
						y: 0.5,
						m: 1000
					}
				],
				rotmoons: [
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.4,
						ycenter: 0.0,
						xlength: 0.14,
						ylength: 0.14,
						angle: 0,
						angvelocity: -1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.6,
						ycenter: 0.0,
						xlength: 0.14,
						ylength: 0.14,
						angle: 0,
						angvelocity: -1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.0,
						xlength: 0.14,
						ylength: 0.14,
						angle: 0,
						angvelocity: -1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.4,
						ycenter: 1.0,
						xlength: 0.14,
						ylength: 0.14,
						angle: 0,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.6,
						ycenter: 1.0,
						xlength: 0.14,
						ylength: 0.14,
						angle: 0,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 1.0,
						xlength: 0.14,
						ylength: 0.14,
						angle: 0,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.3,
						xlength: 0.14,
						ylength: 0.14,
						angle: 0,
						angvelocity: -1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 1.0,
						ycenter: 0.7,
						xlength: 0.14,
						ylength: 0.14,
						angle: 0,
						angvelocity: -1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.5,
						ycenter: 0.5,
						xlength: 0.14,
						ylength: 0.14,
						angle: 0,
						angvelocity: -1,
						m: 1
					}
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.85,
					y: 0.7,
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
					y: 0.5,  //percentage of canvasHeight
					m: 100
				},
				moons: [
					{
						filename: "images/moon.png",
						scale_x: 0.2,
						scale_y: 0.2,
						x: 5,
						y: 5,
						m: 1
					}
				],
				rotmoons: [
					// begin arm 
					{
						filename: "images/rotmoon.png",
						scale_x: 0.05,
						scale_y: 0.05,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 0.9,
						angvelocity: -1.1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 0.9,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.3,
						ylength: 0.3,
						angle: 0.9,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 0.9,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 0.9,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.6,
						ylength: 0.6,
						angle: 0.9,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.7,
						ylength: 0.7,
						angle: 0.9,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.8,
						ylength: 0.8,
						angle: 0.9,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.9,
						ylength: 0.9,
						angle: 0.9,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 1.0,
						ylength: 1.0,
						angle: 0.9,
						angvelocity: 1,
						m: 1
					},
					// end arm
					// begin arm
					{
						filename: "images/rotmoon.png",
						scale_x: 0.05,
						scale_y: 0.05,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 1.8,
						angvelocity: -1.1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 1.8,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.3,
						ylength: 0.3,
						angle: 1.8,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 1.8,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 1.8,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.6,
						ylength: 0.6,
						angle: 1.8,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.7,
						ylength: 0.7,
						angle: 1.8,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.8,
						ylength: 0.8,
						angle: 1.8,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.9,
						ylength: 0.9,
						angle: 1.8,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 1.0,
						ylength: 1.0,
						angle: 1.8,
						angvelocity: 1,
						m: 1
					},
					// end arm
					// begin arm
					{
						filename: "images/rotmoon.png",
						scale_x: 0.05,
						scale_y: 0.05,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 2.7,
						angvelocity: -1.1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 2.7,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.3,
						ylength: 0.3,
						angle: 2.7,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 2.7,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 2.7,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.6,
						ylength: 0.6,
						angle: 2.7,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.7,
						ylength: 0.7,
						angle: 2.7,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.8,
						ylength: 0.8,
						angle: 2.7,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.9,
						ylength: 0.9,
						angle: 2.7,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 1.0,
						ylength: 1.0,
						angle: 2.7,
						angvelocity: 1,
						m: 1
					},
					// end arm
					// begin arm
					{
						filename: "images/rotmoon.png",
						scale_x: 0.05,
						scale_y: 0.05,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 3.6,
						angvelocity: -1.1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 3.6,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.3,
						ylength: 0.3,
						angle: 3.6,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 3.6,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 3.6,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.6,
						ylength: 0.6,
						angle: 3.6,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.7,
						ylength: 0.7,
						angle: 3.6,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.8,
						ylength: 0.8,
						angle: 3.6,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.9,
						ylength: 0.9,
						angle: 3.6,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 1.0,
						ylength: 1.0,
						angle: 3.6,
						angvelocity: 1,
						m: 1
					},
					// end arm
					// begin arm
					{
						filename: "images/rotmoon.png",
						scale_x: 0.05,
						scale_y: 0.05,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 4.5,
						angvelocity: -1.1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 4.5,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.3,
						ylength: 0.3,
						angle: 4.5,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 4.5,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 4.5,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.6,
						ylength: 0.6,
						angle: 4.5,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.7,
						ylength: 0.7,
						angle: 4.5,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.8,
						ylength: 0.8,
						angle: 4.5,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.9,
						ylength: 0.9,
						angle: 4.5,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 1.0,
						ylength: 1.0,
						angle: 4.5,
						angvelocity: 1,
						m: 1
					},
					// end arm
					// begin arm
					{
						filename: "images/rotmoon.png",
						scale_x: 0.05,
						scale_y: 0.05,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 5.4,
						angvelocity: -1.1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 5.4,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.3,
						ylength: 0.3,
						angle: 5.4,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 5.4,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 5.4,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.6,
						ylength: 0.6,
						angle: 5.4,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.7,
						ylength: 0.7,
						angle: 5.4,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.8,
						ylength: 0.8,
						angle: 5.4,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.9,
						ylength: 0.9,
						angle: 5.4,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 1.0,
						ylength: 1.0,
						angle: 5.4,
						angvelocity: 1,
						m: 1
					},
					// end arm
					// begin arm
					{
						filename: "images/rotmoon.png",
						scale_x: 0.05,
						scale_y: 0.05,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.1,
						ylength: 0.1,
						angle: 6.3,
						angvelocity: -1.1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.2,
						ylength: 0.2,
						angle: 6.3,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.3,
						ylength: 0.3,
						angle: 6.3,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.4,
						ylength: 0.4,
						angle: 6.3,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.5,
						ylength: 0.5,
						angle: 6.3,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.6,
						ylength: 0.6,
						angle: 6.3,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.7,
						ylength: 0.7,
						angle: 6.3,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.8,
						ylength: 0.8,
						angle: 6.3,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 0.9,
						ylength: 0.9,
						angle: 6.3,
						angvelocity: 1,
						m: 1
					},
					{
						filename: "images/rotmoon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						xcenter: 0.8,
						ycenter: 0.5,
						xlength: 1.0,
						ylength: 1.0,
						angle: 6.3,
						angvelocity: 1,
						m: 1
					},
					// end arm
				],
				blackhole: {
					filename: "images/blackhole.png",
					scale_x: 0.5,
					scale_y: 0.5,
					x: 0.8,
					y: 0.5,
					m: 2000
				}
			},
			//level 9
			{
				planet: {
					filename: "images/planet.png",
					scale_x: 0.1,
					scale_y: 0.1,
					x: 0.9, //percentage of canvasWidth
					y: 0.85, //percentage of canvasHeight
					m: 100
				},
				moons: [
					// begin bottom
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.1,
						y: 1.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.2,
						y: 1.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.3,
						y: 1.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.4,
						y: 1.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.5,
						y: 1.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.6,
						y: 1.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.7,
						y: 1.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.8,
						y: 1.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.9,
						y: 1.0,
						m: 100
					},
					// end bottom
					// begin top
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.4,
						y: 0.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.5,
						y: 0.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.6,
						y: 0.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.7,
						y: 0.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.8,
						y: 0.0,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.9,
						y: 0.0,
						m: 100
					},
					// end top
					// begin 1st level
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.2,
						y: 0.7,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.3,
						y: 0.7,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.4,
						y: 0.7,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.5,
						y: 0.7,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.6,
						y: 0.7,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.7,
						y: 0.7,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.8,
						y: 0.7,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.9,
						y: 0.7,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 1.0,
						y: 0.7,
						m: 100
					},
					// end 1st level
					// begin 2nd level
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.0,
						y: 0.3,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.1,
						y: 0.3,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.2,
						y: 0.3,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.3,
						y: 0.3,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.4,
						y: 0.3,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.5,
						y: 0.3,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.6,
						y: 0.3,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.7,
						y: 0.3,
						m: 100
					},
					{
						filename: "images/moon.png",
						scale_x: 0.1,
						scale_y: 0.1,
						x: 0.8,
						y: 0.3,
						m: 400
					},
					// end 2nd level
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
					x: 0.1,
					y: 0.1,
					m: 3000
				}
			}
		]
	},
];
