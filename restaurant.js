module.exports = {
	restaurant: {
		id: 1,
		plan: "pro", //potrebbe anche essere un codice
		name: "la bocca di bacco",
		address: "via della bottega",
		number: 22,
		city: "bologna",
		short: "bo",
		zipcode: "40100",
		banner: "/imgs/ristorante.jpg", //immagine in base64
	},
	menus: [
		{
			name: "menu default",
			active: true,
			categories: [
				{
					name: "antipasti",
					img: "/imgs/dishes/antipasti.jpg",
					items: [
						{
							id: 1,
							name: "zucchine in primavera",
							price: 7.0,
							img: "/imgs/dishes/zucchine.jpg",
							people: 2,
							description:
								"Antipasti leggeri ma gustosi con ingredienti semplici",
							ingredients: {
								leadings: [
									{
										name: "zucchine",
										frozen: false,
									},
									{
										name: "prosciutto cotto",
										frozen: false,
									},
									{
										name: "formaggio philadelphia",
										frozen: false,
									},
								],
								replacements: [],
								optionals: [],
							},
							allergens: ["latte"],
						},
						{
							id: 2,
							name: "cheddar",
							price: 6.2,
							img: "/imgs/dishes/cheddar.jpg",
							people: 2,
							description:
								"Il Cheddar è un tipico formaggio di origine inglese dal sapore deciso e ricco di tradizione",
							ingredients: {
								leadings: [
									{
										name: "formaggio stagionato",
										frozen: false,
									},
								],
								replacements: [],
								optionals: [],
							},
							allergens: ["latte"],
						},
					],
				},
				{
					name: "primi piatti",
					img: "/imgs/dishes/primo.jpg",
					items: [
						{
							id: 3,
							name: "spaghetti alla puttanesca",
							price: 9.5,
							img: "/imgs/dishes/puttanesca.jpg",
							people: 1,
							timerange: { min: 12, max: 20 },
							description:
								"Gli spaghetti alla puttanesca sono un primo piatto tipico della cucina napoletana, detto anche semplicemente aulive e chiapparielle",
							ingredients: {
								leadings: [
									{ name: "pasta", frozen: false },
									{
										name: "sugo a base di pomodoro",
										frozen: false,
									},
									{ name: "olive nere", frozen: false },
									{ name: "aglio", frozen: false },
									{ name: "olio d'oliva", frozen: false },
									{ name: "capperi", frozen: false },
									{ name: "origano", frozen: false },
								],
								replacements: [],
								optionals: [],
							},
							allergens: ["glutine", "uova", "solfiti"],
						},
						{
							id: 4,
							name: "patate ripiene del conte",
							price: 12.0,
							img: "/imgs/dishes/potato-skins.jpg",
							people: 2,
							timerange: { min: 18, max: 30 },
							description:
								"Le patate ripiene sono un antica ricetta di contadini che fa uso di elementi semplici e tramandata da generazioni",
							ingredients: {
								leadings: [
									{ name: "patate", frozen: false },
									{ name: "formaggio fuso", frozen: false },
									{ name: "pomodoro", frozen: false },
									{ name: "pancetta", frozen: false },
									{ name: "olio", frozen: false },
								],
								replacements: [
									{
										name: "olio",
										default: "olio d'oliva",
										alternatives: [
											{
												name: "olio d'oliva",
												frozen: false,
												price: 0,
											},
											{
												name: "olio piccante",
												frozen: false,
												price: 0.6,
											},
										],
									},
									{
										name: "formaggio",
										default: "formaggio svizzero",
										alternatives: [
											{
												name: "formaggio svizzero",
												frozen: false,
												price: 0,
											},
											{
												name: "formaggio stagionato",
												frozen: false,
												price: 0.8,
											},
										],
									},
								],
								optionals: [],
							},
							allergens: ["latte", "uova"],
						},
						{
							id: 5,
							name: "risotto alla viareggina",
							price: 10.54,
							img: "/imgs/dishes/risotto-viareggina.jpg",
							people: 2,
							timerange: { min: 16, max: 24 },
							freezed: true,
							description:
								"Risotto a base di frutti di mare fatto con tutta l'antica tradizione di Viareggio in Toscana",
							ingredients: {
								leadings: [
									{ name: "riso ribe", frozen: false },
									{ name: "pomodoro", frozen: false },
									{ name: "olio d'oliva", frozen: false },
									{ name: "prezzemolo", frozen: false },
									{ name: "calamari", frozen: false },
									{ name: "totani", frozen: false },
									{ name: "gamberetti", frozen: false },
									{ name: "aglio", frozen: false },
									{ name: "peperoncino", frozen: false },
								],
								replacements: [
									{
										name: "riso",
										default: "riso ribe",
										alternatives: [
											{
												name: "riso ribe",
												frozen: false,
												price: 0,
											},
											{
												name: "riso basmati",
												frozen: false,
												price: 0.5,
											},
											{
												name: "riso venere",
												frozen: false,
												price: 1.2,
											},
										],
									},
								],
								optionals: [],
							},
							allergens: [
								"molluschi",
								"crostacei",
								"solfiti",
								"uova",
								"frutta a guscio",
							],
						},
					],
				},
				{
					name: "secondi piatti",
					img: "/imgs/dishes/secondo.jpg",
					items: [
						{
							id: 6,
							name: "scaloppine al limone",
							price: 7.0,
							img: "/imgs/dishes/scaloppine.jpg",
							people: 1,
							timerange: { min: 8, max: 12 },
							description:
								"Classica ricetta per cucinare la carne di vitello. Un secondo piatto di carne leggero ma gustoso e che mette d'accordo tutta la famiglia",
							ingredients: {
								leadings: [
									{ name: "carne di vitello", frozen: true },
									{ name: "farina", frozen: false },
									{ name: "olio d'oliva", frozen: false },
									{ name: "burro", frozen: false },
									{ name: "sale", frozen: false },
									{ name: "aglio", frozen: false },
									{ name: "limone", frozen: false },
									{ name: "pepe nero", frozen: false },
									{ name: "prezzemolo", frozen: false },
								],
								replacements: [],
								optionals: [],
							},
							allergens: ["glutine, latte"],
						},
						{
							id: 7,
							name: "rollè di melanzana",
							price: 8.2,
							img: "/imgs/dishes/melanzane.jpg",
							people: 1,
							timerange: { min: 10, max: 15 },
							description:
								"Le melanzane sono uno degli ortaggi più amati dell’estate ed adatte anche ai vegani",
							ingredients: {
								leadings: [
									{ name: "melanzana", frozen: false },
									{ name: "pomodoro", frozen: false },
									{ name: "formaggio", frozen: false },
									{ name: "olio d'oliva", frozen: false },
									{ name: "sale", frozen: false },
								],
								replacements: [],
								optionals: [],
							},
							allergens: ["solfiti"],
						},
					],
				},
				{
					name: "pizze",
					img: "/imgs/dishes/pizza.jpg",
					items: [
						{
							id: 8,
							name: "pizza margherita",
							price: 4,
							img: "/imgs/dishes/pizza-margherita.jpg",
							people: 1,
							timerange: { min: 10, max: 15 },
							description:
								"Pizza semplice e gustosa tipica della tradizione italiana e simbolo in tutto il mondo",
							sizes: [
								{
									name: "normale",
									price: 4,
									default: true,
								},
								{
									name: "mini",
									price: 2.5,
									default: false,
								},
								{
									name: "gigante",
									price: 7,
									default: false,
								},
								{
									name: "alla pala (50 cm)",
									price: 12,
									default: false,
								},
							],
							ingredients: {
								leadings: [
									{
										name: "salsa pomodoro",
										frozen: false,
									},
									{
										name: "mozzarella",
										frozen: false,
									},
								],
								replacements: [
									{
										name: "farina",
										default: "farina tipo 0",
										alternatives: [
											{
												name: "farina tipo 0",
												frozen: false,
												price: 0,
											},
											{
												name: "farina di kamut",
												frozen: false,
												price: 1.5,
											},
											{
												name: "farina ai cereali",
												frozen: false,
												price: 1.6,
											},
											{
												name: "farina di canapa",
												frozen: false,
												price: 1.5,
											},
											{
												name: "farina di farro",
												frozen: false,
												price: 1.4,
											},
											{
												name: "farina senza glutine",
												frozen: false,
												price: 1.8,
											},
										],
									},
									{
										name: "salsa pomodoro",
										default: "salsa pomodoro",
										alternatives: [
											{
												name: "salsa pomodoro",
												frozen: false,
												price: 0,
											},
											{
												name: "pomodoro datterino",
												frozen: false,
												price: 1.6,
											},
											{
												name: "passata pomodoro",
												frozen: true,
												price: 0.5,
											},
										],
									},
								],
								optionals: [
									{
										name: "wusterls",
										frozen: false,
										price: 1.0,
									},
									{
										name: "prosciutto crudo",
										frozen: false,
										price: 1.8,
									},
									{
										name: "prosciutto cotto",
										frozen: false,
										price: 1.5,
									},
									{
										name: "rucola",
										frozen: false,
										price: 1.0,
									},
									{
										name: "speck",
										frozen: false,
										price: 2.5,
									},
									{
										name: "foglie di basilico",
										frozen: false,
										price: 0.8,
									},
								],
							},
							allergens: ["glutine, latte"],
						},
						{
							id: 9,
							name: "pizza capricciosa",
							price: 6.5,
							img: "/imgs/dishes/pizza-capricciosa.jpg",
							people: 1,
							freezed: true,
							timerange: { min: 10, max: 15 },
							description:
								"La pizza capricciosa è una pizza tipica della cucina italiana",
							sizes: [
								{
									name: "normale",
									price: 6.5,
									default: true,
								},
								{
									name: "mini",
									price: 3,
									default: false,
								},
								{
									name: "gigante",
									price: 8,
									default: false,
								},
								{
									name: "alla pala (50 cm)",
									price: 13,
									default: false,
								},
							],
							ingredients: {
								leadings: [
									{ name: "salsa pomodoro", frozen: false },
									{ name: "mozzarella", frozen: false },
									{ name: "prosciutto cotto", frozen: false },
									{ name: "funghi", frozen: false },
									{ name: "olive", frozen: false },
									{ name: "carciofini", frozen: false },
								],
								replacements: [
									{
										name: "farina",
										default: "farina tipo 0",
										alternatives: [
											{
												name: "farina tipo 0",
												frozen: false,
												price: 0,
											},
											{
												name: "farina di kamut",
												frozen: false,
												price: 1.5,
											},
											{
												name: "farina ai cereali",
												frozen: false,
												price: 1.6,
											},
											{
												name: "farina di canapa",
												frozen: false,
												price: 1.5,
											},
											{
												name: "farina di farro",
												frozen: false,
												price: 1.4,
											},
											{
												name: "farina senza glutine",
												frozen: false,
												price: 1.8,
											},
										],
									},
									{
										name: "salsa pomodoro",
										default: "salsa pomodoro",
										alternatives: [
											{
												name: "salsa pomodoro",
												frozen: false,
												price: 0,
											},
											{
												name: "pomodoro datterino",
												frozen: false,
												price: 1.6,
											},
										],
									},
								],
								optionals: [],
							},
							allergens: ["glutine, latte", "solfiti"],
						},
						{
							id: 10,
							name: "pizza crudaiola",
							price: 5.5,
							img: "/imgs/dishes/crudaiola.jpg",
							people: 1,
							freezed: false,
							timerange: { min: 8, max: 13 },
							description:
								"La pizza crudaiola è una pizza con sapori della natura italiana ",
							sizes: [
								{
									name: "normale",
									price: 5.5,
									default: true,
								},
								{
									name: "mini",
									price: 2.5,
									default: false,
								},
								{
									name: "gigante",
									price: 7.5,
									default: false,
								},
								{
									name: "alla pala (50 cm)",
									price: 12,
									default: false,
								},
							],
							ingredients: {
								leadings: [
									{ name: "salsa pomodoro", frozen: false },
									{ name: "mozzarella", frozen: false },
									{ name: "grana a scaglie", frozen: false },
									{ name: "rucola", frozen: false },
									{ name: "pomodorini", frozen: false },
								],
								replacements: [
									{
										name: "farina",
										default: "farina tipo 0",
										alternatives: [
											{
												name: "farina tipo 0",
												frozen: false,
												price: 0,
											},
											{
												name: "farina di farro",
												frozen: false,
												price: 1.4,
											},
											{
												name: "farina senza glutine",
												frozen: false,
												price: 1.8,
											},
										],
									},
									{
										name: "pomodorini",
										default: "pomodorini",
										alternatives: [
											{
												name: "pomodorini",
												frozen: false,
												price: 0,
											},
											{
												name: "pomodoro datterino",
												frozen: false,
												price: 1.7,
											},
											{
												name: "pomodoro ciliegino",
												frozen: false,
												price: 1.5,
											},
											{
												name: "pomodoro san marzano",
												frozen: false,
												price: 1.5,
											},
										],
									},
								],
								optionals: [
									{
										name: "wusterls",
										frozen: false,
										price: 1,
									},
									{
										name: "prosciutto crudo",
										frozen: false,
										price: 1.8,
									},
									{
										name: "prosciutto cotto",
										frozen: false,
										price: 1.5,
									},
								],
							},
							allergens: ["glutine", "latte"],
						},
						{
							id: 11,
							name: "pizza ai quattro formaggi",
							price: 6,
							img: "/imgs/dishes/4-formaggi.jpg",
							people: 1,
							freezed: false,
							timerange: { min: 10, max: 16 },
							description:
								"La pizza ai quattro formaggi è una pizza con sapori tipici della cucina italiana",
							sizes: [
								{
									name: "normale",
									price: 6,
									default: true,
								},
								{
									name: "mini",
									price: 3,
									default: false,
								},
								{
									name: "gigante",
									price: 9,
									default: false,
								},
							],
							ingredients: {
								leadings: [
									{ name: "mozzarella", frozen: false },
									{ name: "grana", frozen: false },
									{ name: "gorgonzola", frozen: false },
									{ name: "mascarpone", frozen: false },
									{ name: "briè", frozen: false },
								],
								replacements: [
									{
										name: "farina",
										default: "farina tipo 0",
										alternatives: [
											{
												name: "farina tipo 0",
												frozen: false,
												price: 0,
											},
											{
												name: "farina di farro",
												frozen: false,
												price: 1.4,
											},
											{
												name: "farina senza glutine",
												frozen: false,
												price: 1.8,
											},
										],
									},
									{
										name: "gorgonzola",
										default: "gorgonzola",
										alternatives: [
											{
												name: "gorgonzola",
												frozen: false,
												price: 0,
											},
											{
												name: "stracciatella",
												frozen: false,
												price: 1.5,
											},
											{
												name: "burratina",
												frozen: false,
												price: 2.3,
											},
										],
									},
								],
								optionals: [
									{
										name: "wusterls",
										frozen: false,
										price: 1.0,
									},
									{
										name: "pomodori secchi",
										frozen: false,
										price: 1.8,
									},
								],
							},
							allergens: ["glutine", "latte"],
						},
					],
				},
				{
					name: "carni",
					img: "/imgs/dishes/bistecca.jpg",
					items: [
						{
							id: 12,
							name: "tagliata di vitello",
							price: 14.0,
							img: "/imgs/dishes/carni.jpg",
							people: 4,
							timerange: { min: 12, max: 20 },
							description:
								"Pizza semplice e gustosa tipica della tradizione italiana e simbolo in tutto il mondo",
							ingredients: {
								leadings: [
									{ name: "carne", frozen: false },
									{ name: "rosmarino", frozen: false },
									{ name: "patate", frozen: false },
									{ name: "sale", frozen: false },
									{ name: "olio", frozen: false },
								],
								replacements: [],
								optionals: [],
							},
							allergens: [],
						},
					],
				},
				// { name: "dolci", img: "", items: [] },
				// { name: "insalate", img: "", items: [] },
				// { name: "frutta", img: "", items: [] },
				// { name: "vini", img: "", items: [] },
				// { name: "amari", img: "", items: [] },
				// { name: "caffetteria", img: "", items: [] },
				// { name: "bevande", img: "", items: [] },
				// { name: "aperitivi", img: "", items: [] },
				// { name: "specialità della casa", img: "", items: [] },
			],
		},
	],
};
