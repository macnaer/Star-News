window.addEventListener("load", Init);

function Init() {
  console.log("Init");
  var apiKey = "18f1c87e444741aca30db0a569bba999";
  var category = ["sports", "entertainment", "health", "science", "technology"];
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
      //console.log(data);
      callback(data);
    }
  };
}

function sportsNews(news) {
  console.log("sportsNews", news);
}

function entertainmentNews(news) {
    console.log("entertainmentNews", news);
}

function healthNews(news) {
    console.log("healthNews", news);
}

function scienceNews(news) {
    console.log("scienceNews", news);
}

function technologyNews(news) {
    console.log("technologyNews", news);
}
