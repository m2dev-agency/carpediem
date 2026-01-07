export const locations = [
  {
    id: 1,
    name: "Montesilvano",
    address: "Corso Umberto I, 450",
    coords: { lat: 42.51, lng: 14.15 },
  },
  {
    id: 2,
    name: "Villa Raspa",
    address: "Via Italia, 22",
    coords: { lat: 42.44, lng: 14.18 },
  },
  {
    id: 3,
    name: "L'Aquila",
    address: "Piazza Duomo, 12",
    coords: { lat: 42.35, lng: 13.40 },
  },
  {
    id: 4,
    name: "Roseto",
    address: "Lungomare Trieste, 8",
    coords: { lat: 42.67, lng: 14.01 },
  },
];

export const menuCategories = [
  { id: "classiche", label: "Classiche" },
  { id: "gourmet", label: "Gourmet" },
  { id: "stagionali", label: "Stagionali" },
];

export const pizzas = [
  {
    id: 1,
    name: "Margherita DOP",
    category: "classiche",
    price: 8,
    description: "Pomodoro San Marzano, Mozzarella di Bufala, Basilico fresco, Olio EVO.",
    allergens: ["Glutine", "Lattosio"],
    pairing: "Birra Lager o Vino Rosato",
  },
  {
    id: 2,
    name: "Diavola",
    category: "classiche",
    price: 9,
    description: "Pomodoro, Fior di latte, Spianata piccante, Olio piccante.",
    allergens: ["Glutine", "Lattosio"],
    pairing: "Birra IPA",
  },
  {
    id: 3,
    name: "Tartufata",
    category: "gourmet",
    price: 14,
    description: "Crema di tartufo, Fior di latte, Salsiccia, Funghi porcini.",
    allergens: ["Glutine", "Lattosio"],
    pairing: "Vino Rosso strutturato",
  },
  {
    id: 4,
    name: "Pistacchio & Mortadella",
    category: "gourmet",
    price: 15,
    description: "Fior di latte, Pesto di pistacchio, Mortadella IGP, Granella di pistacchio.",
    allergens: ["Glutine", "Lattosio", "Frutta a guscio"],
    pairing: "Birra Blanche",
  },
  {
    id: 5,
    name: "Zucca & Guanciale",
    category: "stagionali",
    price: 13,
    description: "Crema di zucca, Provola affumicata, Guanciale croccante, Pepe nero.",
    allergens: ["Glutine", "Lattosio"],
    pairing: "Vino Bianco aromatico",
  },
];

export const storyIngredients = [
  {
    id: 1,
    title: "Mix di 5 cereali nobili",
    description: "Una miscela segreta per un impasto leggero e digeribile.",
    image: "dough", // Placeholder key
  },
  {
    id: 2,
    title: "San Marzano DOP",
    description: "Pomodoro schiacciato a mano, dolce e poco acido.",
    image: "sauce",
  },
  {
    id: 3,
    title: "Filiera corta",
    description: "Mozzarella e fior di latte dai migliori caseifici locali.",
    image: "cheese",
  },
  {
    id: 4,
    title: "Topping Gourmet",
    description: "Ingredienti selezionati con cura per esaltare ogni morso.",
    image: "toppings",
  },
  {
    id: 5,
    title: "Il tocco finale",
    description: "Basilico fresco e un filo d'olio a crudo.",
    image: "basil",
  },
];
