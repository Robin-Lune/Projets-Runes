class Runes {
  constructor(numéro, nom, dieu, signification, endroit, envers, image) {
    this.numéro = numéro;
    this.nom = nom;
    this.dieu = dieu;
    this.signification = signification;
    this.endroit = endroit;
    this.envers = envers;
    this.image = image;
  }
}

let rune1 = new Runes(
  1,
  "Fehu",
  "Frey",
  "Le Bétail",
  "Succès matériel, abondance, surmonter les obstacles avec succès, les décisions devront être guidées par l'instinc et non par la raison , protection et pérennité de ce que l'on posséde.",
  "Frustration dans nôtre vie que nous ne parvenons pas à combler, prendre le temps de la réflexion, revenir à l'essentiel, désire t-on vraiment ce que l'on cherche.",
  "./images/runes/fehu.png"
);

let rune2 = new Runes(
  2,
  "Uruz",
  "Urd",
  "L'Auroch",
  "Energie vitale, résolution des problèmes, guérison de l'âme ou du corps après une période de souffrance, fin des épreuves est proche, détermination, se débarasser des choses qui ne sont plus utiles.",
  "Aveuglement qui peut empêcher de saisir les opportunités lorsqu'elles se présenteront, notre force vital pourrait bien être mal utilisée... voire retournée contre nous, faire le point sur nous-même.",
  "./images/runes/uruz.png"
);
let rune3 = new Runes(
  3,
  "Thurisaz",
  "Thor",
  "L'Epine",
  "Aide et protection, laisser le destin se charger de lutter contre l'adversité, cette rune protége de manière passive tel un bouclier, il faut rester serein.",
  "Mauvaise attitude de nôtre part ou de quelqu'un de nôtre entourage, décisions prise à la hâte, l'impulsivité peut parfois créer plus de problèmes qu'elle n'en résout.",
  "./images/runes/thurisaz.png"
);
let rune4 = new Runes(
  4,
  "Ansuz",
  "Odin",
  "Les Ases / La communication",
  "Message issu de l'intuition, inspiration créatrice, métamorphose volontaire et réfléchie pour évoluer, être prêt à voir les signes, se tourner vers une personne plus sage ou expérimentée, connexion avec le divin.",
  "Problème de communication, un messonge, une interprétation faussée, obtenir la clarté par une explication directe.",
  "./images/runes/ansuz.png"
);
let rune5 = new Runes(
  5,
  "Raidho",
  "Nerthus",
  "La Roue",
  "Voyage physique ou spirituel, évolution, transformation positive, voyage dans de bonnes conditions, croire d'avantage en soi, avoir confiance en son destin, continuer sur la voie que l'on s'est fixée",
  "Certains liens doivent être rompus, les échecs et obstacles sont là pour nous montrer que les chemins empruntés ne nous conviennent pas.",
  "./images/runes/raidho.png"
);
let rune6 = new Runes(
  6,
  "Kenaz",
  "Heimdal",
  "La Torche",
  "Eveil spirituel, révelation, cette rune renforce les énergies en soi, regain de  créativité, la solution est en soi, lucidité fâce aux situations, passion forte, séxualité épanouissante et assumée.",
  "Manque de clarté, lâcher prise, relation en train de s'étioler, la flamme est faible mais n'est pas encore morte",
  "./images/runes/kenaz.png"
);
let rune7 = new Runes(
  7,
  "Gebo",
  "Gefn",
  "Le Don / Le Cadeau",
  "Rune de générosité, un cadeau, un don, l'amour entre amant, amis ou membre d'une famille; Communication riche et fluide entre les êtres, partage riche et profitable, faire preuve de générosité, faire preuve d'indulgence envers nous-mêmes.",
  "(Cette rune n'a pas de sens inversé)<br/> Rune de générosité, un cadeau, un don, l'amour entre amant, amis ou membre d'une famille, communication riche et fluide entre les êtres, partage riche et profitable, faire preuve de générosité, faire preuve d'indulgence envers nous-mêmes.",
  "./images/runes/gebo.png"
);
let rune8 = new Runes(
  8,
  "Wunjo",
  "Frigg",
  "La Joie",
  "La joie, le bonheur, harmonie en compagnie de ses proches, retrouver le chemin de nôtre foyer, désir comblé, dénouement heureux, les blocages se dénouent, protection par quelque chose ou quelqu'un.",
  "Balayer les peurs, ne pas baisser les bras, les récompenses viendront avec un peu de patience, persévérance, prendre les armes pour affronter de face, un test envoyé par la vie.",
  "./images/runes/wunjo.png"
);
let rune9 = new Runes(
  9,
  "Hagalaz",
  "Heimdal",
  "La Grêle",
  "Présage de diffucltés, fin d'un cycle, changement radical, passage nécessaire pour avancer, événement hors de contrôle, il faudra l'accepter, perte et dommage en route, se détacher des fardeaux émotionnels.",
  "(Cette rune n'a pas de sens inversé)<br/> Présage de diffucltés, fin d'un cycle, changement radical, passage nécessaire pour avancer, événement hors de contrôle, il faudra l'accepter, perte et dommage en route, se détacher des fardeaux émotionnels. ",
  "./images/runes/hagalaz.png"
);
let rune10 = new Runes(
  10,
  "Naudhiz",
  "Skuld",
  "La Nécessité / Le Besoin",
  "Annonciatrice d'obstacle, période de stress, patience, auto-sabotage, le cheminement sur lequel nous sommes n'est pas celui qui nous convient, explorer notre part d'ombre, poser sur soi un regar plus indilgent et plus authentique, des décisions à prendre et peut être des choses à abandonner.",
  "(Cette rune n'a pas de sens inversé) <br/>Annonciatrice d'obstacle, période de stress, patience, auto-sabotage, le cheminement sur lequel nous sommes n'est pas celui qui nous convient, explorer notre part d'ombre, poser sur soi un regar plus indilgent et plus authentique, des décisions à prendre et peut être des choses à abandonner. ",
  "./images/runes/naudhiz.png"
);
let rune11 = new Runes(
  11,
  "Isa",
  "Verdandi",
  "La Glace",
  "Rune statique, hivernale , nous faisons fâce à des blocages, contrôle de soi poussé à l'extrême car nous somme figé, solitude initiatique, concentration, contrôler les energies en soi, prendre du recul pour tenter de comprendre, lâcher prise, blocage dû à une force extérieur contre laquelle on ne peut rien.",
  "(Cette rune n'a pas de sens inversé)<br/> Rune statique, hivernale , nous faisons fâce à des blocages, contrôle de soi poussé à l'extrême car nous somme figé, solitude initiatique, concentration, contrôler les energies en soi, prendre du recul pour tenter de comprendre, lâcher prise, blocage dû à une force extérieur contre laquelle on ne peut rien. ",
  "./images/runes/isa.png"
);
let rune12 = new Runes(
  12,
  "Jera",
  "Freyja / Freyr",
  "L'Année",
  "La récolte, un cycle qu ise termine et un autre qui débute, le résultat d'une action passée, on récolte ce que l'on a semé, fin d'une période de perturbation, il est temps de planter de nouvelles graines, si l'on cherche un résultat il faudra attendre un délai d'une année ou d'une saison.",
  "(Cette rune n'a pas de sens inversé.)<br/> La récolte, un cycle qu ise termine et un autre qui débute, le résultat d'une action passée, on récolte ce que l'on a semé, fin d'une période de perturbation, il est temps de planter de nouvelles graines, si l'on cherche un résultat il faudra attendre un délai d'une année ou d'une saison.",
  "./images/runes/jera.png"
);
let rune13 = new Runes(
  13,
  "Eihwaz",
  "Ull",
  "L'If",
  "Début d'un nouveau cycle, introspection, laisse mourrir ce qui n'est plus necessaire, persévérer dans sa quête, lorsqu'un blocage surgit il ne peut sagir que d'un retard, cycle de la vie faire peruve de patience, prendre garde aux signes autour de nous.",
  "(Cette rune n'a pas de sens inversé)<br/> Début d'un nouveau cycle, introspection, laisse mourrir ce qui n'est plus necessaire, persévérer dans sa quête, lorsqu'un blocage surgit il ne peut sagir que d'un retard, cycle de la vie faire peruve de patience, prendre garde aux signes autour de nous.",
  "./images/runes/eihwaz.png"
);
let rune14 = new Runes(
  14,
  "Perthro",
  "Frigg",
  "Le Destin / Le Cornet à dés",
  "Destinée, un mystère est sur le point d'être dévoilé, nous somme sur la bone voie, des choses cachées sont encore à découvrir pour que nous soyons enfin capable de voir la situation dans son ensemble, opportunité nouvelle, vigueur sexuelle.",
  "Attentes démesurées, quelque chose qui ne nous correspond pas, mise en garde contre la répétition d'actes anciens, faire confiance à sa propre destinée, se focaliser sur l'ici et maintenant.",
  "./images/runes/perthro.png"
);
let rune15 = new Runes(
  15,
  "Algiz",
  "Heimdal",
  "L'Elan",
  "Miroir de l'âme, protection active, protection par l'action entreprise au bont moment, se fier à son instinct, nous avons les moyens de nous protéger, protection divine, conjure le mauvais sort.",
  "Avertissement au sujet de notre entourage, liens devenus toxiques, tout combat ne peut être gagné mais cela ne signifie pas qu'il doive être perdu pour autant, se retirer au bon moment pour éviter une défaite que l'on sait innévitable.",
  "./images/runes/algiz.png"
);
let rune16 = new Runes(
  16,
  "Sowilo",
  "Baldr",
  "Le Soleil",
  "Cette rune montre le chemin à suivre vers la voie de l'accomplissement, recharger les batteries lors des moments de lassitude et de fatigue, entreprendre des projets et se lancer sans peurs, belle progression, affection et chaleur, période propice pour étudier et se développer, élimine les obstacles qui pourraient se dresser sur notre chemin.",
  "(Cette rune n'a pas de sens inversé.) <br/>Cette rune montre le chemin à suivre vers la voie de l'accomplissement, recharger les batteries lors des moments de lassitude et de fatigue, entreprendre des projets et se lancer sans peurs, belle progression, affection et chaleur, période propice pour étudier et se développer, élimine les obstacles qui pourraient se dresser sur notre chemin.",
  "./images/runes/sowilo.png"
);
let rune17 = new Runes(
  17,
  "Tiwaz",
  "Tyr",
  "La Lance",
  "Equilibre retrouvé, l'effort en vaut la peine, justice et courage, évolution positive, élimination de toute forme de descrimination, victoire et honneur, persévérer car nous somme sur la bonne voie, amour passionné.",
  "Décision prise à la hâte, motivé par l'orgeuil ou le désir de dominer, réfléchir posément, éviter de gaspiller son énergie car cela risque de causer plus de tort que nécessaire, manque de confiance en soi.",
  "./images/runes/tiwaz.png"
);
let rune18 = new Runes(
  18,
  "Berkana",
  "Nerthus",
  "Le Bouleau / La Terre-mère",
  "Fertilité et fécondité, signe d'une naissance à venir, enfant, projet, l'acte de création en lui-même ne s'est peut être pas encore manifesté mais l'inspiration est là, apporter notre soutient.",
  "Obstacle à la croissance que nous avions entreprise ,sentiment d'échec ou de stagnation où l'impatience peut pousser à prendre de mauvaise décisons, faire la balance entre ce que l'on désire et ce dont on a besoin.",
  "./images/runes/berkana.png"
);
let rune19 = new Runes(
  19,
  "Ehwaz",
  "Freyr / Freyja",
  "Le Cheval",
  "L'échange, la rencontre et le voyage, réaction de cause à effet, fraternité, union fertile, confiance, déplacement qui ménera à l'aboutissement de la quête, voyages asrtaux et chamaniques, nouveaux départs",
  "Moment d'immobilisme, opportunité raté car ce n'est pas le bon moment, d'autres opportunités se présenteront, agitation, changements bloqués.",
  "./images/runes/ehwaz.png"
);
let rune20 = new Runes(
  20,
  "Mannaz",
  "Heimdal / Frigg / Odin",
  "L'Homme'",
  "Humanité, équilibre parfait, faire preuve de modestie, altruisme envers nos semblables, nous avons toutes les cartes en main pour devenir celui que nous voulons être, action humanitaire, échanges sociaux, trouver sa voie.",
  "Barrière entre celui que nous aspirons à être et celui que nous sommes vraiment, image idéale qui ne correspond pas à notre nature profonde",
  "./images/runes/mannaz.png"
);
let rune21 = new Runes(
  21,
  "Laguz",
  "Njord",
  "L'Eau",
  "L'énergie vitale, la santé, la guérison, intuition, émotion, capacités artistiques, inspiration, sexualité dans ses aspects les plus sensuels, faire le bilan pour tirer des enseignements, lâcher prise, être dans le flux vital.",
  "Excés qu'il va falloir réduire avant qu'ils ne nous surbmerge, émotions trop longuement refoulées, demander de l'aide lorsque les événements nous dépassent, intuition défaillante obscurcie par le doute ou l'angoisse.",
  "./images/runes/laguz.png"
);
let rune22 = new Runes(
  22,
  "Ingwaz",
  "Yngvi",
  "La Semence",
  "Potentiel créateur, fertile, bon moment pour éclore et venir au monde, conséquence de nos actions: en bien ou en mal, se faire maître de son propre destin, condenser son énergie en vue d'épreuve pour protéger nos idées, projets, enfants, patience.",
  "(Cette rune n'a pas de sens inversé.) <br/> Potentiel créateur, fertile, bon moment pour éclore et venir au monde, conséquence de nos actions: en bien ou en mal, se faire maître de son propre destin, condenser son énergie en vue d'épreuve pour protéger nos idées, projets, enfants, patience.",
  "./images/runes/ingwaz.png"
);
let rune23 = new Runes(
  23,
  "Othala",
  "Odin",
  "L'Héritage / La Famille",
  "Le patrimoine, la réalisation de soi, replonger dans nos origines pour chercher ce dont nous avons besoin, acquisition heureuse, chercher conseil auprés des 'anciens', prêt à fonder une famille.",
  "On cherche trop à se relier à une tradition ou une famille, se définir soi-même, se détourner du passé.",
  "./images/runes/othala.png"
);
let rune24 = new Runes(
  24,
  "Dagaz",
  "Heimdal",
  "Le Jour",
  "Renouveau, période qui se termine pour entamer une nouvelle phase, éveil aprés une phase de sommeil, reprise d'activité, lucidité, harmonie, prospérité, croissance, victoire et guérison, apaisement du corps et de l'esprit, les choses sont sur le point de se clarifier",
  "(Cette rune n'a pas de sens inversé.) <br/>Renouveau, période qui se termine pour entamer une nouvelle phase, éveil aprés une phase de sommeil, reprise d'activité, lucidité, harmonie, prospérité, croissance, victoire et guérison, apaisement du corps et de l'esprit, les choses sont sur le point de se clarifier",
  "./images/runes/dagaz.png"
);

