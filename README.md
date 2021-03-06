##Introduction
The Memory Game is a required project for Udacity's Front-End Development Nanodegree.

Though starter code was provided, I tried as much as possible to build completely from scratch using the starter code only as a guide.

##Objective
The object of the Memory Game is to match all eight pairs of cards in the fewest moves possible.

##How it Works
Each move, the player uncovers two cards to see if their symbols match. If the cards match, they stay open. If the cards do not match, the cards flip back over.

During gameplay, the player's star rating will decrease based on the number of moves they make.

The game is won when all 16 cards are uncovered. A modal will display with the players final score -- their star rating, the number of moves it took to win, and how long it took to win.

##Dependencies
The following is a list of the external resources used to create this project.

1. Google Fonts

The Google Fonts library was used to embed the Bevan and Open Sans fonts used in the project. This was implemented by including the follow bit of code in the head of index.html.

```
<link href="https://fonts.googleapis.com/css?family=Bevan|Open+Sans" rel="stylesheet">
```

2. Font Awesome

I used the Font Awesome CDN to get the icons for the cards in the game. This was implemented by include the following code in the head of index.html.

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
```
3. Subtle Patterns

The background image used in this web app was downloaded from [Subtle Patterns] (https://www.toptal.com/designers/subtlepatterns/).
