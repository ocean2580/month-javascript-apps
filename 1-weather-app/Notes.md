[toc]

# 1. Weather App

ApiKey: 661b00acd264609f1453387bd2a422fd

[website to get ApiKey](openweathermap.org)

## CSS

```html
<link rel="stylesheet" href="style.css">
```



### global 

```css
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', san-serif;
  box-sizing: border-box;
}

body {
  background: #222;
}
```



### card 

```css
.card{
  width: 90%;
  max-width: 470px;
  background: linear-gradient(135deg, #00feba, #5b548a);
  color: #fff;
  margin: 100px auto 0;
  border-radius: 20px;
  padding: 40px 35px;
  text-align: center;
}
```



### search 

```css
.search{
  width: 100%;
  display: flex;
  align: center;
  justify-content: space-between;
}

.search input{
  border: 0;
  outline: 0;
  background: #ebfffc;
  color: #555;
  padding: 10px 25px;
  height: 60px;
  border-radius: 30px;
  flex: 1;
  margin-right: 16px;
  font-size: 18px;
}

.search button{
  border: 0;
  outline: 0;
  background: #ebfffc;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.search button img{
  width: 16px;
}
```



### weather 

```css
.weather-icon{
  width: 170px;
  margin-top: 30px;
}

.weather h1{
  font-size: 80px;
  font-weight: 500;
}

.weather h1{
  font-size: 45px;
  font-weight: 400;
  margin-top: -10px;
}

.weather {
  /*change when city name is entered*/
  display: none;
}
```



### details 

```css
.details{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 50px; 
}

.col{
  display: flex;
  align-items: center;
  text-align: left;
}

.col img{
  width: 40px;
  margin-right: 10px;
}

.humidity, .wind{
  font-size: 28px;
  margin-top: -6px;
}
```



### error 

```css
.error {
  text-align: leeft;
  margin-left: 10px;
  font-size: 14px;
  margin-top: 10px;
  font-style: italic;
  display: none;
}
```



## HTML

>  card

> > search

> > error

> > weather

> > > details

> > > > col humidity	

> > > > col wind



### search

```html
		<div class="search">
      <input type="text" placeholder="enter city name" spellcheck="false">
      <button><img src="images/search.png"></button>
    </div>
```



### col wind

```html
        <div class="col">
          <img src="images/wind.png">
          <div>
            <p class="wind">18 km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
```



## JS

```html
<script src="index.js"></script>
```

`const` variable and object from document

`fetch()` to get data

if `response.status === 404`, change weather and error display css

else update values, weather icon, weather and error display css

finally `addEventListener` on searchBtn and call `checkWeather(searchBox.value)`



### object

```js
const weatherIcon = document.querySelector('.weather-icon');
```

change css style

```js
document.querySelector('.weather').style.display = "block";
```



### click event

```js
searchBtn.addEventListener('click',()=>{
  checkWeather(searchBox.value);
})
```

