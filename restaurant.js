module.exports = {
	restaurant: {
		id: 1,
		plan: "pro", //potrebbe anche essere un codice
		name: "la bocca di bacco",
		address: "via della bottega",
		addressNum: 22,
		city: "bologna",
		short: "bo",
		zipcode: "40100",
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
							price: "7,00",
							img: "/imgs/dishes/zucchine.jpg",
							people: 2,
							description:
								"Antipasti leggeri ma gustosi con ingredienti semplici",
							ingredients: [
								"zucchine",
								"prosciutto cotto",
								"formaggio philadelphia",
							],
							allergens: ["latte"],
						},
						{
							id: 2,
							name: "cheddar",
							price: "6,20",
							img: "/imgs/dishes/cheddar.jpg",
							people: 2,
							description:
								"Il Cheddar è un tipico formaggio di origine inglese dal sapore deciso e ricco di tradizione",
							ingredients: ["formaggio stagionato"],
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
							price: "9,50",
							img: "/imgs/dishes/puttanesca.jpg",
							people: 1,
							timerange: { min: 12, max: 20 },
							description:
								"Gli spaghetti alla puttanesca sono un primo piatto tipico della cucina napoletana, detto anche semplicemente aulive e chiapparielle",
							ingredients: [
								"pasta",
								"sugo a base di pomodoro",
								"olive nere",
								"aglio",
								"olio d'oliva",
								"capperi",
								"origano",
							],
							allergens: ["glutine", "uova", "solfiti"],
						},
						{
							id: 4,
							name: "patate ripiene del conte",
							price: "12,00",
							img: "/imgs/dishes/potato-skins.jpg",
							people: 2,
							timerange: { min: 18, max: 30 },
							description:
								"Le patate ripiene sono un antica ricetta di contadini che fa uso di elementi semplici e tramandata da generazioni",
							ingredients: [
								"patate",
								"formaggio fuso",
								"pomodoro",
								"pancetta",
								"olio santo",
							],
							allergens: ["latte", "uova"],
						},
						{
							id: 5,
							name: "risotto alla viareggina",
							price: "10,54",
							img: "/imgs/dishes/risotto-viareggina.jpg",
							people: 2,
							timerange: { min: 16, max: 24 },
							freezed: true,
							description:
								"Risotto a base di frutti di mare fatto con tutta l'antica tradizione di Viareggio in Toscana",
							ingredients: [
								"riso ribe",
								"pomodoro",
								"olio d'oliva",
								"prezzemolo",
								"calamari",
								"totani",
								"gamberetti",
								"aglio",
								"peperoncino",
							],
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
							price: "7,00",
							img: "/imgs/dishes/scaloppine.jpg",
							people: 1,
							timerange: { min: 8, max: 12 },
							description:
								"Classica ricetta per cucinare la carne di vitello. Un secondo piatto di carne leggero ma gustoso e che mette d'accordo tutta la famiglia",
							ingredients: [
								"carne di vitello",
								"farina",
								"olio d'oliva",
								"burro",
								"sale",
								"aglio",
								"limone",
								"pepe nero",
								"prezzemolo",
							],
							allergens: ["glutine, latte"],
						},
						{
							id: 7,
							name: "rollè di melanzana",
							price: "8,20",
							img: "/imgs/dishes/melanzane.jpg",
							people: 1,
							timerange: { min: 10, max: 15 },
							description:
								"Le melanzane sono uno degli ortaggi più amati dell’estate ed adatte anche ai vegani",
							ingredients: [
								"melanzana",
								"pomodoro",
								"formaggio",
								"olio d'oliva",
								"sale",
							],
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
							price: "4,00",
							img: "/imgs/dishes/pizza-margherita.jpg",
							people: 1,
							timerange: { min: 10, max: 15 },
							description:
								"Pizza semplice e gustosa tipica della tradizione italiana e simbolo in tutto il mondo",
							ingredients: [
								"salsa pomodoro",
								"mozzarella",
								"foglie di basilico",
							],
							allergens: ["glutine, latte"],
						},
						{
							id: 9,
							name: "pizza capricciosa",
							price: "6,50",
							img: "/imgs/dishes/pizza-capricciosa.jpg",
							people: 1,
							freezed: true,
							timerange: { min: 10, max: 15 },
							description:
								"La pizza capricciosa è una pizza tipica della cucina italiana",
							ingredients: [
								"salsa pomodoro",
								"mozzarella",
								"prosciutto cotto",
								"funghi",
								"olive",
								"carciofini",
							],
							allergens: ["glutine, latte", "solfiti"],
						},
						{
							id: 10,
							name: "pizza crudaiola",
							price: "5,50",
							img: "/imgs/dishes/crudaiola.jpg",
							people: 1,
							freezed: false,
							timerange: { min: 8, max: 13 },
							description:
								"La pizza crudaiola è una pizza con sapori della natura italiana ",
							ingredients: [
								"salsa pomodoro",
								"mozzarella",
								"grana a scaglie",
								"rucola",
								"pomodorini",
							],
							allergens: ["glutine"],
						},
						{
							id: 11,
							name: "pizza ai quattro formaggi",
							price: "6,00",
							img: "/imgs/dishes/4-formaggi.jpg",
							people: 1,
							freezed: false,
							timerange: { min: 10, max: 16 },
							description:
								"La pizza ai quattro formaggi è una pizza con sapori tipici della cucina italiana",
							ingredients: [
								"mozzarella",
								"grana",
								"gorgonzola",
								"mascarpone",
								"briè",
							],
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
							price: "14,00",
							img: "/imgs/dishes/carni.jpg",
							people: 4,
							timerange: { min: 12, max: 20 },
							description:
								"Pizza semplice e gustosa tipica della tradizione italiana e simbolo in tutto il mondo",
							ingredients: [
								"carne",
								"rosmarino",
								"patate",
								"sale",
								"olio",
							],
							allergens: [],
						},
					],
				},
				{ name: "insalate", img: "", items: [] },
				{ name: "frutta", img: "", items: [] },
				{ name: "dolci", img: "", items: [] },
				{ name: "vini", img: "", items: [] },
				{ name: "amari", img: "", items: [] },
				{ name: "caffetteria", img: "", items: [] },
				{ name: "bevande", img: "", items: [] },
				{ name: "aperitivi", img: "", items: [] },
				{ name: "specialità della casa", img: "", items: [] },
			],
		},
	],
};
