import images from "./images";

const wines = [
  {
    title: "ChapEL Hill Shiraz",
    price: "$59",
    tags: "Au | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$44",
    tags: "Au | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$56",
    tags: "FR | 750ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda| 30ml",
  },
  {
    title: "Dark N Stormy",
    price: "$16",
    tags: "Dark rum | Ginger Bear | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$31",
    tags: "Rum | Citrus juice| Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown SSugar | Anfostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor site amet, consectetur",
  },
  {
    imgUrl: images.award02,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor site amet, consectetur",
  },
  {
    imgUrl: images.award03,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor site amet, consectetur",
  },
  {
    imgUrl: images.award04,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor site amet, consectetur",
  },
];

export default { wines, cocktails, awards };
