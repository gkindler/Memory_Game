$(function(){

  const images = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
  let opened = [];
  const game = $(".game")

  // funkcja do szuflowania wartosci przekazywanych z tablicy
  shuffle = (array) => {
    for( let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
    return array;
  };

  // tworzenie kart
  newGame = () => {
    game.empty();
    let cards = shuffle(images);
    for ( let i = 0; i < cards.length; i++) {
      game.append($(`<div class="card" data-elem="${cards[i]}"><p class="value">${cards[i]}</p></div>`))
    };
  };

  // event do obracania kart

  game.on('click', '.card:not(".match, .flip")', function() {

    if(document.querySelectorAll('.flip').length >= 2){return false;}

    let flipped = $(this).data('elem');
    $(this).addClass("flip");
    opened.push(flipped);
    console.log(opened);

    if(opened.length > 1) {
      if(opened[0] === opened[1]) {
        game.find('.flip').addClass('match');
        setTimeout( () => {
          game.find('.match').removeClass('flip');
        }, 700);
      } else {
        game.find('.flip').addClass('notmatch');
        setTimeout( () => {
          game.find('.flip').removeClass('flip');
        }, 1000);

      }
      opened = [];
    }


  });


  newGame();
})


// if(open.length == 2){
//   open.eq(0).data('elem') === open.eq(1).data('elem') && open.addClass('match');
//   setTimeout( () => {
//     open = $('.card.flip:not(.match)');
//     open.removeClass('flip');
//   },1500);
//   opened = [];
// }
