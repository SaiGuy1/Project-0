const playerOne = {
	// player: document.querySelector(".playerOne"),
	coins: 0,
	xPosition: null,
  yPosition: null,
  width: 50,
  height: 150,
	move () {

		// if keydown is left, player will move pixels to the left 
		// if keydown is right, player will move pixels to the right 
		// if up player will jump (must create gravity function to bring player back down)
			// On keydown for up, make player jump 
				// On keyup, bring player back to starting position with setDelay 
	}
}


const playerTwo = {
	// player: document.querySelector(".playerTwo"),
	coins: 0,
	xPosition: null,
  yPosition: null,
  width: 50,
  height: 150,
	move () {
		// if keydown is left, player will move pixels to the left 
		// if keydown is right, player will move pixels to the right 
		// if up player will jump (must create gravity function to bring player back down)
			// On keydown for up, make player jump 
				// On keyup, bring player back to starting position with setDelay 

		// document.addEventListener("keydown", function(event) {
  // 				console.log(event.which);
  // 		})

	}
}

const coin = {
  xPosition: null,
  yPosition: null,
  width: 45,
  height: 45
}

var progressOne = 0;
var progressTwo = 0;


function collision () {
  // object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
  //   object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) 

playerOne.xPosition = $("#playerOne").position().left
playerOne.yPosition = $("#playerOne").position().top

coin.xPosition = $("#coin").position().left
coin.yPosition = $("#coin").position().top

playerTwo.xPosition = $("#playerTwo").position().top
playerTwo.yPosition = $("#playerTwo").position().top


  if (playerOne.xPosition < coin.xPosition + coin.width &&
   playerOne.xPosition + playerOne.width > coin.xPosition &&
   playerOne.yPosition < coin.yPosition + coin.height &&
   playerOne.yPosition + playerOne.height > coin.yPosition) {


      console.log("PLAYER ONE GOT THE COIN")

      $("#playerOne").toggleClass("animated tada duration-4s")
      playerOne.coins += 1
      progressOne += 10

      displayCoin();

      $("#oneScore").text(`Player 1 Score: ${playerOne.coins}`)


      console.log("Player 1 Score: " + playerOne.coins)

      

      $("#OneProgress").attr('style', `width: ${progressOne}%`)


    }
  
   else if (playerTwo.xPosition < coin.xPosition + coin.width &&
   playerTwo.xPosition + playerTwo.width > coin.xPosition &&
   playerTwo.yPosition < coin.yPosition + coin.height &&
   playerTwo.yPosition + playerTwo.height > coin.yPosition) {
      console.log("PLAYER TWO GOT THE COIN")
      $("#playerTwo").toggleClass("animated tada duration-4s")
      playerTwo.coins += 1
      progressTwo += 10

      displayCoin();

      $("#twoScore").text(`Player 2 Score: ${playerTwo.coins}`)

      console.log("Player 1 Score: " + playerTwo.coins)

      $("#TwoProgress").attr('style', `width: ${progressTwo}%`)


  }
}

// function checkClass () {
//   if ($("#playerOne").hasClass("animated tada duration-4s")){
//         $("#playerOne").removeClass("animated tada duration-4s")
//   }
// }

setInterval(collision, 100);
// setInterval(checkClass, 2000);


console.log("Player 1 X: " + playerOne.position);


$(".jumbotron").css({ height: $(window).height() - $(".navbar").height() /1.5 + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() /1.5 + "px" });
});
// increment coins as player grabs coin

// playerOne.coins += 1 

function game () {
	// level will be created in HTML as a table 

}


// class coin {
// 	constructor(){}
// }


// Coin Random Position Function 

function coinPosition () {

}


// Display Coin Function 

function getRandomInt(max) {
  return Math.floor((Math.random() * Math.floor(max))*100);
}

function displayCoin () { 
	//gets random number between 0 - 200 <--- use this to random pixel on css
	const randomNum = getRandomInt(15);
	const randomNum2 = getRandomInt(5)

	console.log("hello");

  const divWidth = $('#gameBoard').width()
  const divHeight = $('#gameBoard').height()
  const randWidth = Math.floor((Math.random()*divWidth))
  const randHeight = Math.floor((Math.random()*divHeight))

	$("#coin").animate({
		left: `${randWidth}`,
		top: `${randHeight}`
	}) 

  console.log($("#coin").position())

}

function createCoin () {
  const divWidth = $('#gameBoard').width()
  const divHeight = $('#gameBoard').height()
  const randWidth = Math.floor((Math.random()*divWidth))
  const randHeight = Math.floor((Math.random()*divHeight))

	$("#game").append(`<div id="smallCoin" style="left: ${randWidth}; top: ${randHeight}" top></div>`)

}


// function NumOfCoins (num) {

