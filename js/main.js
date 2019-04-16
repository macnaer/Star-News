window.addEventListener("load", Init);

function Init() {
  var apiKey = "18f1c87e444741aca30db0a569bba999";
  var category = [
    "sports",
    "entertainment",
    "health",
    "science",
    "technology"
  ];
  var callbackFunction = [
    { news: sportsNews },
    { news: entertainmentNews },
    { news: healthNews },
    { news: scienceNews },
    { news: technologyNews }
  ];

  for (var i = 0; i < category.length; i++) {
    Request(category[i], apiKey, callbackFunction[i].news);
  }
  
  var weatherAPIKey = "d663677633bd6cb690bbdea66fe5a981";
  var city = "Rivne";
  WeatherRequest(city, weatherAPIKey, RenderWeather);
}

function WeatherRequest(city, weatherAPIKey, callback) {
  var url = `http://api.openweathermap.org/data/2.5/forecast?id=7046809&APPID=${weatherAPIKey}`;
  //api.openweathermap.org/data/2.5/forecast?id=707860&APPID=eb1eee072bb055a6ebad977afce5902f
  http: https: var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
}

function Request(category, apiKey, callback) {
  var url = `https://newsapi.org/v2/top-headlines?country=ua&category=${category}&apiKey=${apiKey}`;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
}

function RenderWeather(weather){
  console.log(weather);
}

function sportsNews(news) {
  var sportElem = document.querySelector("#sport");
  for (var i = 0; i < 5; i ++){
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    sportElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    sportElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    sportElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    sportElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    sportElem.appendChild(publishedAt);
  }
}

function entertainmentNews(news) {
  var sportElem = document.querySelector("#entertainment");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    sportElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    sportElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    sportElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    sportElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    sportElem.appendChild(publishedAt);
  }
}

function healthNews(news) {
  var sportElem = document.querySelector("#health");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    sportElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    sportElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    sportElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    sportElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    sportElem.appendChild(publishedAt);
  }
}

function scienceNews(news) {
  var sportElem = document.querySelector("#science");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    sportElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    sportElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    sportElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    sportElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    sportElem.appendChild(publishedAt);
  }
}

function technologyNews(news) {
  var sportElem = document.querySelector("#technology");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    sportElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    sportElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    sportElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    sportElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    sportElem.appendChild(publishedAt);
  }
}
