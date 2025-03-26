function main() {
    const list = document.getElementById('list');

    filmes.map((filme) => {
        render(filme);
        classificar(filme);
    });
};