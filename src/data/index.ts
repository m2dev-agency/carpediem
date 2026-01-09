// ==========================================
// LOCATIONS
// ==========================================
export const locations = [
  {
    id: 1,
    name: "Chieti",
    address: "Via Arniense, 208",
    coords: { lat: 42.35, lng: 14.17 },
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
    promo: {
      title: "Carta degli Oli",
      description: "Acquista 1 bottiglia d'olio, ti offriamo la focaccia e assaggi altre 2 tipologie d'Olio EVO Premium",
      badge: "ESCLUSIVO",
    },
  },
  {
    id: 2,
    name: "Montesilvano",
    address: "Corso Umberto I, 450",
    coords: { lat: 42.51, lng: 14.15 },
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
    promo: {
      title: "Sfiziosità di Mare",
      description: "Esclusiva Montesilvano: Primi piatti e specialità di mare freschi ogni giorno",
      badge: "ESCLUSIVO",
    },
  },
  {
    id: 3,
    name: "Villa Raspa",
    address: "Via Italia, 22",
    coords: { lat: 42.44, lng: 14.18 },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    promo: {
      title: "Cantina d'Autore",
      description: "Esclusiva Villa Raspa: Selezione vini d'Abruzzo e Gin Bar con oltre 10 etichette premium",
      badge: "ESCLUSIVO",
    },
  },
  {
    id: 4,
    name: "Roseto",
    address: "Lungomare Trieste, 8",
    coords: { lat: 42.67, lng: 14.01 },
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
    promo: {
      title: "Carta degli Oli",
      description: "Acquista 1 bottiglia d'olio, ti offriamo la focaccia e assaggi altre 2 tipologie d'Olio EVO Premium",
      badge: "ESCLUSIVO",
    },
  },
  {
    id: 5,
    name: "L'Aquila",
    address: "Viale Corrado IV, 38",
    coords: { lat: 42.35, lng: 13.39 },
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1974&auto=format&fit=crop",
    promo: {
      title: "Carta degli Oli",
      description: "Acquista 1 bottiglia d'olio, ti offriamo la focaccia e assaggi altre 2 tipologie d'Olio EVO Premium",
      badge: "ESCLUSIVO",
    },
  },
];

// ==========================================
// MENU CATEGORIES (espanso per Chieti)
// ==========================================
export const menuCategories = [
  { id: "tradizionali", label: "Tradizionali" },
  { id: "cornicioni", label: "Cornicioni Ripieni" },
  { id: "storiche", label: "Storiche" },
  { id: "collezione2025", label: "Collezione 2025" },
  { id: "padellini", label: "Padellini" },
  { id: "ruotadicarro", label: "Ruota di Carro" },
  { id: "glutenfree", label: "Gluten Free" },
  { id: "fritti", label: "Fritti" },
  { id: "taglieri", label: "Taglieri" },
  { id: "carni", label: "Carni" },
  { id: "primi", label: "Primi Piatti" },
  { id: "sfiziosita", label: "Sfiziosità di Mare" },
  { id: "vini", label: "Cantina Vini" },
  { id: "cocktails", label: "Gin & Distillati" },
  { id: "bevande", label: "Bevande" },
];

// ==========================================
// TYPES
// ==========================================
export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  priceNote?: string; // es. "l'etto", "+€2 semi-integrale"
  description: string;
  allergens: string[];
  pairing?: string;
  isVegan?: boolean;
  isNew?: boolean;
}

export interface LocationMenu {
  pizzas: MenuItem[];
  specials: { name: string; description: string; price: number }[];
  oils?: { brand: string; items: string[] }[];
}

