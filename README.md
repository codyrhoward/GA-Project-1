# GA-Project-1
Welcome to GA Project One! This game is called Track Star. It's a race to the finish line, but the cards decide the fate of the race. Player VS Player. Race against your friend in this game of chance sprinting game! In this match up of red vs blue, each player will click the RUN cards in sequential order one at a time. Blue clicks first! Whoever covers more ground at the end of the sixth turn wins! Have fun and run fast.
# Technology Used
The game was built using HTML, CSS, Javascript, and jQuery.
I used basic css styling properties along with flex-box to style my html pages.
For the functionality I used a mixture of javascript and jquery to create a game that offers a great user experience.
The technologies used include functions, arrays, functions nested in arrays, conditionals, and variables.
# Approach Taken
I wanted to create a card game of sorts where the victory relied on chance rather than skill. I decided to do this in the form of a racing game.
I knew that I wanted a function to be incacted on the click of one of the cards. I wanted this function to animated the player icon to the right seamlessly.
I gave each of the two players 6 turns total. I created 6 cards for them to click on in sequential order.
For the game to be random, I created 5 functions per card that could be potentially selected for the player at random on click.
To do this I put each of the 5 functions into an array, and used Math.random to produce one of the functions.
I then passed in the array as an argument to my function in my on click method, which gave me one of the 5 and acted it at the same time.
The runner who has moved furthest in card 6 is declared the winner.
I used jquery to change the h1 to the name of the winner, or to a tie.
# Unsolved Problems
My win function only works right now if the Blue Runner goes first because I envoked my checkWin function on the 6th card of the red runner.
The game will end early if clicked in the wrong order.
I tried to make my win text animate across the screen but never could successfully make it happen.
# Future Updates
I am going to fix my checkWin function so that the game can be played with anyone going first.
I am going to add more functions to make the game more dynamic.
There will be a VS computer option.
I will make a color selector so the player is able to customize their runner.
I will make levels that have different backgrounds and fun things.
I would eventually like to have them run around a game board or track.
I will go back and try to make my code more DRY.
