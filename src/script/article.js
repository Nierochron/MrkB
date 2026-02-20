const container = document.querySelector('.articles-cards');

fetch('./articles.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(article => {
      const li = document.createElement('li');
      li.classList.add('articles-card');
      li.innerHTML = `
        <img src="${article.img}" alt="${article.title}" class="article-image">
        <div class="article-text-container">
        <h3>${article.title}</h3>
        <p class="article-desc">${article.desc}</p>
        <a href="${article.link}" class="article-read-more">Read more</a>
        </div>
      `;
      container.appendChild(li);
    });
  });