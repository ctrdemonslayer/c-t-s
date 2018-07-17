
function strenth () {
  var power = 5;
  var toughness = 5;
  
  return {
    getCurrentAverage: function () {
      return (power+toughness/2);
    },
    updatePowerAndTouphness: function () {
      power += power;
      toughness += toughness;
    }
  }
}

var omnath = { 
    power: 5,
    toughness: 5,
    con_mana_cost:7,
    c_mana_cost:4,
    best_coType:'elemental',
    type:'elemental',
    color: [0, 1, 0, 1, 0],
    //black red blue green white
    trope: 'land',
    ability:[1, 0, 0, 0, 1, 0, 0],
    //cimer, somner, boster, landfall, mana, healer, other
    colors:'green and red',
    mana:'2red 2green',
    price: 1.75,
    img:'https://images-na.ssl-images-amazon.com/images/I/51-Tsq9Ui5L._SL500_AC_SS350_.jpg',
}
var Animar = { 
    power: 1,
    toughness: 1,
    con_mana_cost:3,
    c_mana_cost:3,
    best_coType:'artifact',
    type:'elemental',
    trope: 'land',
    ability:[1, 0, 0, 0, 1, 0, 1],
    //cimer, somner, boster, landfall, mana, healer, other
    color: [0, 1, 1, 1, 0],
    //black red blue green white
    colors:'green blue, and red',
    mana:'1red 1green 1blue',
    price: 11.75,
    img:'https://images-na.ssl-images-amazon.com/images/I/51-Tsq9Ui5L._SL500_AC_SS350_.jpg',
}
var Ancestral_statue = { 
    power: 3,
    toughness: 4,
    con_mana_cost: 4,
    c_mana_cost: 0,
    best_coType:'Animar.elemental',
    subtType:'artifact',
    trope: 'land',
    color: [1, 1, 1, 1, 1],
    //black red blue green white
    ability:[0, 0, 0, 0, 0, 0, 0, 1],
    // 7 abilitys [cimer, somner, boster, landfall, mana, healer, other]
    colors:'none',
    mana:'0color',
    price: 4.75,
    img:'https://images-na.ssl-images-amazon.com/images/I/51-Tsq9Ui5L._SL500_AC_SS350_.jpg',
}
var elementals = [omnath, Animar]
var artifacts = [Ancestral_statue,]
console.log(omnath.getCurrentAverage());
