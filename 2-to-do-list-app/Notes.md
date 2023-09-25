# 2. To-Do List App
[tutorial](https://youtu.be/G0jO8kUrg-I?si=FXBk6IzHVeTPFaDI)


## CSS


### container
 ```css
 .container{
   width: 100%;
   min-height: 100vh;
   background: linear-gradient(135deg, #153677, #4e085f);
   padding: 10px;
 }
 ```


### todo app
```css
.todo-app{
  width: 100%;
  max-width: 540px;
  margin: 100px auto 20px;
  padding: 40px 30px 70px;
  background: #fff;
  border-radius: 10px;
}


.todo-app h2{
  color: #002765;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.todo-app h2 img{
  width: 30px;
  margin-left: 10px;
}
```


### input
```css
.row{
  display: flex;
  align-items: centeer;
  justify-content: space-between;
  background: #edeef0;
  border-radius: 30px;
  padding-left: 20px;
  margin-bottom: 25px;
}

input{
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px;
}
 
button{
  border: none;
  outline: none;
  padding: 16px 50px;
  background: #ff5945;
  color: #fff;
  font-size: 16px;
  cursor: pointeer;
  border-radius: 40px;
}
```


### ul
```css
ul li{
  list-style: none;
  font-size: 17px;
  padding: 12px 8px 12px 50px;
  user-select: none;
  cursor: pointer;
  position: relative;
}

ul li::before{
  content: '';
  position: absolute;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-image: url(./images/uncheked.png);
  background-size: cover;
  background-position: center;
  top: 12px;
  left: 8px;
}

ul li.checked{
  color: #555;
  text-decoration: line-through;
}

ul li.checked::before{
  background-image: url(./images/unchecked.png);
}

ul li span{
  position: absolute;
  right: 0;
  top: 5px;
  width: 40px;
  font-size: 22px;
  height: 40px;
  color: #555;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
}

ul li span:hover{
  background: #edeef0;
}
```

> In CSS, **`::before`** creates a [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) that is the first child of the selected element. It is often used to add cosmetic content to an element with the [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content) property. It is inline by default.



## HTML

container
  todo-app
    row
    list-container



## JS
create const variable` inputBox` and `listContainer`.

`addTask()` :  create li and pass value then append as child, add a cross for each li, clear the input box, save data.

`addEventListener('click',(e)=>{})` on listContainer : click the li, it will switch between checked and unchecked; click the cross, li and span will be removed. save data after the click.

```JS
// exist -> remove, inexist -> add
e.target.classList.toggle('checked');
```

`saveData()` : put `listContainer.innerHTML` into `localStorage` to avoid losing data after refreshing.

`showTask()` : show data from saved `listContainer.innerHTML`.



<i>innerHTML vs innerText vs textContent</i>

- **InnerHTML:** Using innerHTML allows you to see exactly what’s in the **HTML markup** contained within a string, including elements like spacing, line breaks and formatting. 
- **InnerText:** This approximates the “rendered” text content of a node and is aware of styling and CSS. It’s most effective when you only need to see what’s in the element **without the formatting**.
- **TextContent:** This retrieves and sets the content of the tag as plain text. It’s most effective when you want to see what’s in an element, plus **styling**.
