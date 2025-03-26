function render(filme) {
    list.innerHTML += `
    <div class="flex cursor-pointer items-center justify-center">
        <div
        class="flex flex-col gap-2 text-white max-w-md w-full border backdrop-blur-md p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150 "
        >
        <div class="flex flex-row justify-between w-full">
            <div class="flex flex-row justify-between w-full">
            <p class="text-xs">${status[filme.status]}</p>
            <p class="text-xs">${stream[filme.stream]}</p>
            </div>
        </div>
        <div class="flex flex-row justify-between w-full">
            <h3 class="text-xl font-bold">${filme.nome}</h3>

            <div class="text-xs">
                <div id="film_${filmes.indexOf(filme)}" class="flex flex-row">
                </div>
            </div>
        </div>
            <div class="text-sm">
                <b>Gênero:</b> ${genero[filme.genero]} <br />
                <b>Tipo:</b> ${tipo[filme.tipo]}
            </div>
        </div>

    </div>
    `
}

//backdrop-blur brightness-75