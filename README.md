# Welcome to the Crystal Collector Clicky Game

https://thaining7.github.io/Crystal-Collector-Game/

# Motivation

#### This application was designed to be a fun demonstration of JavaScript fundamentals

# Tech Used:

* HTML
* CSS
* JavaScript
* jQuery

# Features

* jQuery click events
* JavaScript random number generator function

# Code Example

#### Random number generator function that allows a random number to be generated between two specified integers:

```
function generateRandomBtwn(minNum, maxNum) {
    var randomNumber = 0;
 
    randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;

    return randomNumber;
}
```

# Screenshots

![App](/assets/images/Screenshot.png)

# How to use

#### At the beginning of each game, a start value is given. Click on each crystal to try to match your total score to the start value.
