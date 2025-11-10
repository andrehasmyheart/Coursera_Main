var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status === 200) {
      var articles = xhr.response.articles; // assuming your JSON has an 'articles' array
      var articlesDiv = document.getElementById('articles');
  
      articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
        articleDiv.appendChild(title);
  
        var description = document.createElement('p');
        description.textContent = article.description;
        articleDiv.appendChild(description);
  
        // Create list for ways_to_achieve or benefits
        var list = document.createElement('ul');
        article.ways_to_achieve.forEach(function(item) {
          var listItem = document.createElement('li');
          listItem.textContent = item;
          list.appendChild(listItem);
        });
        articleDiv.appendChild(list);
  
        articlesDiv.appendChild(articleDiv);
      });
    } else {
      console.error('Failed to fetch data');
    }
  };
  xhr.send();