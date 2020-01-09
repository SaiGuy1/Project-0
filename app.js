const playerOne = {
	player: document.querySelector(".playerOne"),
	coins: 0,
	position: ,
	move () {

		// if keydown is left, player will move pixels to the left 
		// if keydown is right, player will move pixels to the right 
		// if up player will jump (must create gravity function to bring player back down)
			// On keydown for up, make player jump 
				// On keyup, bring player back to starting position with setDelay 
	}
}


const playerTwo = {
	player: document.querySelector(".playerTwo"),
	coins: 0,
	position: ,
	move () {
		// if keydown is left, player will move pixels to the left 
		// if keydown is right, player will move pixels to the right 
		// if up player will jump (must create gravity function to bring player back down)
			// On keydown for up, make player jump 
				// On keyup, bring player back to starting position with setDelay 

		document.addEventListener("keydown", function(event) {
  				console.log(event.which);
  		})
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

class coin () {
	
}


// Coin Random Position Function 

function coinPosition () {

}


// Display Coin Function 

function displayCoin () { 
	const gameBoard = document.getElementById("gameBoard"); 

}