// ==========================================
// CHIETI MENU (ID: 1) - MENU COMPLETO
// ==========================================
const chietiMenu: LocationMenu = {
  pizzas: [
    // ===== TRADIZIONALI =====
    { id: 1, name: "Marinara", category: "tradizionali", price: 5.00, description: "Pomodoro, aglio rosso di Sulmona, origano, basilico, olio evo blend", allergens: ["Glutine"], pairing: "Vino Bianco secco" },
    { id: 2, name: "Margherita", category: "tradizionali", price: 6.50, description: "Pomodoro, fiordilatte, parmigiano reggiano, basilico, olio evo blend", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 3, name: "Margherita DOP", category: "tradizionali", price: 9.00, description: "Pomodoro, mozzarella di bufala, parmigiano reggiano, basilico, olio evo blend", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 4, name: "Capricciosa", category: "tradizionali", price: 10.00, description: "Pomodoro, fiordilatte, funghi freschi, salame Napoli, cotto, carciofini, olive taggiasche", allergens: ["Glutine", "Lattosio"], pairing: "Birra Rossa" },
    { id: 5, name: "Ripieno DOP", category: "tradizionali", price: 10.00, priceNote: "Forno o Fritto", description: "Ricotta di bufala, fiordilatte, prosciutto cotto, salame Napoli, pepe, pomodoro", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 6, name: "Carrettiera", category: "tradizionali", price: 10.00, description: "Fiordilatte, provola, friarielli, salsiccia a punta di coltello, parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Birra Artigianale" },
    { id: 7, name: "Margalice", category: "tradizionali", price: 10.00, description: "Mozzarella di bufala, pomodorini del piennolo gialli/rossi, alici, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 8, name: "5 Formaggi e Fonduta", category: "tradizionali", price: 10.00, description: "Fiordilatte, brie, Emmental, parmigiano, gorgonzola, fonduta di pecorino", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosso strutturato" },
    { id: 9, name: "Ortolana", category: "tradizionali", price: 10.00, description: "Base focaccia con verdure di stagione e olio evo blend", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 10, name: "Topolino", category: "tradizionali", price: 10.00, description: "Bianca fiordilatte, wurstel e patatine", allergens: ["Glutine", "Lattosio"], pairing: "Bibita" },

    // ===== CORNICIONI RIPIENI =====
    { id: 20, name: "Regina Margherita", category: "cornicioni", price: 12.00, description: "Margherita con bufala DOP, cornicione ripieno di ricotta di bufala DOP", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 21, name: "Diavola", category: "cornicioni", price: 12.00, description: "Margherita con ventricina, cornicione ripieno di ricotta di bufala", allergens: ["Glutine", "Lattosio"], pairing: "Birra IPA" },
    { id: 22, name: "Boscaiola", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Base: fiordilatte, provola, porcini, champignon, salsiccia", allergens: ["Glutine", "Lattosio"], pairing: "Barolo" },
    { id: 23, name: "Margot", category: "cornicioni", price: 12.00, description: "Fiordilatte, sugo amatriciano, guanciale croccante, ripieno ricotta di bufala", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano d'Abruzzo" },
    { id: 24, name: "Antica Reale di Atessa", category: "cornicioni", price: 14.00, description: "Ripieno ricotta/fiordilatte/lardo nero. Uscita: conciato romano, fichi fermentati", allergens: ["Glutine", "Lattosio"], pairing: "Vino Passito" },
    { id: 25, name: "Aristocratica", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Centro: funghi, fiordilatte, provola, cotto, parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Brunello" },
    { id: 26, name: "Martina Franca", category: "cornicioni", price: 14.00, description: "Ripieno mousse ricotta/funghi. Centro: fiordilatte, provola, parmigiano, capocollo, rucola", allergens: ["Glutine", "Lattosio"], pairing: "Primitivo" },
    { id: 27, name: "Bella Spagnola", category: "cornicioni", price: 15.00, description: "Ripieno mousse ricotta/chorizo iberico. Centro: bianca fiordilatte, patanegra, bufala", allergens: ["Glutine", "Lattosio"], pairing: "Rioja" },

    // ===== STORICHE =====
    { id: 30, name: "Brontadella 2.0", category: "storiche", price: 12.00, description: "Bufala, mortadella IGP, mousse ricotta, pistacchi, pesto pistacchio", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Birra Blanche" },
    { id: 31, name: "Tirolese 2.0", category: "storiche", price: 12.00, description: "Fiordilatte, provola, tartufo nero, speck Alto Adige, noci pecan", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Gewürztraminer" },
    { id: 32, name: "Crudo di Angus", category: "storiche", price: 13.00, description: "Bufala, rucola, crudo di angus affumicato, polvere d'arancia", allergens: ["Glutine", "Lattosio"], pairing: "Champagne" },
    { id: 33, name: "Primavera", category: "storiche", price: 10.00, description: "Fiordilatte, rucola, crudo di Parma 18 mesi, scaglie Parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 34, name: "Gricia", category: "storiche", price: 12.00, description: "Fiordilatte, crema pecorino, pepe, guanciale, fonduta pecorino", allergens: ["Glutine", "Lattosio"], pairing: "Cesanese" },
    { id: 35, name: "Stella", category: "storiche", price: 15.00, description: "Forma di stella 5 gusti. Uscita: rucola, crudo, parmigiano, bufala", allergens: ["Glutine", "Lattosio"], pairing: "Spumante Brut" },
    { id: 36, name: "Nerano a punta di coltello", category: "storiche", price: 13.00, description: "Vellutata zucchine, bufala, salsiccia, chips parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Fiano" },
    { id: 37, name: "A Scanno", category: "storiche", price: 12.00, description: "Fiordilatte, melanzane, salsiccia, scaglie ricotta scorza nera", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },
    { id: 38, name: "Polpo Lardiato", category: "storiche", price: 16.00, description: "Friarielli, lardo, stracciatella, polpo arrosto, polvere peperone dolce", allergens: ["Glutine", "Lattosio", "Molluschi"], pairing: "Vermentino" },
    { id: 39, name: "Selvaggia 2.1", category: "storiche", price: 15.00, description: "Bufala, rucola, salmone rosso selvaggio, fonduta parmigiano 24 mesi", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Champagne Rosé" },
    { id: 40, name: "Marechiaro", category: "storiche", price: 12.00, description: "Provola, tonno fresco, cipolla, scaglie grana pecora, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Greco di Tufo" },

    // ===== COLLEZIONE 2025 =====
    { id: 50, name: "Zucchine e Pancetta", category: "collezione2025", price: 13.00, description: "Fiordilatte, 3 consistenze zucchine, pancetta maialino abruzzese", allergens: ["Glutine", "Lattosio"], pairing: "Trebbiano", isNew: true },
    { id: 51, name: "Summer Ventricina", category: "collezione2025", price: 15.00, description: "Pomodoro, burrata, ventricina vastese", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo", isNew: true },
    { id: 52, name: "La Fresca", category: "collezione2025", price: 14.00, description: "Rucola, crudo Parma, stracciatella, pomodorini conditi", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco", isNew: true },
    { id: 53, name: "Tre Formaggi di Bufala", category: "collezione2025", price: 15.00, description: "Camembert bufala, taleggio bufala, blue bufala, Gregoriano", allergens: ["Glutine", "Lattosio"], pairing: "Vino Passito", isNew: true },
    { id: 54, name: "Alice in The Wonderland", category: "collezione2025", price: 15.00, description: "Fiori di zucca, pomodorino, Alici del Cantabrico, stracciatella, liquirizia", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Riesling", isNew: true },
    { id: 55, name: "Crudo, Burrata e Tarallo", category: "collezione2025", price: 15.00, description: "Mozzarella di bufala, crudo, burrata, pomodoro fresco, taralli", allergens: ["Glutine", "Lattosio"], pairing: "Rosato Pugliese", isNew: true },

    // ===== PADELLINI (Lievito Madre Vivo) =====
    { id: 60, name: "Pizz e Foje", category: "padellini", price: 15.00, description: "Vegana, crema di mais, verdure strascinate, peperone dolce Altino", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 61, name: "Limonando con Alice", category: "padellini", price: 15.00, description: "Acciughe Cantabrico, stracciata, liquirizia Atri, limone candito", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 62, name: "Giù di Tonno", category: "padellini", price: 15.00, description: "Maionese tonnata, tartare tonno crudo, rucola, cipolla agrodolce", allergens: ["Glutine", "Pesce", "Uova"], pairing: "Verdicchio" },
    { id: 63, name: "Diversamente Margherita", category: "padellini", price: 15.00, description: "Sandwich ripieno di mozzarella, sopra pomodoro e stracciatella", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 64, name: "Sandwich Ventricina", category: "padellini", price: 15.00, description: "Ripieno mozzarella, sopra tartare ventricina, stracciata", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },
    { id: 65, name: "Angus e Gelato", category: "padellini", price: 15.00, description: "Ripieno mozzarella, sopra fonduta, rucola, crudo Angus, gelato parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Barolo" },

    // ===== RUOTA DI CARRO (Ø 36 cm) =====
    { id: 70, name: "Maritata", category: "ruotadicarro", price: 8.50, description: "Metà margherita, metà marinara", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 71, name: "Margherita Ruota", category: "ruotadicarro", price: 8.50, description: "Classica margherita formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 72, name: "Margherita di Bufala Ruota", category: "ruotadicarro", price: 12.00, description: "Con mozzarella di bufala DOP, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 73, name: "Salsiccia e Friarielli Ruota", category: "ruotadicarro", price: 12.00, description: "Provola, salsiccia, friarielli e pepe, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Aglianico" },
    { id: 74, name: "Filetto Ruota", category: "ruotadicarro", price: 10.00, description: "Bianca bufala, filetti di pomodorini e basilico, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vermentino" },

    // ===== GLUTEN FREE =====
    { id: 80, name: "Marinara GF", category: "glutenfree", price: 9.00, description: "Pomodoro, aglio rosso di Sulmona, origano, basilico, olio evo blend", allergens: [], pairing: "Vino Bianco" },
    { id: 81, name: "Margherita GF", category: "glutenfree", price: 10.00, description: "Pomodoro, fiordilatte, parmigiano reggiano, basilico", allergens: ["Lattosio"], pairing: "Birra GF" },
    { id: 82, name: "Margherita DOP GF", category: "glutenfree", price: 12.00, description: "Pomodoro, mozzarella di bufala, basilico", allergens: ["Lattosio"], pairing: "Vino Rosato" },
    { id: 83, name: "Brontadella GF", category: "glutenfree", price: 15.00, description: "Bufala, mortadella IGP, mousse ricotta, pistacchi", allergens: ["Lattosio", "Frutta a guscio"], pairing: "Birra Blanche GF" },
    { id: 84, name: "Diavola di Bufala GF", category: "glutenfree", price: 15.00, description: "Bufala, ventricina piccante", allergens: ["Lattosio"], pairing: "Birra IPA GF" },
    { id: 85, name: "Salsiccia e Friarielli GF", category: "glutenfree", price: 14.00, description: "Provola, salsiccia, friarielli, pepe", allergens: ["Lattosio"], pairing: "Montepulciano" },

    // ===== FRITTI (Antipasti) =====
    { id: 90, name: "Frittatina Classica", category: "fritti", price: 3.50, description: "Frittatina di pasta napoletana classica", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 91, name: "Frittatina Carbonara", category: "fritti", price: 4.00, description: "Frittatina con guanciale, uovo e pecorino", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 92, name: "Frittatina Cacio e Pepe", category: "fritti", price: 4.00, description: "Frittatina con pecorino romano e pepe nero", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 93, name: "Palla di Riso al Ragù", category: "fritti", price: 3.50, description: "Riso, ragù di scottona, mozzarella filante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 94, name: "Palla di Riso Special", category: "fritti", price: 4.00, description: "Versione gourmet con ingredienti premium", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 95, name: "Crocchè di Patate", category: "fritti", price: 3.00, description: "Patate e provola, fritto croccante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 96, name: "Montanarina Classica", category: "fritti", price: 3.00, description: "Pomodoro, parmigiano, bocconcino di bufala e basilico", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 97, name: "Tris di Montanarine", category: "fritti", price: 9.00, description: "Tre montanarine con gusti assortiti", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 98, name: "Formaggio Fritto", category: "fritti", price: 7.00, description: "Pastella allo zafferano e agrodolce di zafferano", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 99, name: "Chips al Cucchiaio", category: "fritti", price: 4.50, description: "Chips di patata croccanti", allergens: ["Glutine"], pairing: "" },
    { id: 100, name: "Chips Speziate", category: "fritti", price: 5.00, description: "Chips con mix di spezie aromatiche", allergens: ["Glutine"], pairing: "" },
    { id: 101, name: "Chips di Patata Dolce", category: "fritti", price: 5.00, description: "Chips di patata dolce americana", allergens: ["Glutine"], pairing: "" },

    // ===== TAGLIERI =====
    { id: 110, name: "Fresco di Bufala", category: "taglieri", price: 14.00, description: "Bocconcini, mozzarella, mousse di ricotta e stracciata, tutto di bufala", allergens: ["Lattosio"], pairing: "Prosecco" },
    { id: 111, name: "Selezione Salumi e Formaggi", category: "taglieri", price: 20.00, description: "Selezione di provenienza locale e nazionale", allergens: ["Lattosio"], pairing: "Montepulciano" },
    { id: 112, name: "Tagliere di Pata Negra", category: "taglieri", price: 10.00, priceNote: "l'etto", description: "Prosciutto di pura razza iberica 50% bellota", allergens: [], pairing: "Rioja" },

    // ===== CARNI =====
    { id: 120, name: "Cuberol Argentina", category: "carni", price: 8.50, priceNote: "l'etto, min 300g", description: "Taglio pregiato argentino, senza osso", allergens: [], pairing: "Malbec" },
    { id: 121, name: "Cuberol Phenomena", category: "carni", price: 7.50, priceNote: "l'etto, min 300g", description: "Selezione Polonia, senza osso", allergens: [], pairing: "Cabernet" },
    { id: 122, name: "Controfiletto Black Angus USA", category: "carni", price: 10.00, priceNote: "l'etto, min 300g", description: "Black Angus americano, senza osso", allergens: [], pairing: "Brunello" },
    { id: 123, name: "Phenomena Selezione Rubino", category: "carni", price: 8.50, priceNote: "l'etto, min 600g-1kg", description: "Con osso, selezione Polonia", allergens: [], pairing: "Barolo" },
    { id: 124, name: "Vaca Granda", category: "carni", price: 8.00, priceNote: "l'etto, min 600g-1kg", description: "Con osso, Italia", allergens: [], pairing: "Amarone" },
    { id: 125, name: "Angus Irlanda", category: "carni", price: 7.50, priceNote: "l'etto, min 600g-1kg", description: "Con osso, Irlanda", allergens: [], pairing: "Chianti Classico" },
    { id: 126, name: "Hamburger di Chianina", category: "carni", price: 14.00, description: "Servito con panino artigianale", allergens: ["Glutine"], pairing: "Morellino" },
    { id: 127, name: "Hamburger di Wagyu Australia", category: "carni", price: 15.00, description: "Wagyu australiano con panino artigianale", allergens: ["Glutine"], pairing: "Shiraz" },

    // ===== BEVANDE =====
    { id: 130, name: "Acqua Panna / San Pellegrino", category: "bevande", price: 2.50, priceNote: "0,75cl", description: "Acqua naturale o frizzante", allergens: [], pairing: "" },
    { id: 131, name: "Coca Cola", category: "bevande", price: 3.00, description: "Bibita classica", allergens: [], pairing: "" },
    { id: 132, name: "Chinotto Di Febo", category: "bevande", price: 3.00, description: "Chinotto artigianale abruzzese", allergens: [], pairing: "" },
    { id: 133, name: "Aranciata Di Febo", category: "bevande", price: 3.00, description: "Aranciata artigianale abruzzese", allergens: [], pairing: "" },
    { id: 134, name: "Gassosa Di Febo", category: "bevande", price: 3.00, description: "Gassosa artigianale abruzzese", allergens: [], pairing: "" },
    { id: 135, name: "Caffè", category: "bevande", price: 1.50, description: "Espresso", allergens: [], pairing: "" },
  ],
  specials: [
    { name: "Degustazione Oli Premium", description: "Acquista 1 bottiglia, assaggia 3 tipologie di Olio EVO + focaccia omaggio", price: 0 },
    { name: "Impasto Semi-integrale", description: "Farina tipo 2 con crusca, disponibile su tutte le pizze", price: 2 },
  ],
  oils: [
    { brand: "Marina Palusci (Pianella)", items: ["Uomo di Ferro - Monocultivar Dritta", "Alchimia - Monocultivar Leccio del Corno", "Rinascimento - Dritta Cru 550 anni", "Ioil - Monocultivar Intosso", "Iblend - Mix Premium"] },
    { brand: "Geraci", items: ["Nocellara del Belice DOP Biologica"] },
    { brand: "Oli Aromatizzati", items: ["Agrumolio Limone", "Agrumolio Arancia", "Erbolio Salvia/Timo/Rosmarino", "Erbolio Peperoncino", "Erbolio Basilico"] },
    { brand: "Mascianantonio", items: ["Cucco - Monocultivar Intosso (Slow Food)", "Crognale", "Perconti"] },
    { brand: "Esclusiva Carpe Diem", items: ["Monocultivar Tortiglione - 500 bottiglie numerate"] },
    { brand: "Tre Regine", items: ["Coratina in purezza"] },
  ],
};

// ==========================================
// MONTESILVANO MENU (ID: 2) - MENU COMPLETO
// ==========================================
const montesilvanoMenu: LocationMenu = {
  pizzas: [
    // ===== TRADIZIONALI =====
    { id: 1, name: "Marinara", category: "tradizionali", price: 5.00, description: "Pomodoro, aglio rosso Sulmona, origano, basilico, olio evo", allergens: ["Glutine"], pairing: "Vino Bianco" },
    { id: 2, name: "Margherita", category: "tradizionali", price: 6.50, description: "Pomodoro, fiordilatte, parmigiano, basilico, olio evo", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 3, name: "Margherita DOP", category: "tradizionali", price: 9.00, description: "Pomodoro, bufala, parmigiano, basilico, olio evo", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 4, name: "Capricciosa", category: "tradizionali", price: 10.00, description: "Pomodoro, fiordilatte, funghi, salame, cotto, carciofini, olive", allergens: ["Glutine", "Lattosio"], pairing: "Birra Rossa" },
    { id: 5, name: "Ripieno DOP", category: "tradizionali", price: 10.00, priceNote: "Forno o Fritto", description: "Ricotta bufala, fiordilatte, cotto, salame, pepe, pomodoro", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 6, name: "Carrettiera", category: "tradizionali", price: 10.00, description: "Fiordilatte, provola, friarielli, salsiccia, parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Birra Artigianale" },
    { id: 7, name: "Margalice", category: "tradizionali", price: 10.00, description: "Bufala, pomodorini del piennolo, alici, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 8, name: "5 Formaggi e Fonduta", category: "tradizionali", price: 10.00, description: "Fiordilatte, brie, Emmental, parmigiano, gorgonzola, fonduta", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosso strutturato" },
    { id: 9, name: "Ortolana", category: "tradizionali", price: 10.00, description: "Base focaccia con verdure di stagione", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 10, name: "Topolino", category: "tradizionali", price: 10.00, description: "Bianca fiordilatte, wurstel e patatine", allergens: ["Glutine", "Lattosio"], pairing: "Bibita" },

    // ===== CORNICIONI RIPIENI =====
    { id: 20, name: "Regina Margherita", category: "cornicioni", price: 12.00, description: "Margherita con bufala DOP, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 21, name: "Diavola", category: "cornicioni", price: 12.00, description: "Margherita con ventricina, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Birra IPA" },
    { id: 22, name: "Boscaiola", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Centro: funghi, salsiccia, porcini", allergens: ["Glutine", "Lattosio"], pairing: "Barolo" },
    { id: 23, name: "Margot", category: "cornicioni", price: 12.00, description: "Fiordilatte, sugo amatriciano, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano d'Abruzzo" },
    { id: 24, name: "Antica Reale di Atessa", category: "cornicioni", price: 14.00, description: "Ripieno ricotta/lardo. Uscita: conciato romano, fichi, erbolio", allergens: ["Glutine", "Lattosio"], pairing: "Vino Passito" },
    { id: 25, name: "Aristocratica", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Centro: cotto, funghi", allergens: ["Glutine", "Lattosio"], pairing: "Brunello" },
    { id: 26, name: "Martina Franca", category: "cornicioni", price: 14.00, description: "Ripieno mousse ricotta/funghi. Uscita: capocollo, scaglie parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Primitivo" },
    { id: 27, name: "Bella Spagnola", category: "cornicioni", price: 15.00, description: "Ripieno mousse ricotta/chorizo. Uscita: patanegra", allergens: ["Glutine", "Lattosio"], pairing: "Rioja" },

    // ===== STORICHE =====
    { id: 30, name: "Brontadella 2.0", category: "storiche", price: 12.00, description: "Bufala, mortadella IGP, mousse ricotta, pistacchi", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Birra Blanche" },
    { id: 31, name: "Tirolese 2.0", category: "storiche", price: 12.00, description: "Fiordilatte, tartufo nero, speck Alto Adige, noci pecan", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Gewürztraminer" },
    { id: 32, name: "Crudo di Angus", category: "storiche", price: 13.00, description: "Bufala, rucola, crudo angus, polvere arancia", allergens: ["Glutine", "Lattosio"], pairing: "Champagne" },
    { id: 33, name: "Primavera", category: "storiche", price: 10.00, description: "Fiordilatte, rucola, crudo Parma 18 mesi", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 34, name: "Gricia", category: "storiche", price: 12.00, description: "Fiordilatte, crema pecorino, guanciale, pepe", allergens: ["Glutine", "Lattosio"], pairing: "Cesanese" },
    { id: 35, name: "Stella", category: "storiche", price: 15.00, description: "5 ripieni diversi. Uscita: rucola, crudo, bufala", allergens: ["Glutine", "Lattosio"], pairing: "Spumante Brut" },
    { id: 36, name: "Nerano a punta di coltello", category: "storiche", price: 13.00, description: "Vellutata zucchine, bufala, salsiccia, chips parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Fiano" },
    { id: 37, name: "A Scanno", category: "storiche", price: 12.00, description: "Fiordilatte, melanzane, salsiccia, ricotta scorza nera", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },
    { id: 38, name: "Polpo Lardiato", category: "storiche", price: 16.00, description: "Friarielli, lardo, stracciatella, polpo arrosto", allergens: ["Glutine", "Lattosio", "Molluschi"], pairing: "Vermentino" },
    { id: 39, name: "Selvaggia 2.1", category: "storiche", price: 15.00, description: "Bufala, rucola, salmone selvaggio, cipolla agrodolce", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Champagne Rosé" },
    { id: 40, name: "Marechiaro", category: "storiche", price: 12.00, description: "Provola, tonno fresco, cipolla, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Greco di Tufo" },

    // ===== COLLEZIONE 2025 =====
    { id: 50, name: "Angus e Gelato al Parmigiano", category: "collezione2025", price: 15.00, description: "Bianca bufala, rucola, angus, gelato salato al parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Barolo", isNew: true },
    { id: 51, name: "Zucchine e Pancetta", category: "collezione2025", price: 13.00, description: "Zucchine (3 consistenze), pancetta, parmigiano pecora", allergens: ["Glutine", "Lattosio"], pairing: "Trebbiano", isNew: true },
    { id: 52, name: "Summer Ventricina", category: "collezione2025", price: 15.00, description: "Pomodoro, burrata, ventricina vastese", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo", isNew: true },
    { id: 53, name: "La Fresca", category: "collezione2025", price: 14.00, description: "Rucola, crudo Parma, stracciatella, pomodorini", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco", isNew: true },
    { id: 54, name: "Tre Formaggi di Bufala", category: "collezione2025", price: 15.00, description: "Camembert, taleggio, blue di bufala e Gregoriano", allergens: ["Glutine", "Lattosio"], pairing: "Vino Passito", isNew: true },
    { id: 55, name: "Alice in The Wonderland", category: "collezione2025", price: 15.00, description: "Fiori di zucca, alici Cantabrico, stracciatella, liquirizia", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Riesling", isNew: true },
    { id: 56, name: "Crudo, Burrata e Tarallo", category: "collezione2025", price: 15.00, description: "Bianca bufala. Uscita: crudo, burrata, taralli", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Rosato Pugliese", isNew: true },

    // ===== PADELLINI (Lievito Madre Vivo) =====
    { id: 60, name: "Pizz e Foje", category: "padellini", price: 15.00, description: "Vegana, crema di mais, verdure strascinate", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 61, name: "Limonando con Alice", category: "padellini", price: 15.00, description: "Acciughe, stracciata, liquirizia, limone candito", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 62, name: "Giù di Tonno", category: "padellini", price: 15.00, description: "Maionese tonnata, tartare tonno, rucola", allergens: ["Glutine", "Pesce", "Uova"], pairing: "Verdicchio" },
    { id: 63, name: "Diversamente Margherita", category: "padellini", price: 15.00, description: "Sandwich ripieno di mozzarella, sopra pomodoro", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 64, name: "Sandwich Ventricina", category: "padellini", price: 15.00, description: "Ripieno mozzarella, sopra tartare ventricina", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },

    // ===== RUOTA DI CARRO (Ø 36 cm) =====
    { id: 70, name: "Maritata", category: "ruotadicarro", price: 8.50, description: "Metà margherita, metà marinara", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 71, name: "Margherita Ruota", category: "ruotadicarro", price: 8.50, description: "Classica margherita formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 72, name: "Margherita di Bufala Ruota", category: "ruotadicarro", price: 12.00, description: "Con mozzarella di bufala DOP, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 73, name: "Salsiccia e Friarielli Ruota", category: "ruotadicarro", price: 12.00, description: "Provola, salsiccia, friarielli, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Aglianico" },
    { id: 74, name: "Bianca Provola e Pepe Ruota", category: "ruotadicarro", price: 10.00, description: "Provola e pepe nero, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vino Bianco" },
    { id: 75, name: "Filetto Ruota", category: "ruotadicarro", price: 12.00, description: "Bianca bufala, filetti di pomodorini, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vermentino" },

    // ===== GLUTEN FREE =====
    { id: 80, name: "Marinara GF", category: "glutenfree", price: 9.00, description: "Pomodoro, aglio rosso Sulmona, origano, basilico", allergens: [], pairing: "Vino Bianco" },
    { id: 81, name: "Margherita GF", category: "glutenfree", price: 10.00, description: "Pomodoro, fiordilatte, parmigiano, basilico", allergens: ["Lattosio"], pairing: "Birra GF" },
    { id: 82, name: "Margherita Bufala GF", category: "glutenfree", price: 12.00, description: "Pomodoro, mozzarella di bufala, basilico", allergens: ["Lattosio"], pairing: "Vino Rosato" },
    { id: 83, name: "Brontadella GF", category: "glutenfree", price: 15.00, description: "Bufala, mortadella IGP, mousse ricotta, pistacchi", allergens: ["Lattosio", "Frutta a guscio"], pairing: "Birra Blanche GF" },
    { id: 84, name: "Diavola di Bufala GF", category: "glutenfree", price: 15.00, description: "Bufala, ventricina piccante", allergens: ["Lattosio"], pairing: "Birra IPA GF" },

    // ===== FRITTI (Antipasti) =====
    { id: 90, name: "Frittatina Classica", category: "fritti", price: 3.50, description: "Frittatina di pasta napoletana classica", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 91, name: "Frittatina di Stagione", category: "fritti", price: 4.00, description: "Frittatina con ingredienti di stagione", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 92, name: "Frittatina Carbonara", category: "fritti", price: 4.00, description: "Frittatina con guanciale, uovo e pecorino", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 93, name: "Frittatina Cacio e Pepe", category: "fritti", price: 4.00, description: "Frittatina con pecorino romano e pepe nero", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 94, name: "Palla di Riso al Ragù", category: "fritti", price: 3.50, description: "Riso, ragù di scottona, mozzarella filante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 95, name: "Palla di Riso Special", category: "fritti", price: 4.00, description: "Versione gourmet con ingredienti premium", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 96, name: "Crocchè di Patate", category: "fritti", price: 3.00, description: "Patate e provola, fritto croccante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 97, name: "Montanarina Classica", category: "fritti", price: 3.00, description: "Pomodoro, parmigiano, bufala, basilico", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 98, name: "Tris di Montanarine", category: "fritti", price: 9.00, description: "Tre montanarine con 3 gusti", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 99, name: "Formaggio Fritto", category: "fritti", price: 7.00, description: "Pastella allo zafferano e agrodolce", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 100, name: "Chips Speziate", category: "fritti", price: 5.00, description: "Chips con mix di spezie aromatiche", allergens: ["Glutine"], pairing: "" },
    { id: 101, name: "Chips al Cucchiaio", category: "fritti", price: 4.50, description: "Chips di patata croccanti", allergens: ["Glutine"], pairing: "" },
    { id: 102, name: "Chips di Patata Dolce", category: "fritti", price: 4.00, description: "Chips di patata dolce americana", allergens: ["Glutine"], pairing: "" },

    // ===== TAGLIERI =====
    { id: 110, name: "Fresco di Bufala", category: "taglieri", price: 14.00, description: "Bocconcini, mozzarella, mousse ricotta, stracciata bufala", allergens: ["Lattosio"], pairing: "Prosecco" },
    { id: 111, name: "Bufala Cheese Therapy", category: "taglieri", price: 14.00, description: "Camembert, stracciatella, cremoso, taleggio e gorgonzola (tutto bufala)", allergens: ["Lattosio"], pairing: "Vino Passito" },
    { id: 112, name: "Selezione Salumi e Formaggi", category: "taglieri", price: 20.00, description: "Provenienza locale e nazionale", allergens: ["Lattosio"], pairing: "Montepulciano" },
    { id: 113, name: "Tagliere di Pata Negra", category: "taglieri", price: 10.00, priceNote: "l'etto", description: "Prosciutto razza iberica 50% bellota", allergens: [], pairing: "Rioja" },

    // ===== CARNI (Hamburger) =====
    { id: 120, name: "Hamburger di Bufala", category: "carni", price: 14.00, description: "Servito con panino. Contorno a scelta: chips, insalata, friarielli", allergens: ["Glutine", "Lattosio"], pairing: "Birra Artigianale" },
    { id: 121, name: "Hamburger di Chianina", category: "carni", price: 14.00, description: "Servito con panino. Contorno a scelta: chips, insalata, friarielli", allergens: ["Glutine"], pairing: "Morellino" },
    { id: 122, name: "Hamburger di Wagyu Australia", category: "carni", price: 15.00, description: "Wagyu australiano con panino. Contorno a scelta", allergens: ["Glutine"], pairing: "Shiraz" },

    // ===== PRIMI PIATTI (Esclusiva Montesilvano) =====
    { id: 140, name: "Linguina alle Vongole", category: "primi", price: 16.00, description: "Linguina o calamarata con vongole veraci", allergens: ["Glutine", "Molluschi"], pairing: "Vermentino" },
    { id: 141, name: "Linguina allo Scoglio", category: "primi", price: 16.00, description: "Linguina o calamarata con frutti di mare misti", allergens: ["Glutine", "Molluschi", "Crostacei"], pairing: "Falanghina" },
    { id: 142, name: "Tonnarello all'Amatriciana", category: "primi", price: 12.00, description: "Tonnarello con guanciale, pomodoro e pecorino", allergens: ["Glutine", "Lattosio"], pairing: "Cesanese" },
    { id: 143, name: "Tonnarello alla Carbonara", category: "primi", price: 12.00, description: "Tonnarello con guanciale, uovo e pecorino", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "Frascati" },

    // ===== SFIZIOSITÀ DI MARE (Esclusiva Montesilvano) =====
    { id: 150, name: "Soutè Imperiale", category: "sfiziosita", price: 20.00, description: "Cozze, vongole e altri frutti di mare in soutè", allergens: ["Molluschi"], pairing: "Vermentino" },
    { id: 151, name: "Pepata di Cozze e Taralli", category: "sfiziosita", price: 18.00, description: "Cozze in pepata servite con taralli", allergens: ["Glutine", "Molluschi"], pairing: "Greco di Tufo" },
    { id: 152, name: "Scampi allo Scottadito", category: "sfiziosita", price: 14.00, description: "Scampi freschi alla griglia", allergens: ["Crostacei"], pairing: "Chardonnay" },
    { id: 153, name: "Scamponi all'Arrabbiata Bianca", category: "sfiziosita", price: 10.00, priceNote: "l'etto", description: "Scamponi piccanti in salsa bianca", allergens: ["Crostacei"], pairing: "Verdicchio" },
    { id: 154, name: "Frittura di Calamari", category: "sfiziosita", price: 15.00, description: "Calamari freschi fritti", allergens: ["Glutine", "Molluschi"], pairing: "Trebbiano" },
    { id: 155, name: "Frittura Mista di Mare", category: "sfiziosita", price: 20.00, description: "Scampi, calamari e gamberi rossi fritti", allergens: ["Glutine", "Molluschi", "Crostacei"], pairing: "Prosecco" },

    // ===== BEVANDE =====
    { id: 130, name: "Acqua Panna / San Pellegrino", category: "bevande", price: 2.50, priceNote: "0,75cl", description: "Acqua naturale o frizzante", allergens: [], pairing: "" },
    { id: 131, name: "Coca Cola / Lurisia / Estathé", category: "bevande", price: 3.00, description: "Bibite classiche", allergens: [], pairing: "" },
    { id: 132, name: "Caffè / Deca", category: "bevande", price: 1.50, description: "Espresso con cioccolatino Domori", allergens: [], pairing: "" },
    { id: 133, name: "Amari", category: "bevande", price: 2.50, description: "Capo, Averna, Brancamenta e altri", allergens: [], pairing: "" },
    { id: 134, name: "Rum", category: "bevande", price: 4.00, description: "Distillato premium", allergens: [], pairing: "" },
    { id: 135, name: "Brandy", category: "bevande", price: 5.00, description: "Distillato premium", allergens: [], pairing: "" },
    { id: 136, name: "Whisky", category: "bevande", price: 6.00, description: "Distillato premium", allergens: [], pairing: "" },
  ],
  specials: [
    { name: "Carta degli Oli Premium", description: "Acquista 1 bottiglia d'olio, ti offriamo la focaccia e assaggi altre 2 tipologie", price: 0 },
    { name: "Impasto Evolutivo Semi-integrale", description: "Farina tipo 2 con crusca, disponibile su tutte le pizze", price: 2 },
    { name: "Lu Cavaliere", description: "Vasetto di peperoncino artigianale", price: 3 },
  ],
  oils: [
    { brand: "Marina Palusci (Pianella)", items: ["Uomo di Ferro - Monocultivar Dritta", "Alchimia - Monocultivar Leccio del Corno", "Rinascimento - Dritta Cru piante secolari", "Intosso - Monocultivar Intosso", "Iblend - Mix Dritta, Intosso, Leccio, Frantoio"] },
    { brand: "Geraci", items: ["Nocellara del Belice DOP Biologica"] },
    { brand: "Oli Aromatizzati", items: ["Agrumolio Limone/Arancia", "Erbolio Salvia/Timo/Rosmarino", "Erbolio Peperoncino", "Erbolio Basilico"] },
    { brand: "Mascianantonio", items: ["Cucco - Monocultivar Intosso", "Crognale", "Perconti"] },
    { brand: "Esclusiva Carpe Diem", items: ["Monocultivar Tortiglione - 500 bottiglie numerate"] },
    { brand: "Tre Regine", items: ["Coratina in purezza"] },
  ],
};

// ==========================================
// VILLA RASPA MENU (ID: 3) - MENU COMPLETO
// ==========================================
const villaRaspaMenu: LocationMenu = {
  pizzas: [
    // ===== TRADIZIONALI =====
    { id: 1, name: "Marinara", category: "tradizionali", price: 5.00, description: "Pomodoro, aglio rosso Sulmona, origano, basilico, olio evo", allergens: ["Glutine"], pairing: "Vino Bianco" },
    { id: 2, name: "Margherita", category: "tradizionali", price: 6.50, description: "Pomodoro, fiordilatte, parmigiano, basilico, olio evo", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 3, name: "Margherita DOP", category: "tradizionali", price: 9.00, description: "Pomodoro, bufala, parmigiano, basilico, olio evo", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 4, name: "Capricciosa", category: "tradizionali", price: 10.00, description: "Pomodoro, fiordilatte, funghi, salame, cotto, carciofini, olive", allergens: ["Glutine", "Lattosio"], pairing: "Birra Rossa" },
    { id: 5, name: "Ripieno DOP", category: "tradizionali", price: 10.00, priceNote: "Forno o Fritto", description: "Ricotta bufala, fiordilatte, cotto, salame, pepe, pomodoro", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 6, name: "Carrettiera", category: "tradizionali", price: 10.00, description: "Fiordilatte, provola, friarielli, salsiccia, parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Birra Artigianale" },
    { id: 7, name: "Margalice", category: "tradizionali", price: 10.00, description: "Bufala, pomodorini del piennolo, alici, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 8, name: "5 Formaggi e Fonduta", category: "tradizionali", price: 10.00, description: "Fiordilatte, brie, Emmental, parmigiano, gorgonzola, fonduta", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosso strutturato" },
    { id: 9, name: "Ortolana", category: "tradizionali", price: 10.00, description: "Base focaccia con verdure di stagione", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 10, name: "Topolino", category: "tradizionali", price: 10.00, description: "Bianca fiordilatte, wurstel e patatine", allergens: ["Glutine", "Lattosio"], pairing: "Bibita" },

    // ===== CORNICIONI RIPIENI =====
    { id: 20, name: "Regina Margherita", category: "cornicioni", price: 12.00, description: "Margherita con bufala, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 21, name: "Diavola", category: "cornicioni", price: 12.00, description: "Margherita con ventricina, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Birra IPA" },
    { id: 22, name: "Boscaiola", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Centro: funghi, salsiccia", allergens: ["Glutine", "Lattosio"], pairing: "Barolo" },
    { id: 23, name: "Margot", category: "cornicioni", price: 12.00, description: "Fiordilatte, sugo amatriciano, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano d'Abruzzo" },
    { id: 24, name: "Antica Reale di Atessa", category: "cornicioni", price: 14.00, description: "Ripieno ricotta/lardo. Uscita: conciato romano, fichi", allergens: ["Glutine", "Lattosio"], pairing: "Vino Passito" },
    { id: 25, name: "Aristocratica", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Centro: cotto, funghi", allergens: ["Glutine", "Lattosio"], pairing: "Brunello" },
    { id: 26, name: "Martina Franca", category: "cornicioni", price: 14.00, description: "Ripieno mousse ricotta. Uscita: capocollo, scaglie parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Primitivo" },
    { id: 27, name: "Bella Spagnola", category: "cornicioni", price: 15.00, description: "Ripieno mousse ricotta/chorizo. Uscita: patanegra", allergens: ["Glutine", "Lattosio"], pairing: "Rioja" },

    // ===== STORICHE =====
    { id: 30, name: "Brontadella 2.0", category: "storiche", price: 12.00, description: "Bufala, mortadella, mousse ricotta, pistacchi", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Birra Blanche" },
    { id: 31, name: "Tirolese 2.0", category: "storiche", price: 12.00, description: "Fiordilatte, tartufo nero, speck Alto Adige, noci pecan", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Gewürztraminer" },
    { id: 32, name: "Crudo di Angus", category: "storiche", price: 13.00, description: "Bufala, rucola, crudo angus, polvere arancia", allergens: ["Glutine", "Lattosio"], pairing: "Champagne" },
    { id: 33, name: "Primavera", category: "storiche", price: 10.00, description: "Fiordilatte, rucola, crudo Parma 18 mesi", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 34, name: "Gricia", category: "storiche", price: 12.00, description: "Fiordilatte, crema pecorino, guanciale, pepe", allergens: ["Glutine", "Lattosio"], pairing: "Cesanese" },
    { id: 35, name: "Stella", category: "storiche", price: 15.00, description: "5 ripieni diversi. Uscita: rucola, crudo, bufala", allergens: ["Glutine", "Lattosio"], pairing: "Spumante Brut" },
    { id: 36, name: "Nerano a punta di coltello", category: "storiche", price: 13.00, description: "Vellutata zucchine, bufala, salsiccia, chips parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Fiano" },
    { id: 37, name: "A Scanno", category: "storiche", price: 12.00, description: "Fiordilatte, melanzane, salsiccia, ricotta scorza nera", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },
    { id: 38, name: "Polpo Lardiato", category: "storiche", price: 16.00, description: "Friarielli, lardo, stracciatella, polpo arrosto", allergens: ["Glutine", "Lattosio", "Molluschi"], pairing: "Vermentino" },
    { id: 39, name: "Selvaggia 2.1", category: "storiche", price: 15.00, description: "Bufala, rucola, salmone selvaggio, fonduta", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Champagne Rosé" },
    { id: 40, name: "Marechiaro", category: "storiche", price: 12.00, description: "Provola, tonno fresco, cipolla, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Greco di Tufo" },

    // ===== COLLEZIONE 2025 =====
    { id: 50, name: "Zucchine e Pancetta", category: "collezione2025", price: 13.00, description: "Zucchine (3 consistenze), pancetta maialino abruzzese", allergens: ["Glutine", "Lattosio"], pairing: "Trebbiano", isNew: true },
    { id: 51, name: "Summer Ventricina", category: "collezione2025", price: 15.00, description: "Pomodoro, burrata, ventricina vastese", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo", isNew: true },
    { id: 52, name: "La Fresca", category: "collezione2025", price: 14.00, description: "Rucola, crudo Parma, stracciatella, pomodorini", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco", isNew: true },
    { id: 53, name: "Alice in The Wonderland", category: "collezione2025", price: 15.00, description: "Fiori di zucca, alici Cantabrico, stracciatella, liquirizia", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Riesling", isNew: true },
    { id: 54, name: "Crudo, Burrata e Tarallo", category: "collezione2025", price: 15.00, description: "Bianca bufala, crudo, burrata, taralli", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Rosato Pugliese", isNew: true },

    // ===== PADELLINI (Lievito Madre Vivo) =====
    { id: 60, name: "Pizz e Foje", category: "padellini", price: 15.00, description: "Vegana, crema di mais, verdure strascinate", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 61, name: "Limonando con Alice", category: "padellini", price: 15.00, description: "Acciughe, stracciata, liquirizia, limone candito", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 62, name: "Giù di Tonno", category: "padellini", price: 15.00, description: "Maionese tonnata, tartare tonno, rucola", allergens: ["Glutine", "Pesce", "Uova"], pairing: "Verdicchio" },
    { id: 63, name: "Diversamente Margherita", category: "padellini", price: 15.00, description: "Sandwich ripieno di mozzarella, sopra pomodoro", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 64, name: "Sandwich Ventricina", category: "padellini", price: 15.00, description: "Ripieno mozzarella, sopra tartare ventricina", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },
    { id: 65, name: "Angus e Gelato", category: "padellini", price: 15.00, description: "Ripieno mozzarella, sopra fonduta, rucola, crudo Angus", allergens: ["Glutine", "Lattosio"], pairing: "Barolo" },

    // ===== RUOTA DI CARRO (Ø 36 cm) =====
    { id: 70, name: "Maritata", category: "ruotadicarro", price: 8.50, description: "Metà margherita, metà marinara", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 71, name: "Margherita Ruota", category: "ruotadicarro", price: 8.50, description: "Classica margherita formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 72, name: "Margherita di Bufala Ruota", category: "ruotadicarro", price: 12.00, description: "Con mozzarella di bufala DOP, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 73, name: "Filetto Ruota", category: "ruotadicarro", price: 12.00, description: "Bianca bufala, filetti di pomodorini, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vermentino" },
    { id: 74, name: "Bianca Ruota", category: "ruotadicarro", price: 10.00, description: "Base bianca, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vino Bianco" },

    // ===== GLUTEN FREE =====
    { id: 80, name: "Marinara GF", category: "glutenfree", price: 9.00, description: "Pomodoro, aglio rosso Sulmona, origano, basilico", allergens: [], pairing: "Vino Bianco" },
    { id: 81, name: "Margherita GF", category: "glutenfree", price: 10.00, description: "Pomodoro, fiordilatte, parmigiano, basilico", allergens: ["Lattosio"], pairing: "Birra GF" },
    { id: 82, name: "Margherita DOP GF", category: "glutenfree", price: 12.00, description: "Pomodoro, mozzarella di bufala, basilico", allergens: ["Lattosio"], pairing: "Vino Rosato" },
    { id: 83, name: "Brontadella GF", category: "glutenfree", price: 15.00, description: "Bufala, mortadella IGP, mousse ricotta, pistacchi", allergens: ["Lattosio", "Frutta a guscio"], pairing: "Birra Blanche GF" },
    { id: 84, name: "Diavola di Bufala GF", category: "glutenfree", price: 15.00, description: "Bufala, ventricina piccante", allergens: ["Lattosio"], pairing: "Birra IPA GF" },
    { id: 85, name: "Salsiccia e Friarielli GF", category: "glutenfree", price: 14.00, description: "Provola, salsiccia, friarielli", allergens: ["Lattosio"], pairing: "Montepulciano" },

    // ===== FRITTI (Antipasti) =====
    { id: 90, name: "Frittatina Classica", category: "fritti", price: 3.50, description: "Frittatina di pasta napoletana classica", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 91, name: "Frittatina Carbonara", category: "fritti", price: 4.00, description: "Frittatina con guanciale, uovo e pecorino", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 92, name: "Frittatina Cacio e Pepe", category: "fritti", price: 4.00, description: "Frittatina con pecorino romano e pepe nero", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 93, name: "Palla di Riso al Ragù", category: "fritti", price: 3.50, description: "Riso, ragù di scottona, mozzarella filante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 94, name: "Crocchè di Patate", category: "fritti", price: 3.00, description: "Patate e provola, fritto croccante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 95, name: "Montanarina Classica", category: "fritti", price: 3.00, description: "Pomodoro, parmigiano, bufala, basilico", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 96, name: "Tris di Montanarine", category: "fritti", price: 9.00, description: "Tre montanarine con 3 gusti", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 97, name: "Formaggio Fritto", category: "fritti", price: 7.00, description: "Pastella allo zafferano", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 98, name: "Chips al Cucchiaio", category: "fritti", price: 4.50, description: "Chips di patata croccanti", allergens: ["Glutine"], pairing: "" },
    { id: 99, name: "Chips Speziate", category: "fritti", price: 5.00, description: "Chips con mix di spezie aromatiche", allergens: ["Glutine"], pairing: "" },
    { id: 100, name: "Chips di Patata Dolce", category: "fritti", price: 5.00, description: "Chips di patata dolce americana", allergens: ["Glutine"], pairing: "" },

    // ===== TAGLIERI =====
    { id: 110, name: "Fresco di Bufala", category: "taglieri", price: 14.00, description: "Bocconcini, mozzarella, mousse ricotta, stracciata bufala", allergens: ["Lattosio"], pairing: "Prosecco" },
    { id: 111, name: "Selezione Salumi e Formaggi", category: "taglieri", price: 20.00, description: "Provenienza locale e nazionale", allergens: ["Lattosio"], pairing: "Montepulciano" },
    { id: 112, name: "Tagliere di Pata Negra", category: "taglieri", price: 10.00, priceNote: "l'etto", description: "Prosciutto razza iberica 50% bellota", allergens: [], pairing: "Rioja" },

    // ===== CARNI (Hamburger) =====
    { id: 120, name: "Hamburger di Chianina", category: "carni", price: 14.00, description: "Servito con panino. Contorno a scelta", allergens: ["Glutine"], pairing: "Morellino" },
    { id: 121, name: "Hamburger di Wagyu Australia", category: "carni", price: 15.00, description: "Wagyu australiano con panino. Contorno a scelta", allergens: ["Glutine"], pairing: "Shiraz" },

    // ===== CANTINA VINI =====
    // Bianchi d'Abruzzo
    { id: 160, name: "Pecorino IGP Sessanta Passi", category: "vini", price: 20.00, description: "Marramiero - Bianco d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    { id: 161, name: "Dama Trebbiano", category: "vini", price: 18.00, description: "Marramiero - Bianco d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    { id: 162, name: "Cococciola Terre di Chieti", category: "vini", price: 22.00, description: "Tenuta Ulisse - Bianco d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    { id: 163, name: "Trebbiano Casabianca", category: "vini", price: 15.00, description: "San Lorenzo - Bianco d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    { id: 164, name: "Pecorino Biologico Tullum", category: "vini", price: 19.00, description: "Feudo Antico - Bianco d'Abruzzo Bio", allergens: ["Solfiti"], pairing: "" },
    // Cerasuoli e Rosati
    { id: 165, name: "Dama Cerasuolo", category: "vini", price: 22.00, description: "Marramiero - Cerasuolo d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    { id: 166, name: "Sette Rose Cerasuolo", category: "vini", price: 20.00, description: "Di Sipio - Cerasuolo d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    { id: 167, name: "Malandrino Cerasuolo", category: "vini", price: 22.00, description: "Cataldi Madonna - Cerasuolo d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    { id: 168, name: "Rosato Biologico", category: "vini", price: 18.00, description: "Feudo Antico - Rosato Bio", allergens: ["Solfiti"], pairing: "" },
    { id: 169, name: "Rosato San Lorenzo", category: "vini", price: 18.00, description: "San Lorenzo - Rosato d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    // Rossi d'Abruzzo
    { id: 170, name: "Incanto Montepulciano", category: "vini", price: 25.00, description: "Marramiero - Rosso d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    { id: 171, name: "Inferi Montepulciano Riserva", category: "vini", price: 34.00, description: "Marramiero - Riserva d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    { id: 172, name: "Montepulciano DOC", category: "vini", price: 22.00, description: "Di Sipio - Rosso d'Abruzzo", allergens: ["Solfiti"], pairing: "" },
    // Bollicine
    { id: 173, name: "Franciacorta Brut", category: "vini", price: 33.00, description: "Ferghettina - Bollicine", allergens: ["Solfiti"], pairing: "" },
    { id: 174, name: "Rosato Spumante Brut", category: "vini", price: 18.00, description: "San Lorenzo - Bollicine", allergens: ["Solfiti"], pairing: "" },
    // Al Calice
    { id: 175, name: "Calice Pecorino", category: "vini", price: 3.50, description: "San Lorenzo - Al calice", allergens: ["Solfiti"], pairing: "" },
    { id: 176, name: "Calice Cerasuolo", category: "vini", price: 3.50, description: "San Lorenzo - Al calice", allergens: ["Solfiti"], pairing: "" },
    { id: 177, name: "Calice Montepulciano", category: "vini", price: 3.50, description: "San Lorenzo - Al calice", allergens: ["Solfiti"], pairing: "" },

    // ===== GIN & DISTILLATI =====
    // Gin
    { id: 180, name: "Gin Tonic Beefeater", category: "cocktails", price: 6.00, description: "Gin classico London Dry", allergens: [], pairing: "" },
    { id: 181, name: "Gin Tonic Bombay / Tanqueray / Gin Mare", category: "cocktails", price: 7.00, description: "Gin premium selection", allergens: [], pairing: "" },
    { id: 182, name: "Gin Tonic Beefeater 24 / Malfy / Hendrick's", category: "cocktails", price: 8.00, description: "Gin super premium", allergens: [], pairing: "" },
    { id: 183, name: "Gin Tonic Nordes Atlantic", category: "cocktails", price: 9.00, description: "Gin galiziano aromatico", allergens: [], pairing: "" },
    { id: 184, name: "Gin Tonic Muma", category: "cocktails", price: 13.00, description: "Gin italiano luxury", allergens: [], pairing: "" },
    // Rum
    { id: 185, name: "Zacapa 23 / El Dorado 12", category: "cocktails", price: 6.00, description: "Rum premium aged", allergens: [], pairing: "" },
    // Brandy
    { id: 186, name: "Cardenal Mendoza", category: "cocktails", price: 5.00, description: "Brandy de Jerez Solera Gran Reserva", allergens: [], pairing: "" },
    // Whisky
    { id: 187, name: "Johnny Walker / Jack Daniel's", category: "cocktails", price: 4.00, description: "Whisky classici", allergens: [], pairing: "" },

    // ===== BEVANDE =====
    { id: 130, name: "Acqua Panna / San Pellegrino", category: "bevande", price: 2.50, priceNote: "0,75cl", description: "Acqua naturale o frizzante", allergens: [], pairing: "" },
    { id: 131, name: "Coca Cola / Fanta / Sprite / Estathé", category: "bevande", price: 3.00, description: "Bibite classiche", allergens: [], pairing: "" },
    { id: 132, name: "Caffè / Deca", category: "bevande", price: 1.50, description: "Espresso", allergens: [], pairing: "" },
    { id: 133, name: "Genziana Toro", category: "bevande", price: 2.50, description: "Liquore tipico abruzzese Enrico Toro", allergens: [], pairing: "" },
    { id: 134, name: "Limoncello Toro", category: "bevande", price: 2.50, description: "Limoncello Enrico Toro", allergens: [], pairing: "" },
    { id: 135, name: "Ratafia Toro", category: "bevande", price: 2.50, description: "Liquore alle amarene Enrico Toro", allergens: [], pairing: "" },
    { id: 136, name: "Liquore Flares / Licuze", category: "bevande", price: 4.00, description: "Liquori premium Enrico Toro", allergens: [], pairing: "" },
    { id: 137, name: "Amaro Riservato", category: "bevande", price: 4.00, description: "Amaro premium Enrico Toro", allergens: [], pairing: "" },
  ],
  specials: [
    { name: "Carta degli Oli Premium", description: "Acquista 1 bottiglia d'olio, ti offriamo la focaccia e assaggi altre 2 tipologie", price: 0 },
    { name: "Impasto Semi-integrale", description: "Farina tipo 2 con crusca, disponibile su tutte le pizze", price: 2 },
    { name: "Lu Cavaliere", description: "Vasetto di peperoncino artigianale", price: 3 },
  ],
  oils: [
    { brand: "Marina Palusci (Pianella)", items: ["Uomo di Ferro - Monocultivar Dritta", "Alchimia - Monocultivar Leccio del Corno", "Rinascimento - Dritta Cru", "Ioil - Monocultivar Intosso", "Iblend - Mix Premium"] },
    { brand: "Geraci", items: ["Nocellara del Belice DOP Biologica"] },
    { brand: "Oli Aromatizzati", items: ["Agrumolio Limone/Arancia", "Erbolio Salvia/Timo/Rosmarino", "Erbolio Peperoncino", "Erbolio Basilico"] },
    { brand: "Mascianantonio", items: ["Cucco - Monocultivar Intosso (Slow Food)", "Crognale", "Perconti"] },
    { brand: "Esclusiva Carpe Diem", items: ["Monocultivar Tortiglione - 500 bottiglie numerate"] },
    { brand: "Tre Regine", items: ["Coratina in purezza"] },
  ],
};

// ==========================================
// ROSETO MENU (ID: 4) - MENU COMPLETO
// ==========================================
const rosetoMenu: LocationMenu = {
  pizzas: [
    // ===== TRADIZIONALI =====
    { id: 1, name: "Marinara", category: "tradizionali", price: 5.00, description: "Pomodoro, aglio rosso Sulmona, origano, basilico, olio evo", allergens: ["Glutine"], pairing: "Vino Bianco" },
    { id: 2, name: "Margherita", category: "tradizionali", price: 6.50, description: "Pomodoro, fiordilatte, parmigiano, basilico, olio evo", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 3, name: "Margherita DOP", category: "tradizionali", price: 9.00, description: "Pomodoro, bufala, parmigiano, basilico, olio evo", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 4, name: "Capricciosa", category: "tradizionali", price: 10.00, description: "Pomodoro, fiordilatte, funghi, salame, cotto, carciofini, olive", allergens: ["Glutine", "Lattosio"], pairing: "Birra Rossa" },
    { id: 5, name: "Ripieno DOP", category: "tradizionali", price: 10.00, priceNote: "Forno o Fritto", description: "Ricotta bufala, fiordilatte, cotto, salame, pepe, pomodoro", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 6, name: "Carrettiera", category: "tradizionali", price: 10.00, description: "Fiordilatte, provola, friarielli, salsiccia, parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Birra Artigianale" },
    { id: 7, name: "Margalice", category: "tradizionali", price: 10.00, description: "Bufala, pomodorini del piennolo, alici, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 8, name: "5 Formaggi e Fonduta", category: "tradizionali", price: 10.00, description: "Fiordilatte, brie, Emmental, parmigiano, gorgonzola, fonduta", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosso strutturato" },
    { id: 9, name: "Ortolana", category: "tradizionali", price: 10.00, description: "Base focaccia con verdure di stagione", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 10, name: "Topolino", category: "tradizionali", price: 10.00, description: "Bianca fiordilatte, wurstel e patatine", allergens: ["Glutine", "Lattosio"], pairing: "Bibita" },

    // ===== CORNICIONI RIPIENI =====
    { id: 20, name: "Regina Margherita", category: "cornicioni", price: 12.00, description: "Margherita con bufala, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 21, name: "Diavola", category: "cornicioni", price: 12.00, description: "Margherita con ventricina, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Birra IPA" },
    { id: 22, name: "Boscaiola", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Centro: funghi, salsiccia", allergens: ["Glutine", "Lattosio"], pairing: "Barolo" },
    { id: 23, name: "Margot", category: "cornicioni", price: 12.00, description: "Fiordilatte, sugo amatriciano, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano d'Abruzzo" },
    { id: 24, name: "Antica Reale di Atessa", category: "cornicioni", price: 14.00, description: "Ripieno ricotta/lardo. Uscita: conciato romano, fichi", allergens: ["Glutine", "Lattosio"], pairing: "Vino Passito" },
    { id: 25, name: "Aristocratica", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Centro: cotto, funghi", allergens: ["Glutine", "Lattosio"], pairing: "Brunello" },
    { id: 26, name: "Martina Franca", category: "cornicioni", price: 14.00, description: "Ripieno mousse ricotta. Uscita: capocollo, scaglie parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Primitivo" },
    { id: 27, name: "Bella Spagnola", category: "cornicioni", price: 15.00, description: "Ripieno mousse ricotta/chorizo. Uscita: patanegra", allergens: ["Glutine", "Lattosio"], pairing: "Rioja" },

    // ===== STORICHE =====
    { id: 30, name: "Brontadella 2.0", category: "storiche", price: 12.00, description: "Bufala, mortadella, mousse ricotta, pistacchi", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Birra Blanche" },
    { id: 31, name: "Tirolese 2.0", category: "storiche", price: 12.00, description: "Fiordilatte, tartufo nero, speck Alto Adige, noci pecan", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Gewürztraminer" },
    { id: 32, name: "Crudo di Angus", category: "storiche", price: 13.00, description: "Bufala, rucola, crudo angus, polvere arancia", allergens: ["Glutine", "Lattosio"], pairing: "Champagne" },
    { id: 33, name: "Primavera", category: "storiche", price: 10.00, description: "Fiordilatte, rucola, crudo Parma 18 mesi", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 34, name: "Gricia", category: "storiche", price: 12.00, description: "Fiordilatte, crema pecorino, guanciale, pepe", allergens: ["Glutine", "Lattosio"], pairing: "Cesanese" },
    { id: 35, name: "Stella", category: "storiche", price: 15.00, description: "5 ripieni diversi. Uscita: rucola, crudo, bufala", allergens: ["Glutine", "Lattosio"], pairing: "Spumante Brut" },
    { id: 36, name: "Nerano a punta di coltello", category: "storiche", price: 13.00, description: "Vellutata zucchine, bufala, salsiccia", allergens: ["Glutine", "Lattosio"], pairing: "Fiano" },
    { id: 37, name: "A Scanno", category: "storiche", price: 12.00, description: "Fiordilatte, melanzane, salsiccia, ricotta scorza nera", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },
    { id: 38, name: "Polpo Lardiato", category: "storiche", price: 16.00, description: "Friarielli, lardo, stracciatella, polpo arrosto", allergens: ["Glutine", "Lattosio", "Molluschi"], pairing: "Vermentino" },
    { id: 39, name: "Selvaggia 2.1", category: "storiche", price: 15.00, description: "Bufala, rucola, salmone selvaggio, fonduta", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Champagne Rosé" },
    { id: 40, name: "Marechiaro", category: "storiche", price: 12.00, description: "Provola, tonno fresco, cipolla, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Greco di Tufo" },

    // ===== COLLEZIONE 2025 =====
    { id: 50, name: "Zucchine e Pancetta", category: "collezione2025", price: 13.00, description: "Fiordilatte, zucchine, pancetta, parmigiano pecora", allergens: ["Glutine", "Lattosio"], pairing: "Trebbiano", isNew: true },
    { id: 51, name: "Summer Ventricina", category: "collezione2025", price: 15.00, description: "Pomodoro, burrata, ventricina vastese", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo", isNew: true },
    { id: 52, name: "La Fresca", category: "collezione2025", price: 14.00, description: "Rucola, crudo Parma, stracciatella, pomodorini", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco", isNew: true },
    { id: 53, name: "Alice in The Wonderland", category: "collezione2025", price: 15.00, description: "Fiori di zucca, alici Cantabrico, stracciatella, liquirizia", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Riesling", isNew: true },
    { id: 54, name: "Crudo, Burrata e Tarallo", category: "collezione2025", price: 15.00, description: "Bufala, crudo, burrata, taralli mandorlati", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Rosato Pugliese", isNew: true },

    // ===== PADELLINI (Lievito Madre Vivo) =====
    { id: 60, name: "Pizz e Foje", category: "padellini", price: 15.00, description: "Vegana, crema di mais, verdure strascinate, peperone dolce Altino", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 61, name: "Limonando con Alice", category: "padellini", price: 15.00, description: "Acciughe Cantabrico, stracciata, liquirizia Atri, limone candito", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 62, name: "Giù di Tonno", category: "padellini", price: 15.00, description: "Maionese tonnata, tartare tonno crudo, rucola, cipolla agrodolce", allergens: ["Glutine", "Pesce", "Uova"], pairing: "Verdicchio" },
    { id: 63, name: "Diversamente Margherita", category: "padellini", price: 15.00, description: "Sandwich ripieno di mozzarella, sopra pomodoro e stracciatella", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 64, name: "Sandwich Ventricina", category: "padellini", price: 15.00, description: "Ripieno mozzarella, sopra tartare ventricina, stracciata", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },
    { id: 65, name: "Angus e Gelato", category: "padellini", price: 15.00, description: "Ripieno mozzarella, sopra fonduta, rucola, crudo Angus, gelato parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Barolo" },

    // ===== RUOTA DI CARRO (Ø 36 cm) =====
    { id: 70, name: "Maritata", category: "ruotadicarro", price: 8.50, description: "Metà margherita, metà marinara", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 71, name: "Margherita Ruota", category: "ruotadicarro", price: 8.50, description: "Classica margherita formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 72, name: "Margherita di Bufala Ruota", category: "ruotadicarro", price: 12.00, description: "Con mozzarella di bufala DOP, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 73, name: "Salsiccia e Friarielli Ruota", category: "ruotadicarro", price: 12.00, description: "Provola, salsiccia, friarielli, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Aglianico" },
    { id: 74, name: "Filetto Ruota", category: "ruotadicarro", price: 10.00, description: "Bianca bufala, filetti di pomodorini, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vermentino" },

    // ===== GLUTEN FREE =====
    { id: 80, name: "Marinara GF", category: "glutenfree", price: 9.00, description: "Pomodoro, aglio rosso Sulmona, origano, basilico", allergens: [], pairing: "Vino Bianco" },
    { id: 81, name: "Margherita GF", category: "glutenfree", price: 10.00, description: "Pomodoro, fiordilatte, parmigiano, basilico", allergens: ["Lattosio"], pairing: "Birra GF" },
    { id: 82, name: "Margherita DOP GF", category: "glutenfree", price: 12.00, description: "Pomodoro, mozzarella di bufala, basilico", allergens: ["Lattosio"], pairing: "Vino Rosato" },
    { id: 83, name: "Brontadella GF", category: "glutenfree", price: 15.00, description: "Bufala, mortadella IGP, mousse ricotta, pistacchi", allergens: ["Lattosio", "Frutta a guscio"], pairing: "Birra Blanche GF" },
    { id: 84, name: "Diavola di Bufala GF", category: "glutenfree", price: 15.00, description: "Bufala, ventricina piccante", allergens: ["Lattosio"], pairing: "Birra IPA GF" },
    { id: 85, name: "Salsiccia e Friarielli GF", category: "glutenfree", price: 14.00, description: "Provola, salsiccia, friarielli", allergens: ["Lattosio"], pairing: "Montepulciano" },

    // ===== FRITTI (Antipasti) =====
    { id: 90, name: "Frittatina Classica", category: "fritti", price: 3.50, description: "Frittatina di pasta napoletana classica", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 91, name: "Frittatina Carbonara", category: "fritti", price: 4.00, description: "Frittatina con guanciale, uovo e pecorino", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 92, name: "Frittatina di Stagione", category: "fritti", price: 4.00, description: "Frittatina con ingredienti di stagione", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 93, name: "Palla di Riso al Ragù", category: "fritti", price: 3.50, description: "Riso, ragù di scottona, mozzarella filante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 94, name: "Crocchè di Patate", category: "fritti", price: 3.00, description: "Patate e provola, fritto croccante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 95, name: "Montanarina Classica", category: "fritti", price: 3.00, description: "Pomodoro, parmigiano, bufala, basilico", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 96, name: "Tris di Montanarine", category: "fritti", price: 9.00, description: "Tre montanarine con gusti assortiti", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 97, name: "Formaggio Fritto", category: "fritti", price: 7.00, description: "Pastella allo zafferano", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 98, name: "Chips al Cucchiaio", category: "fritti", price: 4.50, description: "Chips di patata croccanti", allergens: ["Glutine"], pairing: "" },
    { id: 99, name: "Chips Speziate", category: "fritti", price: 5.00, description: "Chips con mix di spezie aromatiche", allergens: ["Glutine"], pairing: "" },
    { id: 100, name: "Chips di Patata Dolce", category: "fritti", price: 5.00, description: "Chips di patata dolce americana", allergens: ["Glutine"], pairing: "" },

    // ===== TAGLIERI =====
    { id: 110, name: "Fresco di Bufala", category: "taglieri", price: 14.00, description: "Bocconcini, mozzarella, mousse ricotta, stracciata bufala", allergens: ["Lattosio"], pairing: "Prosecco" },
    { id: 111, name: "Selezione Salumi e Formaggi", category: "taglieri", price: 20.00, description: "Provenienza locale e nazionale", allergens: ["Lattosio"], pairing: "Montepulciano" },
    { id: 112, name: "Tagliere di Pata Negra", category: "taglieri", price: 10.00, priceNote: "l'etto", description: "Prosciutto razza iberica 50% bellota", allergens: [], pairing: "Rioja" },
    { id: 113, name: "Tagliere Misto", category: "taglieri", price: 18.00, description: "Salumi bovino, angus affumicato, picanha, BriSpeck", allergens: ["Lattosio"], pairing: "Vino Rosso" },

    // ===== CARNI (Hamburger) =====
    { id: 120, name: "Hamburger di Chianina", category: "carni", price: 14.00, description: "Servito con panino. Contorno a scelta: chips, friarielli, rucola, pachino e grana", allergens: ["Glutine"], pairing: "Morellino" },
    { id: 121, name: "Hamburger di Wagyu Australia", category: "carni", price: 15.00, description: "Wagyu australiano con panino. Contorno a scelta", allergens: ["Glutine"], pairing: "Shiraz" },

    // ===== BEVANDE =====
    { id: 130, name: "Acqua Panna / San Pellegrino", category: "bevande", price: 2.50, priceNote: "0,75cl", description: "Acqua naturale o frizzante", allergens: [], pairing: "" },
    { id: 131, name: "Coca Cola / Estathé", category: "bevande", price: 3.00, description: "Bibite classiche", allergens: [], pairing: "" },
    { id: 132, name: "Gazzosa Campli", category: "bevande", price: 3.00, description: "Gazzosa artigianale abruzzese", allergens: [], pairing: "" },
    { id: 133, name: "Caffè", category: "bevande", price: 1.50, description: "Espresso", allergens: [], pairing: "" },
    { id: 134, name: "Genziana Toro", category: "bevande", price: 2.50, description: "Liquore tipico abruzzese Enrico Toro", allergens: [], pairing: "" },
    { id: 135, name: "Limoncello Toro", category: "bevande", price: 2.50, description: "Limoncello Enrico Toro", allergens: [], pairing: "" },
    { id: 136, name: "Ratafia Toro", category: "bevande", price: 2.50, description: "Liquore alle amarene Enrico Toro", allergens: [], pairing: "" },
    { id: 137, name: "Liquore Flares / Licuze", category: "bevande", price: 4.00, description: "Liquori premium Enrico Toro", allergens: [], pairing: "" },
    { id: 138, name: "Amaro Riservato", category: "bevande", price: 4.00, description: "Amaro premium Enrico Toro", allergens: [], pairing: "" },
  ],
  specials: [
    { name: "Carta degli Oli Premium", description: "Acquista 1 bottiglia d'olio, ti offriamo la focaccia e assaggi altre 2 tipologie", price: 0 },
    { name: "Impasto Semi-integrale", description: "Farina tipo 2 con crusca, disponibile su tutte le pizze", price: 2 },
  ],
  oils: [
    { brand: "Marina Palusci (Pianella)", items: ["Uomo di Ferro - Monocultivar Dritta", "Alchimia - Monocultivar Leccio del Corno", "Rinascimento - Dritta Cru 550 anni"] },
    { brand: "Geraci", items: ["Nocellara del Belice DOP Biologica"] },
    { brand: "Mascianantonio", items: ["Cucco - Monocultivar Intosso", "Crognale", "Perconti"] },
  ],
};

// ==========================================
// L'AQUILA MENU (ID: 5) - MENU COMPLETO
// ==========================================
const laquilaMenu: LocationMenu = {
  pizzas: [
    // ===== TRADIZIONALI =====
    { id: 1, name: "Marinara", category: "tradizionali", price: 5.00, description: "Pomodoro, aglio rosso Sulmona, origano, basilico, olio evo", allergens: ["Glutine"], pairing: "Vino Bianco" },
    { id: 2, name: "Margherita", category: "tradizionali", price: 6.50, description: "Pomodoro, fiordilatte, parmigiano, basilico, olio evo", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 3, name: "Margherita DOP", category: "tradizionali", price: 9.00, description: "Pomodoro, bufala, parmigiano, basilico, olio evo", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 4, name: "Capricciosa", category: "tradizionali", price: 10.00, description: "Pomodoro, fiordilatte, funghi, salame, cotto, carciofini, olive", allergens: ["Glutine", "Lattosio"], pairing: "Birra Rossa" },
    { id: 5, name: "Ripieno DOP", category: "tradizionali", price: 10.00, priceNote: "Forno o Fritto", description: "Ricotta bufala, fiordilatte, cotto, salame, pepe, pomodoro", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 6, name: "Carrettiera", category: "tradizionali", price: 10.00, description: "Fiordilatte, provola, friarielli, salsiccia, parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Birra Artigianale" },
    { id: 7, name: "Margalice", category: "tradizionali", price: 10.00, description: "Bufala, pomodorini del piennolo, alici, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 8, name: "5 Formaggi e Fonduta", category: "tradizionali", price: 10.00, description: "Fiordilatte, brie, Emmental, parmigiano, gorgonzola, fonduta", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosso strutturato" },
    { id: 9, name: "Ortolana", category: "tradizionali", price: 10.00, description: "Base focaccia con verdure di stagione", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 10, name: "Topolino", category: "tradizionali", price: 10.00, description: "Bianca fiordilatte, wurstel e patatine", allergens: ["Glutine", "Lattosio"], pairing: "Bibita" },

    // ===== CORNICIONI RIPIENI =====
    { id: 20, name: "Regina Margherita", category: "cornicioni", price: 12.00, description: "Margherita con bufala, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 21, name: "Diavola", category: "cornicioni", price: 12.00, description: "Margherita con ventricina, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Birra IPA" },
    { id: 22, name: "Boscaiola", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Centro: funghi, salsiccia", allergens: ["Glutine", "Lattosio"], pairing: "Barolo" },
    { id: 23, name: "Margot", category: "cornicioni", price: 12.00, description: "Fiordilatte, sugo amatriciano, ripieno ricotta bufala", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano d'Abruzzo" },
    { id: 24, name: "Antica Reale di Atessa", category: "cornicioni", price: 14.00, description: "Ripieno ricotta/lardo. Uscita: conciato romano, fichi", allergens: ["Glutine", "Lattosio"], pairing: "Vino Passito" },
    { id: 25, name: "Aristocratica", category: "cornicioni", price: 12.00, description: "Ripieno mousse ricotta/tartufo. Centro: cotto, funghi", allergens: ["Glutine", "Lattosio"], pairing: "Brunello" },
    { id: 26, name: "Martina Franca", category: "cornicioni", price: 14.00, description: "Ripieno mousse ricotta. Uscita: capocollo, scaglie parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Primitivo" },
    { id: 27, name: "Bella Spagnola", category: "cornicioni", price: 15.00, description: "Ripieno mousse ricotta/chorizo. Uscita: patanegra", allergens: ["Glutine", "Lattosio"], pairing: "Rioja" },

    // ===== STORICHE =====
    { id: 30, name: "Brontadella 2.0", category: "storiche", price: 12.00, description: "Bufala, mortadella, mousse ricotta, pistacchi", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Birra Blanche" },
    { id: 31, name: "Tirolese 2.0", category: "storiche", price: 12.00, description: "Fiordilatte, tartufo nero, speck Alto Adige, noci pecan", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Gewürztraminer" },
    { id: 32, name: "Crudo di Angus", category: "storiche", price: 13.00, description: "Bufala, rucola, crudo angus, polvere arancia", allergens: ["Glutine", "Lattosio"], pairing: "Champagne" },
    { id: 33, name: "Primavera", category: "storiche", price: 10.00, description: "Fiordilatte, rucola, crudo Parma 18 mesi", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 34, name: "Gricia", category: "storiche", price: 12.00, description: "Fiordilatte, crema pecorino, guanciale, pepe", allergens: ["Glutine", "Lattosio"], pairing: "Cesanese" },
    { id: 35, name: "Stella", category: "storiche", price: 15.00, description: "5 ripieni diversi. Uscita: rucola, crudo, bufala", allergens: ["Glutine", "Lattosio"], pairing: "Spumante Brut" },
    { id: 36, name: "Nerano a punta di coltello", category: "storiche", price: 13.00, description: "Vellutata zucchine, bufala, salsiccia, chips parmigiano", allergens: ["Glutine", "Lattosio"], pairing: "Fiano" },
    { id: 37, name: "A Scanno", category: "storiche", price: 12.00, description: "Fiordilatte, melanzane, salsiccia, ricotta scorza nera", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },
    { id: 38, name: "Polpo Lardiato", category: "storiche", price: 16.00, description: "Friarielli, lardo, stracciatella, polpo arrosto", allergens: ["Glutine", "Lattosio", "Molluschi"], pairing: "Vermentino" },
    { id: 39, name: "Selvaggia 2.1", category: "storiche", price: 15.00, description: "Bufala, rucola, salmone selvaggio, fonduta", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Champagne Rosé" },
    { id: 40, name: "Marechiaro", category: "storiche", price: 12.00, description: "Provola, tonno fresco, cipolla, agrumolio limone", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Greco di Tufo" },

    // ===== COLLEZIONE 2025 =====
    { id: 50, name: "Zucchine e Pancetta", category: "collezione2025", price: 13.00, description: "Zucchine, pancetta maialino abruzzese", allergens: ["Glutine", "Lattosio"], pairing: "Trebbiano", isNew: true },
    { id: 51, name: "Summer Ventricina", category: "collezione2025", price: 15.00, description: "Pomodoro, burrata, ventricina vastese", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo", isNew: true },
    { id: 52, name: "La Fresca", category: "collezione2025", price: 14.00, description: "Rucola, crudo Parma, stracciatella, pomodorini", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco", isNew: true },
    { id: 53, name: "Alice in The Wonderland", category: "collezione2025", price: 15.00, description: "Fiori di zucca, alici Cantabrico, stracciatella, liquirizia", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Riesling", isNew: true },
    { id: 54, name: "Crudo, Burrata e Tarallo 2.0", category: "collezione2025", price: 15.00, description: "Bianca bufala. Uscita: crudo, burrata, taralli", allergens: ["Glutine", "Lattosio", "Frutta a guscio"], pairing: "Rosato Pugliese", isNew: true },
    { id: 55, name: "L'Aquilana 2.0", category: "collezione2025", price: 15.00, description: "Bianca fiordilatte, salsiccia, fonduta pecorino, funghi, tartufo fresco", allergens: ["Glutine", "Lattosio"], pairing: "Barolo", isNew: true },

    // ===== PADELLINI (Lievito Madre Vivo) =====
    { id: 60, name: "Pizz e Foje", category: "padellini", price: 15.00, description: "Vegana, crema di mais, verdure strascinate", allergens: ["Glutine"], pairing: "Vino Bianco", isVegan: true },
    { id: 61, name: "Limonando con Alice", category: "padellini", price: 15.00, description: "Acciughe, stracciata, liquirizia, limone candito", allergens: ["Glutine", "Lattosio", "Pesce"], pairing: "Falanghina" },
    { id: 62, name: "Giù di Tonno", category: "padellini", price: 15.00, description: "Maionese tonnata, tartare tonno, rucola", allergens: ["Glutine", "Pesce", "Uova"], pairing: "Verdicchio" },
    { id: 63, name: "Diversamente Margherita", category: "padellini", price: 15.00, description: "Sandwich ripieno di mozzarella, sopra pomodoro", allergens: ["Glutine", "Lattosio"], pairing: "Montepulciano" },
    { id: 64, name: "Sandwich Ventricina", category: "padellini", price: 15.00, description: "Ripieno mozzarella, sopra tartare ventricina", allergens: ["Glutine", "Lattosio"], pairing: "Cerasuolo" },
    { id: 65, name: "Angus e Gelato", category: "padellini", price: 15.00, description: "Ripieno mozzarella, sopra fonduta, rucola, crudo Angus", allergens: ["Glutine", "Lattosio"], pairing: "Barolo" },

    // ===== RUOTA DI CARRO (Ø 36 cm) =====
    { id: 70, name: "Maritata", category: "ruotadicarro", price: 8.50, description: "Metà margherita, metà marinara", allergens: ["Glutine", "Lattosio"], pairing: "Birra Lager" },
    { id: 71, name: "Margherita Ruota", category: "ruotadicarro", price: 8.50, description: "Classica margherita formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vino Rosato" },
    { id: 72, name: "Margherita di Bufala Ruota", category: "ruotadicarro", price: 12.00, description: "Con mozzarella di bufala DOP, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Prosecco" },
    { id: 73, name: "Salsiccia e Friarielli Ruota", category: "ruotadicarro", price: 12.00, description: "Provola, salsiccia, friarielli, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Aglianico" },
    { id: 74, name: "Provola e Pepe Ruota", category: "ruotadicarro", price: 10.00, description: "Provola e pepe nero, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vino Bianco" },
    { id: 75, name: "Filetto Ruota", category: "ruotadicarro", price: 12.00, description: "Bianca bufala, filetti di pomodorini, formato grande Ø 36 cm", allergens: ["Glutine", "Lattosio"], pairing: "Vermentino" },

    // ===== GLUTEN FREE =====
    { id: 80, name: "Marinara GF", category: "glutenfree", price: 9.00, description: "Pomodoro, aglio rosso Sulmona, origano, basilico", allergens: [], pairing: "Vino Bianco" },
    { id: 81, name: "Margherita GF", category: "glutenfree", price: 10.00, description: "Pomodoro, fiordilatte, parmigiano, basilico", allergens: ["Lattosio"], pairing: "Birra GF" },
    { id: 82, name: "Margherita DOP GF", category: "glutenfree", price: 12.00, description: "Pomodoro, mozzarella di bufala, basilico", allergens: ["Lattosio"], pairing: "Vino Rosato" },
    { id: 83, name: "Brontadella GF", category: "glutenfree", price: 15.00, description: "Bufala, mortadella IGP, mousse ricotta, pistacchi", allergens: ["Lattosio", "Frutta a guscio"], pairing: "Birra Blanche GF" },
    { id: 84, name: "Diavola di Bufala GF", category: "glutenfree", price: 15.00, description: "Bufala, ventricina piccante", allergens: ["Lattosio"], pairing: "Birra IPA GF" },
    { id: 85, name: "Salsiccia e Friarielli GF", category: "glutenfree", price: 14.00, description: "Provola, salsiccia, friarielli", allergens: ["Lattosio"], pairing: "Montepulciano" },

    // ===== FRITTI (Antipasti) =====
    { id: 90, name: "Frittatina Classica", category: "fritti", price: 3.50, description: "Frittatina di pasta napoletana classica", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 91, name: "Frittatina Carbonara", category: "fritti", price: 4.00, description: "Frittatina con guanciale, uovo e pecorino", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 92, name: "Frittatina Cacio e Pepe", category: "fritti", price: 4.00, description: "Frittatina con pecorino romano e pepe nero", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 93, name: "Palla di Riso al Ragù", category: "fritti", price: 3.50, description: "Riso, ragù di scottona, mozzarella filante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 94, name: "Crocchè di Patate", category: "fritti", price: 3.00, description: "Patate e provola, fritto croccante", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 95, name: "Montanarina Classica", category: "fritti", price: 3.00, description: "Pomodoro, parmigiano, bufala, basilico", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 96, name: "Tris di Montanarine", category: "fritti", price: 9.00, description: "Tre montanarine con 3 gusti", allergens: ["Glutine", "Lattosio"], pairing: "" },
    { id: 97, name: "Formaggio Fritto", category: "fritti", price: 7.00, description: "Pastella allo zafferano e agrodolce", allergens: ["Glutine", "Lattosio", "Uova"], pairing: "" },
    { id: 98, name: "Chips al Cucchiaio", category: "fritti", price: 4.50, description: "Chips di patata croccanti", allergens: ["Glutine"], pairing: "" },
    { id: 99, name: "Chips Speziate", category: "fritti", price: 5.00, description: "Chips con mix di spezie aromatiche", allergens: ["Glutine"], pairing: "" },

    // ===== TAGLIERI =====
    { id: 110, name: "Fresco di Bufala", category: "taglieri", price: 14.00, description: "Bocconcini, mozzarella, mousse ricotta, stracciata bufala", allergens: ["Lattosio"], pairing: "Prosecco" },
    { id: 111, name: "Selezione Salumi e Formaggi", category: "taglieri", price: 20.00, description: "Provenienza locale e nazionale", allergens: ["Lattosio"], pairing: "Montepulciano" },
    { id: 112, name: "Tagliere di Pata Negra", category: "taglieri", price: 10.00, priceNote: "l'etto", description: "Prosciutto razza iberica 50% bellota", allergens: [], pairing: "Rioja" },

    // ===== CARNI (Hamburger) =====
    { id: 121, name: "Hamburger di Chianina", category: "carni", price: 14.00, description: "Servito con panino. Contorno a scelta: chips, friarielli, rucola, pachino e grana", allergens: ["Glutine"], pairing: "Morellino" },
    { id: 122, name: "Hamburger di Wagyu Australia", category: "carni", price: 15.00, description: "Wagyu australiano con panino. Contorno a scelta", allergens: ["Glutine"], pairing: "Shiraz" },

    // ===== BEVANDE E DISTILLATI =====
    { id: 130, name: "Acqua Panna / San Pellegrino", category: "bevande", price: 2.50, priceNote: "0,75cl", description: "Acqua naturale o frizzante", allergens: [], pairing: "" },
    { id: 131, name: "Coca Cola / Fanta / Estathé", category: "bevande", price: 3.00, description: "Bibite classiche", allergens: [], pairing: "" },
    { id: 132, name: "Caffè / Deca", category: "bevande", price: 1.50, description: "Espresso", allergens: [], pairing: "" },
    { id: 133, name: "Genziana / Limoncello / Ratafia", category: "bevande", price: 2.50, description: "Liquori Enrico Toro", allergens: [], pairing: "" },
    { id: 134, name: "Amaro Riservato / Flares / Licuze", category: "bevande", price: 4.00, description: "Liquori Premium Enrico Toro", allergens: [], pairing: "" },
    { id: 135, name: "Gin Tonic Base", category: "bevande", price: 6.00, description: "Beefeater", allergens: [], pairing: "" },
    { id: 136, name: "Gin Tonic Premium", category: "bevande", price: 7.00, description: "Bombay, Tanqueray, Gin Mare", allergens: [], pairing: "" },
    { id: 137, name: "Gin Tonic Super Premium", category: "bevande", price: 8.00, description: "Beefeater 24, Malfy, Hendrick's", allergens: [], pairing: "" },
    { id: 138, name: "Gin Nordes Atlantic", category: "bevande", price: 9.00, description: "Gin Nordes", allergens: [], pairing: "" },
    { id: 139, name: "Gin Muma", category: "bevande", price: 13.00, description: "Gin Muma", allergens: [], pairing: "" },
    { id: 140, name: "Rum / Brandy / Whisky", category: "bevande", price: 6.00, description: "Zacapa 23, El Dorado 12, Johnny Walker", allergens: [], pairing: "" },
  ],
  specials: [
    { name: "Carta degli Oli Premium", description: "Acquista 1 bottiglia d'olio, ti offriamo la focaccia e assaggi altre 2 tipologie", price: 0 },
    { name: "Impasto Semi-integrale", description: "Farina tipo 2 con crusca, disponibile su tutte le pizze", price: 2 },
    { name: "Lu Cavaliere (Collezione Biodinamica)", description: "Vasetto di peperoncino artigianale", price: 3 },
  ],
  oils: [
    { brand: "Marina Palusci (Pianella)", items: ["Uomo di Ferro - Monocultivar Dritta", "Alchimia - Monocultivar Leccio del Corno", "Rinascimento - Dritta Cru piante secolari", "Intosso - Monocultivar Intosso", "Iblend - Mix Premium"] },
    { brand: "Geraci", items: ["Nocellara del Belice DOP Biologica"] },
    { brand: "Oli Aromatizzati", items: ["Agrumolio Limone/Arancia", "Erbolio Salvia/Timo/Rosmarino", "Erbolio Peperoncino", "Erbolio Basilico"] },
    { brand: "Mascianantonio", items: ["Cucco - Monocultivar Intosso (Slow Food)", "Crognale", "Perconti"] },
    { brand: "Esclusiva Carpe Diem", items: ["Monocultivar Tortiglione - 500 bottiglie numerate"] },
    { brand: "Tre Regine", items: ["Coratina in purezza"] },
  ],
};

// ==========================================
// EXPORT MENU BY LOCATION
// ==========================================
export const menuByLocation: Record<number, LocationMenu> = {
  1: chietiMenu,
  2: montesilvanoMenu,
  3: villaRaspaMenu,
  4: rosetoMenu,
  5: laquilaMenu,
};

// Legacy export for backwards compatibility
export const pizzas = chietiMenu.pizzas;

// ==========================================
// STORY INGREDIENTS (per HeroStory)
// ==========================================
export const storyIngredients = [
  {
    id: 1,
    title: "Mix di 5 Cereali Nobili",
    description: "Una miscela segreta per un impasto leggero e digeribile. Disponibile anche semi-integrale.",
    image: "dough",
  },
  {
    id: 2,
    title: "San Marzano DOP",
    description: "Pomodoro schiacciato a mano, dolce e poco acido.",
    image: "sauce",
  },
  {
    id: 3,
    title: "Bufala Campana DOP",
    description: "Mozzarella e ricotta dai migliori caseifici campani.",
    image: "cheese",
  },
  {
    id: 4,
    title: "Territorio Abruzzese",
    description: "Ventricina, guanciale, pecorino. I sapori della nostra terra.",
    image: "toppings",
  },
  {
    id: 5,
    title: "Olio EVO Premium",
    description: "Selezione esclusiva di oli monocultivar abruzzesi.",
    image: "basil",
  },
];
