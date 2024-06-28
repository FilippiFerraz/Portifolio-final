document.addEventListener('DOMContentLoaded', () => {
    const username = 'FilippiFerraz';
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const reposContainer = document.getElementById('repos-container');
            data.forEach(repo => {
                const card = document.createElement('div');
                card.className = 'repo-card';

                const title = document.createElement('h3');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = repo.name;
                title.appendChild(link);

                const description = document.createElement('p');
                description.textContent = repo.description || 'Sem descrição';

                const language = document.createElement('span');
                language.textContent = repo.language || 'Desconhecida';

                const stars = document.createElement('span');
                stars.textContent = `⭐ ${repo.stargazers_count}`;

                const forks = document.createElement('span');
                forks.textContent = `🍴 ${repo.forks_count}`;

                card.appendChild(title);
                card.appendChild(description);
                card.appendChild(language);
                card.appendChild(stars);
                card.appendChild(forks);

                reposContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro:', error));
});
