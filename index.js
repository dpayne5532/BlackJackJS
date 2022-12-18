var FreshDeck = function(deck) {
  var fDeck = shuffle(deck);

  return fDeck
};

var MultiDeck = function(deck, n) {
  var deck = deck || deck
  var n = n || 1;
  var fDeck = multiDeck(deck, n);

  return fDeck
};

var deck = [];

deck.push('AH')
deck.push('2H')
deck.push('3H')
deck.push('4H')
deck.push('5H')
deck.push('6H')
deck.push('7H')
deck.push('8H')
deck.push('9H')
deck.push('10H')
deck.push('JH')
deck.push('QH')
deck.push('KH')

deck.push('AC')
deck.push('2C')
deck.push('3C')
deck.push('4C')
deck.push('5C')
deck.push('6C')
deck.push('7C')
deck.push('8C')
deck.push('9C')
deck.push('10C')
deck.push('JC')
deck.push('QC')
deck.push('KC')

deck.push('AD')
deck.push('2D')
deck.push('3D')
deck.push('4D')
deck.push('5D')
deck.push('6D')
deck.push('7D')
deck.push('8D')
deck.push('9D')
deck.push('10D')
deck.push('JD')
deck.push('QD')
deck.push('KD')

deck.push('AS')
deck.push('2S')
deck.push('3S')
deck.push('4S')
deck.push('5S')
deck.push('6S')
deck.push('7S')
deck.push('8S')
deck.push('9S')
deck.push('10S')
deck.push('JS')
deck.push('QS')
deck.push('KS')


function shuffle(arr) {
  var result = []
  var freshDeck = {};
  while (result.length < 52) {
    var ind = 52 * (Math.random());
    ind = Math.floor(ind)
    var draw = arr[ind];
    if (!freshDeck[draw]) {
      freshDeck[draw] = draw;
      result.push(draw);

    } else {

    }

  }
  return result;
};



function multiDeck(arr, n) {
  var result = []
  var freshDeck = {};
  while (result.length < 52 * n) {
    var ind = 52 * (Math.random());
    ind = Math.floor(ind)
    var draw = arr[ind];

      if (!freshDeck[draw]) {
      freshDeck[draw] = 1;
      result.push(draw);
      } else if (freshDeck[draw] < n) {
        result.push(draw);
        freshDeck[draw] += 1;

    } else if (freshDeck[draw] > n) {

    }

  }

  return result;
}




var multiDano = MultiDeck(deck, 5)

console.log(multiDano[15]);
var playingDeck = [];
var deckFinished = true;


function deal() {
  var dealerScore = 0;
  var playerScore = 0;
  var dealerHand = [];
  var playerHand = [];

  if (playingDeck.length < 10) {
    deckFinished = true
  }
  if (deckFinished) {
    deckFinished = false;
    playingDeck = multiDeck(deck, 1);
    console.log(`shuffling`)
  }

  var card1 = playingDeck.shift();
  var card2 = playingDeck.shift();
  var card3 = playingDeck.shift();
  var card4 = playingDeck.shift();

  playerHand.push(card1, card3);

  dealerHand.push(card2, card4)

  console.log(playerHand)
  console.log(dealerHand)

console.log(card1, card3, '==========', card2, card4);
};

deal();



function handScore() {
  var pHand = 0
  var dHand = 0;



  switch(arr) {



  }

}