// 	for (let i = 0; i < num; i++) {
	setInterval(createCoin, 10000);
// 	}

// }
	// NumOfCoins(15);
	setInterval(displayCoin, 2000);

  function checkWinner () {
    if (progressOne === 10 || progressTwo === 10) {
      console.log("player has won!")
      $("#message").attr("aria-hidden", "false");
  }
}


  setInterval(checkWinner, 500);



document.addEventListener("keydown", function (event) {
  // $("body").keydown(function (action) {
    if (event.keyCode === 37) { // left
      $("#playerOne").animate({
        left: "-=100px"
       });

 	 }
     
    else if (event.keyCode === 38) { // dwon
     $("#playerOne").animate({
        top: "-=160px"
      });
      // $("#playerOne").animate({
      //   top: "+=160px"
      // });
    }
    else if (event.keyCode === 40) { // up
      $("#playerOne").animate({
        top: "+=160px"
      });
    }
    else if (event.keyCode === 39) { // right
      $("#playerOne").animate({
        left: "+=100px"
      });
	 }
	 else if (event.keyCode === 65) { // left
      $("#playerTwo").animate({
        left: "-=100px"
      });
    }
    else if (event.keyCode === 87) { // jump
      $("#playerTwo").animate({
        top: "-=160px"
      });
      // $("#playerTwo").animate({
      //   top: "+=160px"
      // });
    }

    else if (event.keyCode === 83) { // up
      $("#playerTwo").animate({
        top: "+=160px"
      });
    }
    // else if (element.keyCode == 83) { // up
    //   $("#playerTwo").animate({
    //     top: "+=5"
    //   });
    // }
    else if (event.keyCode === 68) { // right
      $("#playerTwo").animate({
        left: "+=100px"
    })

    };
});

// Had to add KeyUp event or position kept ioncrementing as multiple
// first 5px then 10px then 15px etc.

document.addEventListener("keyup", function (event) {
  // $("body").keyup(function (action) {
    if (event.keyCode === 37) { // left
    	// console.log("Lol");
      $("#playerOne").animate().stop(true, false);
    }
    else if (event.keyCode === 38) { // up
   		// $("#playerOne").animate().stop(true, true);
    }
    else if (event.keyCode === 40) { // down
      // $("#playerOne").animate().stop(true, false);
    }
    else if (event.keyCode === 39) { // right
      $("#playerOne").animate().stop(true, false);
  	}
  	else if (event.keyCode === 65) {
  		$("#playerTwo").animate().stop(true,false);
  	}
  	else if (event.keyCode === 68) {
  		$("#playerTwo").animate().stop(true,false);
  	}
    else if (event.keyCode === 87) { // right
      $("#playerOne").animate().stop(true, false);
    }

});
// });




// function score 


// document.addEventListener("keydown", function (event) {
//   // $("body").keydown(function (element) {
//     if (element.keyCode === 65) { // left
//       $("#playerTwo").animate({
//         left: "-=2px"
//       });
//     }
//     else if (element.keyCode === 87) { // dwon
//       $("#playerTwo").animate({
//         top: "-=20px"
//       });
//       $("#playerTwo").animate({
//         top: "+=20px"
//       });
//     }

//     // else if (element.keyCode == 83) { // up
//     //   $("#playerTwo").animate({
//     //     top: "+=5"
//     //   });
//     // }
//     else if (element.keyCode === 68) { // right
//       $("#playerTwo").animate({
//         left: "+=2"
//     })
//   	}
//   });
// });


// document.addEventListener("keyup", function (event) {
//   $("body").keydown(function (action) {
//     if (action.keyCode == 65) { // left
//       $("#playerTwo").animate({
//         left: left 
//       });
//     }
//     else if (action.keyCode == 87) { // up
//       $("#playerTwo").animate({
//         top: top
//       });
//     }
//     // else if (action.keyCode == 40) { // down
//     //   $("#playerOne").animate({
//     //     top: top
//     //   });
//     // }
//     else if (action.keyCode == 68) { // right
//       $("#playerTwo").animate({
//         left: left
//       });
//   	}
//     });
// });





// // increment coins as player grabs coin

// // playerOne.coins += 1 

// function game () {
// 	// level will be created in HTML as a table 
// 	// if arrow keys
// 		// player 1 moves
// 	// if wasd 
// 		// player 2 moves 
// }

// function gravity () {
// 	// on keyup allow for a setInterval to bring player down

// }

// class coin {


// }


// // Coin Random Position Function 

// function coinPosition () {

// }


// // Display Coin Function 

// function displayCoin () { 
// 	const gameBoard = document.getElementById("gameBoard"); 

// }

// // class gameBoard {
// // 	static render(data, domElement) {

// // 	}
// // }











