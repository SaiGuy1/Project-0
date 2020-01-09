const playerOne = {
	// player: document.querySelector(".playerOne"),
	coins: 0,
	position: "",
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
	position: "none",
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


// increment coins as player grabs coin

// playerOne.coins += 1 

function game () {
	// level will be created in HTML as a table 

}

function gravity () {
	// on keyup allow for a setInterval to bring player down

}

class coin {
	constructor(){}
}


// Coin Random Position Function 

function coinPosition () {

}


// Display Coin Function 

function getRandomInt(max) {
  return Math.floor((Math.random() * Math.floor(max))*100);
}

function displayCoin () { 
	//gets random number between 0 - 200 <--- use this to random pixel on css
	randomNum = getRandomInt(2);
	randomNum2 = getRandomInt(2)

	console.log("hello");

	$("#coin").animate({
		left: `${randomNum}`,
		top: `${randomNum2}`
	}) 
}

window.setInterval(displayCoin(), 2000);



document.addEventListener("keydown", function (event) {
  $("body").keydown(function (action) {
    if (action.keyCode == 37) { // left
      $("#playerOne").animate({
        left: "-=2px"
       });
 	 }
     
    else if (action.keyCode == 38) { // dwon
      $("#playerOne").animate({
        top: "-=2px"
      });
    }
    else if (action.keyCode == 40) { // up
      $("#playerOne").animate({
        top: "+=2px"
      });
    }
    else if (action.keyCode == 39) { // right
      $("#playerOne").animate({
        left: "+=2px",
      });
  	}
    });
});

// Had to add KeyUp event or position kept ioncrementing as multiple
// first 5px then 10px then 15px etc.

document.addEventListener("keyup", function (event) {
  $("body").keydown (function (action) {
    if (action.keyCode == 37) { // left
      $("#playerOne").animate({
        left: left 
      });
    }
    else if (action.keyCode == 38) { // up
      $("#playerOne").animate({
        top: top
      });
    }
    else if (action.keyCode == 40) { // down
      $("#playerOne").animate({
        top: top
      });
    }
    else if (action.keyCode == 39) { // right
      $("#playerOne").animate({
        left: left
      });
  	}
    });
});


document.addEventListener("keydown", function (event) {
  $("body").keydown(function (element) {
    if (element.keyCode == 65) { // left
      $("#playerTwo").animate({
        left: "-=2px"
      });
    }
    else if (element.keyCode == 87) { // dwon
      $("#playerTwo").animate({
        top: "-=20px"
      });
      $("#playerTwo").animate({
        top: "+=20px"
      });
    }

    // else if (element.keyCode == 83) { // up
    //   $("#playerTwo").animate({
    //     top: "+=5"
    //   });
    // }
    else if (element.keyCode == 68) { // right
      $("#playerTwo").animate({
        left: "+=2"
    })
  	}
  });
});


document.addEventListener("keyup", function (event) {
  $("body").keydown(function (action) {
    if (action.keyCode == 65) { // left
      $("#playerTwo").animate({
        left: left 
      });
    }
    else if (action.keyCode == 87) { // up
      $("#playerTwo").animate({
        top: top
      });
    }
    // else if (action.keyCode == 40) { // down
    //   $("#playerOne").animate({
    //     top: top
    //   });
    // }
    else if (action.keyCode == 68) { // right
      $("#playerTwo").animate({
        left: left
      });
  	}
    });
});





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
