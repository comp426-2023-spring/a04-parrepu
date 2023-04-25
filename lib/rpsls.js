// Code goes here

// Don't forget to export both of these created functions (will be used in the bin directory)
export { rps } // Make sure to have the following function names (Documentation: this module needs to be importable)
export { rpsls } 

// Start with the Rock-Paper-Scissors Game and then expand to the Rock-Paper-Scissors-Lizard-Spock Game (both games should follow similar design)

// RPS Game
function rps(move) {
    // Create an array of String values representing all the choices that can be made
    const potential_choice = ["rock", "paper", "scissors"]; // Does it matter if I use single or double quotes? -> No
    // Create a variable representing a random move that a computer can make (utilize Math.floor() here to get a random value -> Reference online documentation)
    potential_choice_len = potential_choice.length;
    const random_move = Math.floor(Math.random() * potential_choice_len); // Will be used as index for array of potential choices 

    // Series of nested if-statements
    if (move === undefined) { // Following would deal with #4 operational requirement ('===' does a stricter comparison between operands)
        // Use random_move variable from earlier to use as an index (':' assigns value)
        return {
            // Return the following
            player: potential_choice[random_move]
        };
    } else if (!potential_choice.
        includes(move.toLowerCase())) { // use to '.includes' & 'toLowerCase' to strictly compares the two string values on the command line (Don't forget to use '!' -> Might help avoid future debugging)
        // Throw an error for the following
        console.error("The following move is not allowed. The only options you can select are rock, paper, or scissors!!!");
        // throw an error showing that the [ARGUMENT] is out of range (#7 operational requirement).
        throw new RangeError();
    } else {
        // Following would represent a move from the computer
        const opponent_move = potential_choice[random_move];
        // Don't forget to use 'let' to define a String (just like in prev. assignment)
        let outcome;

        // Look at online documentation for the syntax or structure of switch cases (use 'toLowerCase()' for a strict comparison)
        switch (move.toLowerCase()) { // Update: Changed the spacing here
            // Now list the different cases (order of the cases doesn't necessarily matter here)
            case "paper": // Ternary operator (?) can be used here to simply syntax -> condition ? exprIfTrue : exprIfFalse (follow with a colon)
                outcome = (opponent_move === "paper") ? "tie":
                (opponent_move === "rock") ? "win":
                (opponent_move === "scissors") ? "lose":
                // Also think about the edge case where the opponent doesn't select a valid option
                "the following is not a valid option"; 
                // Don't forget to break (could cause many issues if this isn't stated)
                break;
            case "scissors":
                // Same structure as above (copy from above case)
                outcome = (opponent_move === "paper") ? "win":
                (opponent_move === "rock") ? "lose":
                (opponent_move === "scissors") ? "tie":
                // Also think about the edge case where the opponent doesn't select a valid option
                "the following is not a valid option"; 
                // Don't forget to break (could cause many issues if this isn't stated)
                break;
            case "rock":
                // Same structure as above (copy from above case) | Does it matter if we use '' instead of ""? -> Nope
                outcome = (opponent_move === "paper") ? "lose":
                (opponent_move === "rock") ? "tie":
                (opponent_move === "scissors") ? "win":
                // Also think about the edge case where the opponent doesn't select a valid option
                "the following is not a valid option"; 
                // Don't forget to break (could cause many issues if this isn't stated)
                break;

        }

        return {
            // Don't forget to use 'toLowerCase()' for strict value comparison (will help with debugging down the road)
            // Create keys and assign values here
            player: move.toLowerCase(), 
            opponent: opponent_move, 
            // Assign outcome var. to result key
            result: outcome 
        };

    }


} // Checkpoint 1: See if the RPS game works first before moving onto the RPSLS game (Update: Likely can't test individual method/module)

