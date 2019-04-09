window.addEventListener("load", Init);

function Init() {
  console.log("Init");
  var urlSport =
    "https://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=18f1c87e444741aca30db0a569bba999";
  var urlEntertaiment =
    "https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=18f1c87e444741aca30db0a569bba999";
  var urlHealth =
    "https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=18f1c87e444741aca30db0a569bba999";
  var urlScience =
    "https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=18f1c87e444741aca30db0a569bba999";
  var urlTechnology =
    "https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=18f1c87e444741aca30db0a569bba999";
  Request(urlSport, SportNews);
  Request(urlEntertaiment, EntertainmentNews);
  Request(urlHealth, HealthNews);
  Request(urlScience, ScienceNews);
  Request(urlTechnology, TechnologyNews);
}

function Request(url, callback) {
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

function SportNews(news) {
  console.log(news);
}

function EntertainmentNews(news) {
  console.log(news);
}

function HealthNews(news) {
  console.log(news);
}

function ScienceNews(news) {
  console.log(news);
}

function TechnologyNews(news) {
  console.log(news);
}
