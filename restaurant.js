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
		banner: "/imgs/ristorante.jpg", //base64
		hours: [
			{ id: 1, hours: null, isOpen: false }, //lunedì
			{
				id: 2,
				isOpen: true,
				hours: {
					morning: null,
					afternoon: { start: 18.0, end: 23.3 },
				},
			},
			{
				id: 3,
				isOpen: true,
				hours: {
					morning: { start: 12.0, end: 14.3 },
					afternoon: { start: 18.0, end: 23.3 },
				},
			},
			{
				id: 4,
				isOpen: true,
				hours: {
					morning: { start: 12.0, end: 14.3 },
					afternoon: { start: 18.0, end: 23.3 },
				},
			},
			{
				id: 5,
				isOpen: true,
				hours: {
					morning: { start: 12.0, end: 14.3 },
					afternoon: { start: 18.0, end: 23.3 },
				},
			},
			{
				id: 6,
				isOpen: true,
				hours: {
					morning: { start: 12.0, end: 14.3 },
					afternoon: { start: 18.0, end: 23.3 },
				},
			},
			{
				id: 0,
				isOpen: true,
				hours: {
					morning: { start: 12.0, end: 14.3 },
					afternoon: { start: 18.0, end: 23.3 },
				},
			},
		],
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
							visible: true,
							type: 0,
							name: "zucchine in primavera",
							price: 5.8,
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
							allergens: [{ id: 5, name: "latte e derivati" }],
						},
						{
							id: 26,
							visible: true,
							type: 0,
							name: "carpaccik di gambero rosa",
							price: 9.0,
							img: "/imgs/dishes/carpaccik.png",
							people: 1,
							description:
								"crudo di gambero rosso di sicilia, pesto di pistacchio, mela verde, ananas, pop-corn di gambero",
							ingredients: {
								leadings: [
									{
										name: "gambero",
										frozen: false,
									},
									{
										name: "pesto di pistacchio",
										frozen: false,
									},
									{
										name: "mela verde",
										frozen: false,
									},
									{
										name: "ananas",
										frozen: false,
									},
								],
								replacements: [],
								optionals: [],
							},
							allergens: [{ id: 2, name: "crostacei" }],
						},
						{
							id: 27,
							visible: true,
							type: 0,
							name: "pomodoro bugiardo",
							price: 5.2,
							img: "/imgs/dishes/pomodoro.jpg",
							people: 1,
							description:
								"ripieno di formaggio, base crostino di pane glassa, estratto di pomodoro",
							ingredients: {
								leadings: [
									{
										name: "formaggio",
										frozen: false,
									},
									{
										name: "pane",
										frozen: false,
									},
									{
										name: "estratto di pomodoro",
										frozen: false,
									},
								],
								replacements: [],
								optionals: [],
							},
							allergens: [
								{ id: 4, name: "glutine" },
								{ id: 5, name: "latte e derivati" },
							],
						},
						{
							id: 2,
							visible: true,
							type: 0,
							name: "cheddar",
							price: 4.1,
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
							allergens: [{ id: 5, name: "latte e derivati" }],
						},
					],
				},
				{
					name: "primi piatti",
					img: "/imgs/dishes/primo.jpg",
					items: [
						{
							id: 3,
							visible: true,
							type: 0,
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
							allergens: [
								{ id: 4, name: "glutine" },
								{ id: 13, name: "uova e derivati" },
								{ id: 1, name: "anidride solforosa e solfiti" },
							],
						},
						{
							id: 4,
							visible: true,
							type: 0,
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
							allergens: [
								{ id: 5, name: "latte e derivati" },
								{ id: 13, name: "uova e derivati" },
							],
						},
						{
							id: 5,
							visible: true,
							type: 0,
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
								{ id: 7, name: "molluschi" },
								{ id: 2, name: "crostacei" },
								{ id: 13, name: "uova e derivati" },
								{ id: 3, name: "frutta a guscio" },
								{ id: 1, name: "anidride solforosa e solfiti" },
							],
						},
						{
							id: 20,
							visible: true,
							type: 0,
							name: "spaghetti allo scoglio",
							price: 8.5,
							img: "/imgs/dishes/spaghetti-mare.jpg",
							people: 1,
							timerange: { min: 15, max: 20 },
							freezed: false,
							description:
								"portata gustosa e stuzzicante che racchiude in sé tutto il profumo dei crostacei",
							ingredients: {
								leadings: [
									{ name: "pasta", frozen: false },
									{
										name: "pomodoro datterino",
										frozen: false,
									},
									{ name: "olio d'oliva", frozen: false },
									{ name: "prezzemolo", frozen: false },
									{ name: "gamberetti", frozen: true },
								],
								replacements: [
									{
										name: "pasta",
										default: "spaghetti grano duro",
										alternatives: [
											{
												name: "spaghetti grano duro",
												frozen: false,
												price: 0,
											},
											{
												name: "spaghetti senza glutine",
												frozen: false,
												price: 1.5,
											},
										],
									},
								],
								optionals: [],
							},
							allergens: [
								{ id: 1, name: "anidride solforosa e solfiti" },
								{ id: 2, name: "crostacei" },
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
							visible: true,
							type: 0,
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
							allergens: [
								{ id: 4, name: "glutine" },
								{ id: 5, name: "latte e derivati" },
							],
						},
						{
							id: 7,
							visible: true,
							type: 0,
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
							allergens: [
								{ id: 1, name: "anidride solforosa e solfiti" },
							],
						},
					],
				},
				{
					name: "pizze",
					img: "/imgs/dishes/pizza.jpg",
					items: [
						{
							id: 8,
							visible: true,
							type: 0,
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
							allergens: [
								{ id: 4, name: "glutine" },
								{ id: 5, name: "latte e derivati" },
							],
						},
						{
							id: 9,
							visible: true,
							type: 0,
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
							allergens: [
								{ id: 4, name: "glutine" },
								{ id: 5, name: "latte e derivati" },
								{ id: 1, name: "anidride solforosa e solfiti" },
							],
						},
						{
							id: 10,
							visible: true,
							type: 0,
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
							allergens: [
								{ id: 4, name: "glutine" },
								{ id: 5, name: "latte e derivati" },
							],
						},
						{
							id: 11,
							visible: true,
							type: 0,
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
							allergens: [
								{ id: 4, name: "glutine" },
								{ id: 5, name: "latte e derivati" },
							],
						},
					],
				},
				{
					name: "carni",
					img: "/imgs/dishes/bistecca.jpg",
					items: [
						{
							id: 12,
							visible: true,
							type: 0,
							name: "tagliata di vitello",
							price: 12,
							img: "/imgs/dishes/carni.jpg",
							people: 4,
							timerange: { min: 12, max: 20 },
							description:
								"gustosa tagliata tipica della tradizione italiana",
							sizes: [
								{
									name: "per 2 persone",
									price: 12,
									default: true,
								},
								{
									name: "per 4 persone",
									price: 20,
									default: false,
								},
							],
							ingredients: {
								leadings: [
									{ name: "carne vitello", frozen: false },
									{ name: "rosmarino", frozen: false },
									{ name: "patate", frozen: false },
									{ name: "sale", frozen: false },
									{ name: "olio", frozen: false },
								],
								replacements: [],
								optionals: [
									{
										name: "patatine fritte",
										frozen: false,
										price: 0.5,
									},
									{
										name: "patate al forno",
										frozen: false,
										price: 1,
									},
								],
							},
							allergens: [],
						},
						{
							id: 13,
							visible: true,
							type: 0,
							name: "grigliata mista di maiale",
							price: 10,
							img: "/imgs/dishes/grigliata-di-carne-maiale.jpg",
							people: 4,
							timerange: { min: 12, max: 20 },
							description:
								"gustosa grigliata di maiale con profumo di rosmarino",
							sizes: [
								{
									name: "per 2 persone",
									price: 10,
									default: true,
								},
								{
									name: "per 4 persone",
									price: 18,
									default: false,
								},
							],
							ingredients: {
								leadings: [
									{
										name: "costine di maiale",
										frozen: false,
									},
									{
										name: "salsicce di maiale",
										frozen: false,
									},
									{
										name: "spiedini di maiale",
										frozen: false,
									},
									{ name: "rosmarino", frozen: false },
									{ name: "sale", frozen: false },
									{ name: "olio", frozen: false },
								],
								replacements: [],
								optionals: [
									{
										name: "patatine fritte",
										frozen: false,
										price: 0.5,
									},
									{
										name: "patate al forno",
										frozen: false,
										price: 1,
									},
								],
							},
							allergens: [],
						},
						{
							id: 14,
							visible: true,
							type: 0,
							name: "churrasco",
							price: 7.5,
							img: "/imgs/dishes/churrasco.jpg",
							people: 1,
							timerange: { min: 8, max: 12 },
							description:
								"ricetta tipica sud americana con carne di manzo",
							ingredients: {
								leadings: [
									{ name: "carne", frozen: false },
									{ name: "pepe", frozen: false },
									{ name: "sale", frozen: false },
									{ name: "olio", frozen: false },
								],
								replacements: [],
								optionals: [
									{
										name: "patatine fritte",
										frozen: false,
										price: 0.5,
									},
									{
										name: "patate al forno",
										frozen: false,
										price: 1,
									},
								],
							},
							allergens: [],
						},
						{
							id: 15,
							visible: true,
							type: 0,
							name: "salsiccia grigliata",
							price: 6,
							img: "/imgs/dishes/salsiccia-grigliata.jpg",
							people: 1,
							timerange: { min: 6, max: 10 },
							description:
								"salsiccia grigliata al profumo di rosmarino, piatto sfizioso e veloce",
							ingredients: {
								leadings: [
									{
										name: "condino di manzo",
										frozen: false,
									},
									{ name: "pepe", frozen: false },
									{ name: "sale", frozen: false },
									{ name: "olio", frozen: false },
								],
								replacements: [
									{
										name: "carne",
										default: "carne di manzo",
										alternatives: [
											{
												name: "carne di manzo",
												frozen: false,
												price: 0,
											},
											{
												name: "carne di maiale",
												frozen: false,
												price: 1,
											},
										],
									},
								],
								optionals: [
									{
										name: "patatine fritte",
										frozen: false,
										price: 0.5,
									},
									{
										name: "patate al forno",
										frozen: false,
										price: 1,
									},
								],
							},
							allergens: [],
						},
					],
				},
				{
					name: "vini bianchi",
					img: "/imgs/dishes/vini-bianchi.jpg",
					items: [
						{
							id: 16,
							visible: true,
							type: 1,
							name: "carato siciliano",
							price: 14.5,
							img: "/imgs/dishes/carato.png",
							people: 1,
							description:
								"bianco dal sapore leggero tipico della sicilia",
							sizes: [],
							feat: {
								year: 2014,
								alcohol: 15,
								grape: "100% chardonnay",
								origin: "sicilia",
								classification: "DOC",
							},
							allergens: [
								{ id: 1, name: "anidride solforosa e solfiti" },
							],
						},
						{
							id: 17,
							visible: true,
							type: 1,
							name: "cervaro della sala",
							price: 13,
							img: "/imgs/dishes/cervaro.jpg",
							description:
								"bianco dal sapore leggero e sofisticato, con un sapore di storia della sua terra",
							sizes: [
								{
									name: "normale 75cl",
									price: 13,
									default: true,
								},
								{
									name: "magnum 1.5l",
									price: 25,
									default: false,
								},
							],
							feat: {
								year: 2019,
								alcohol: 10,
								grape: "92% chardonnay, 8% crechetto",
								origin: "umbria",
								classification: "IGT",
							},
							allergens: [
								{ id: 1, name: "anidride solforosa e solfiti" },
							],
						},
						{
							id: 18,
							visible: true,
							type: 1,
							name: "poliedro",
							price: 20,
							img: "/imgs/dishes/poliedro.jpg",
							description:
								"bianco dal sapore succoso, fresco, che racconta il mandarino candito",
							sizes: [],
							feat: {
								year: 2018,
								grape: "100% vespolina",
								origin: "torino",
								alcohol: 12,
								classification: "IGP",
							},
							allergens: [],
						},
						{
							id: 19,
							visible: true,
							type: 1,
							name: "barton fara",
							price: 15,
							img: "/imgs/dishes/fara.jpg",
							description:
								"bianco fresco, tannino leggero ed elegante",
							sizes: [],
							feat: {
								year: 2016,
								grape: "70% nebbiolo, 30% nespolina",
								origin: "piemonte",
								alcohol: 15,
								classification: "IGT",
							},
							allergens: [],
						},
					],
				},
				{
					name: "bevande",
					img: "/imgs/dishes/bibite.jpg",
					items: [
						{
							id: 21,
							visible: true,
							type: 1,
							name: "coca cola",
							price: 1.2,
							img: "/imgs/dishes/coca-cola.jpg",
							description:
								"da sempre è la bevanda dal gusto fresco e inconfondibile",
							sizes: [
								{
									name: "lattina 33cl",
									price: 1.2,
									default: true,
								},
								{
									name: "bottiglia 1l",
									price: 2.4,
									default: false,
								},
								{
									name: "bottiglia maxi 2l",
									price: 3.1,
									default: false,
								},
							],
						},
						{
							id: 22,
							visible: true,
							type: 1,
							name: "coca cola zero",
							price: 1.4,
							img: "/imgs/dishes/cola-zero.jpg",
							description:
								"zero calorie! la versione senza zuccheri dell'iconica bevanda",
							sizes: [
								{
									name: "lattina 33cl",
									price: 1.4,
									default: true,
								},
								{
									name: "bottiglia 1l",
									price: 2.6,
									default: false,
								},
								{
									name: "bottiglia maxi 2l",
									price: 3.3,
									default: false,
								},
							],
						},
						{
							id: 23,
							visible: true,
							type: 1,
							name: "fanta orange",
							price: 0.7,
							img: "/imgs/dishes/fanta.jpg",
							description:
								"bevanda con succo di arance 100% italiane",
							sizes: [
								{
									name: "lattina 33cl",
									price: 0.7,
									default: true,
								},
								{
									name: "bottiglia 1l",
									price: 1.3,
									default: false,
								},
							],
						},
						{
							id: 24,
							visible: true,
							type: 1,
							name: "acqua naturale",
							price: 0.5,
							img: "/imgs/dishes/acqua.jpg",
							description:
								"fresca dal sapore naturale e dissetante",
							sizes: [
								{
									name: "bottiglia piccola 33cl",
									price: 0.5,
									default: true,
								},
								{
									name: "bottiglia 1l",
									price: 1,
									default: false,
								},
							],
						},
						{
							id: 25,
							visible: true,
							type: 1,
							name: "acqua minerale",
							price: 0.5,
							img: "/imgs/dishes/acqua-minerale.jpg",
							description:
								"fresca dal sapore frizzante e leggero",
							sizes: [
								{
									name: "bottiglia piccola 33cl",
									price: 0.5,
									default: true,
								},
								{
									name: "bottiglia 1l",
									price: 1,
									default: false,
								},
							],
						},
					],
				},
				{
					name: "dolci",
					img: "/imgs/dishes/dolci.jpg",
					items: [
						{
							id: 28,
							visible: true,
							type: 0,
							name: "fantasia di cioccolato",
							price: 4.3,
							img: "/imgs/dishes/torta-cioccolato.jpg",
							people: 1,
							description:
								"una fantasia tutta da scoprire con il sapore del cioccolato più intenso",
							ingredients: {
								leadings: [
									{
										name: "cioccolato fondente",
										frozen: false,
									},
									{
										name: "cannella",
										frozen: false,
									},
									{
										name: "uova",
										frozen: false,
									},
									{
										name: "burro",
										frozen: false,
									},
									{
										name: "latte",
										frozen: false,
									},
									{
										name: "farina tipo 0",
										frozen: false,
									},
								],
								replacements: [],
								optionals: [],
							},
							allergens: [{ id: 5, name: "latte e derivati" }],
						},
					],
				},
				// { name: "insalate", img: "", items: [] },
				// { name: "frutta", img: "", items: [] },
				// { name: "amari", img: "", items: [] },
				// { name: "caffetteria", img: "", items: [] },
				// { name: "aperitivi", img: "", items: [] },
			],
		},
	],
};