// RPSLS Game 
function rpsls(move) { // Copy method from above and make a few changes to fit the parameters of the new game
    // Create an array of Strings representing all the choices that can be made
    const potential_choice = ["rock", "paper", "scissors", "lizard", "spock"]; // Does it matter if I use single or double quotes? -> Nope
    // Create a variable representing a random move that a computer can make (utilize Math.floor() here to get a random value -> Reference online documentation)
    potential_choice_len = potential_choice.length;
    const random_move = Math.floor(Math.random() * potential_choice_len); // Will be used as index for array of potential choices (Using '.length' will simply impl)

    // Series of nested if-statements
    if (move === undefined) { // Following would deal with #4 operational requirement ('===' does a stricter comparison between operands)
        // Use random_move variable from earlier to use as an index (':' assigns value)
        return {
            // Assign the following value to player
            player: potential_choice[random_move]
        };
    } else if (!potential_choice.
        includes(move.toLowerCase())) { // use '.includes' & 'toLowerCase' to strictly compare the two string values on the command line
        // Throw an error for the following
        console.error("The following move is not allowed. The only options you can select are rock, paper, scissors, lizard or spock!!!")
        // throw an error showing that the [ARGUMENT] is out of range (#7 operational requirement).
        throw new RangeError();
    } else {
        // Following would represent a move from the computer
        const opponent_move = potential_choice[random_move];
        // Don't forget to use 'let' to define a String
        let outcome;

        // Look at online documentation for the syntax or structure of switch cases (use 'toLowerCase()' for a strict comparison)
        switch (move.toLowerCase() ){ // Change spacing here
            // Update: Add more cases here (order shouldn't necessarily matter here)
            case "paper": // Ternary operator (?) can be used here to simply syntax -> condition ? exprIfTrue : exprIfFalse (follow with a colon)
                outcome = (opponent_move === "paper") ? "tie":
                (opponent_move === "rock") ? "win":
                (opponent_move === "scissors") ? "lose":
                // Reference repository documentation to see different outcomes
                (opponent_move === "lizard") ? "lose":
                (opponent_move === "spock") ? "win":
                // Also think about the edge case where the opponent doesn't select a valid option
                "the following is not a valid option"; 
                // Don't forget to break (could cause many issues if this isn't stated)
                break;
            case "scissors":
                // Same structure as above (copy from above case)
                outcome = (opponent_move === "paper") ? "win":
                (opponent_move === "rock") ? "lose":
                (opponent_move === "scissors") ? "tie":
                // Reference repository documentation to see different outcomes
                (opponent_move === "lizard") ? "win":
                (opponent_move === "spock") ? "lose":
                // Also think about the edge case where the opponent doesn't select a valid option
                "the following is not a valid option"; 
                // Don't forget to break (could cause many issues if this isn't stated)
                break;
            case "rock":
                // Does it matter if we use '' instead of ""? -> Nope
                outcome = (opponent_move === "paper") ? "lose":
                (opponent_move === "rock") ? "tie":
                (opponent_move === "scissors") ? "win":
                // Reference repository documentation to see different outcomes
                (opponent_move === "lizard") ? "win":
                (opponent_move === "spock") ? "lose":
                // Also think about the edge case where the opponent doesn't select a valid option
                "the following is not a valid option"; 
                // Don't forget to break (could cause many issues if this isn't stated)
                break;
            case "lizard":
                // Reference help text on repository to see what I need to update
                outcome = (opponent_move === "paper") ? "win":
                (opponent_move === "rock") ? "lose":
                (opponent_move === "scissors") ? "lose":
                // Reference repository documentation to see different outcomes
                (opponent_move === "lizard") ? "tie":
                (opponent_move === "spock") ? "win":
                // Also think about the edge case where the opponent doesn't select a valid option
                "the following is not a valid option"; 
                // Don't forget to break (could cause many issues if this isn't stated)
                break;
            // Final Case
            case "spock": 
                // Reference help text on repository to see what I need to update
                outcome = (opponent_move === "paper") ? "lose":
                (opponent_move === "rock") ? "win":
                (opponent_move === "scissors") ? "win":
                // Reference repository documentation to see different outcomes
                (opponent_move === "lizard") ? "lose":
                (opponent_move === "spock") ? "tie":
                // Also think about the edge case where the opponent doesn't select a valid option
                "the following is not a valid option"; 
                // Don't forget to break (could cause many issues if this isn't stated)
                break;

        }
        return {
            // Don't forget to use 'toLowerCase()' for strict value comparison (will help with debugging down the road)
            // Create keys and assign values here
            player: move.toLowerCase(), 
            opponent: opponent_move, 
            // Like we did above, Assign outcome var. to result key
            result: outcome 
        };

    }

} // Checkpoint 2: Now, we can see if the RPS and RPSLS game works