const runeArray = [
  rune1,
  rune2,
  rune3,
  rune4,
  rune5,
  rune6,
  rune7,
  rune8,
  rune9,
  rune10,
  rune11,
  rune12,
  rune13,
  rune14,
  rune15,
  rune16,
  rune17,
  rune18,
  rune19,
  rune20,
  rune21,
  rune22,
  rune23,
  rune24,
];

const affichage = document.querySelectorAll(".image-rune");
const btn = document.getElementById("btn");
nomRune = document.querySelectorAll(".nom-rune");
descriptionRune = document.querySelectorAll(".description-rune");

btn.addEventListener("click", () => {
  let premièreRune = randomRune();
  renversé(premièreRune, 0);
  nomRune[0].textContent = premièreRune[0];
  affichage[0].src = premièreRune[2];
  descriptionRune[0].innerHTML = premièreRune[1];

  let secondeRune = randomRune();
  if (
    secondeRune[0] === premièreRune[0] ||
    secondeRune[0] === premièreRune[0] + " (inversé)" ||
    secondeRune[0] + " (inversé)" === premièreRune[0]
  ) {
    secondeRune = randomRune();
    console.log("relance 2eme rune");
  }
  renversé(secondeRune, 1);
  nomRune[1].textContent = secondeRune[0];
  affichage[1].src = secondeRune[2];
  descriptionRune[1].innerHTML = secondeRune[1];

  let troisièmeRune = randomRune();
  if (
    troisièmeRune[0] === premièreRune[0] ||
    troisièmeRune[0] === secondeRune[0] ||
    troisièmeRune[0] === premièreRune[0] + " (inversé)" ||
    troisièmeRune[0] + " (inversé)" === premièreRune[0] ||
    troisièmeRune[0] === secondeRune[0] + " (inversé)" ||
    troisièmeRune[0] + " (inversé)" === secondeRune[0]
  ) {
    troisièmeRune = randomRune();
    console.log("relance 3eme rune");
  }
  renversé(troisièmeRune, 2);
  nomRune[2].textContent = troisièmeRune[0];
  affichage[2].src = troisièmeRune[2];
  descriptionRune[2].innerHTML = troisièmeRune[1];
});

let randomRune = () => {
  let i = Math.floor(Math.random() * runeArray.length);
  let j = Math.floor(Math.random() * runeArray.length);
  if (j > 12) {
    let nom = runeArray[i].nom + " (inversé)";
    let message = runeArray[i].envers;
    let dessin = runeArray[i].image;
    return [nom, message, dessin];
  } else {
    nom = runeArray[i].nom;
    message = runeArray[i].endroit;
    dessin = runeArray[i].image;
    return [nom, message, dessin];
  }
};

let renversé = (valeur, numéroAffichage) => {
  if (valeur[0].includes("(inversé)")) {
    affichage[numéroAffichage].classList.add("inversé");
  } else {
    affichage[numéroAffichage].classList.remove("inversé");
  }
};

const cartes = document.querySelectorAll(".carte__int");
for(let i = 0 ; i < cartes.length ; i++){
  cartes[i].addEventListener("click", function () {
    cartes[i].classList.toggle("retournée");
    console.log(cartes)
  });
}

