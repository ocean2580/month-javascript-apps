# Quiz App

[tutorials](https://youtu.be/PBcqGxrr9g8?si=q-ro2EyFtpMCmyR1)

## CSS

```css
.app{
  background: #fff;
  width: 90%;
  max-width: 600px;
  margin: 100px auto 0;
  border-radius: 10px;
  padding: 30px;
}

.app h1{
  font-sizee: 25px;
  color: #001e4d;
  font-weight: 600;
  border-bottom: 1px solid #333;
  padding-bottom: 30px;
}


```



```css
.quiz{
  padding: 20px 0;
}

.quiz h2{
  font-size: 18px;
  color: #001e4d;
  font-weight: 600;
}
```

```css
.btn{
  background: #fff;
  color: #222;
  font-weight: 500;
  width: 100%;
  border: 1px solid #222;
  padding: 10px;
  margin: 10px 0;
  text-align: left;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover{
  background: #222;
  color: #fff;
}

#next-btn{
  background: #001e4d;
  color: #fff;
  font-size: 500;
  width: 150px;
  border: 0;
  padding: 10px;
  margin: 20px auto 0;
  border-radius: 4px;
  cursor: pointer;
  display: none;
}
```

 ```css
 .correct{
   background: #9aeabc;
 }
 
 .incorrect{
   background: #ff9393;
 }
 ```

## HTML
app
  quiz
    question
    answer-btns
    next-btn

## JS

`startQuiz()` : init counters and the value of `nextBtn` .

`showQuestion()` : `resetState()` at first, show question, create button for each answer.

`resetState()` : don't show next button, clear existing buttons.

`selectAnswer(e)` : this is a function for click event. get the selected button, show true answer from all buttons, show next button.

`handleNextButton()` : continue or `showScore()`.



<i>What's `dataset` usage?</i>

[article](https://medium.com/@adamkearney124/using-dataset-in-javascript-5331af3ec6c3)

In brief, it's uesd for different  functions to access certain data that storing inside elements on the DOM itself.



*What's  `classList` usage?*

The `classList` property returns the CSS classnames of an element.
