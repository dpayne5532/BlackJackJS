// line 234   -  for (var i = 0; i < XXX; i++) {   Change the XXX to the number of hands you want played
// line 138   -  playingDeck = multiDeck(deck, XXX);      Change the XXX to the number of decks you want to play

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

var dealerScore = 0;
var playerScore = 0;
var dealerHand = [];
var playerHand = [];
var oneAce = false;
var twoAce = false;


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



var playingDeck = [];
var deckFinished = true;




function deal() {
 playerHand = [];
 dealerHand = [];
  if (playingDeck.length < 10) {
    deckFinished = true
  }
  if (deckFinished) {
    deckFinished = false;
    playingDeck = multiDeck(deck, 5);
    console.log(`========shuffling===================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
    console.log(`========shuffling===================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
    console.log(`========shuffling===================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
    console.log(`========shuffling===================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
    console.log(`========shuffling===================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
  }

  var card1 = playingDeck.pop();
  var card2 = playingDeck.pop();
  var card3 = playingDeck.pop();
  var card4 = playingDeck.pop();

  playerHand.push(card1, card3);
  dealerHand.push(card2, card4)
};

function hitMe(hand) {
  var newCard = playingDeck.pop();
  hand.push(newCard);
  return hand;
}

function dealerTurn(hand) {
  while (dealerScore < 17) {
    console.log('DEALER HAS TO HIT!')

    hand = hitMe(hand)
    console.log('Dealer: ', dealerHand)
    dealerScore = handScore(hand);

  }


  return hand;
}

// NOT DONE VV-V--------VVVVV

function bjCheck(hand) {
  if (hand.length !== 2) {
    return false;
  }
  var handScore = handScore(hand);
  if (handScore !== 21) {
    return false;
  }
  if (result === 21 && aceCount === 1 && faceCard === true && hand.length === 2) {
    console.log("BLACKJACK!!")

    return true;
  }
  return false;
}



function handScore(hand) {
  var result = 0;
  var aceCount = 0;
  var faceCard = false;

  for (var i = 0; i < hand.length; i++) {
    var card = hand[i];
    if (card.length === 3) {
      result += 10;
    } else if (card[0] === 'J' || card[0] === 'Q' || card[0] === 'K') {
        result += 10;
        faceCard = true;

    } else if (card[0] === 'A') {
      result += 11;
      aceCount += 1;
    } else {
      card = parseInt(card);
      result += card;

    }
  }

  if (result === 21 && aceCount === 1 && faceCard === true && hand.length === 2) {
    console.log("BLACKJACK!!!!!!!")

  }

  for (var i = aceCount; i > 0; i--) {
    if (result > 21) {
      result -= 10;
    }
  }
  if (result > 21) {
    console.log('HAHA YOU BUST!')
  }
  return result;
}

var pWins = 0;
var dWins = 0;

for (var i = 0; i < 500; i++) {

deal();

playerScore = handScore(playerHand)
dealerScore = handScore(dealerHand)

console.log('Player: ', playerHand, playerScore)
console.log('Dealer: ', dealerHand, dealerScore)



if (playerScore < 16) {
console.log("Player: HIT!")
hitMe(playerHand)
playerScore = handScore(playerHand)
}

console.log('Player: ', playerHand, playerScore)
console.log('Dealer: ', dealerHand, dealerScore)

dealerTurn(dealerHand)

console.log('Player: ', playerHand, playerScore)
console.log('Dealer: ', dealerHand, dealerScore)


if (dealerScore < playerScore && playerScore < 22) {
  pWins += 1;
  console.log('PLAYER wins!!!!')
} else if (dealerScore > 21 && playerScore < 22) {
  pWins += 1;
  console.log('PLAYER wins!!!!')
}  else {
  dWins += 1;
  console.log('Dealer Wins');
}

  console.log('Player Wins: ', pWins, 'Dealer Wins: ', dWins)
  console.log('_____________________________________________________________')
}

