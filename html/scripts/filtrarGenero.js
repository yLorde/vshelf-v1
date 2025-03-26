function filtrarGenero(param) {
    let i, genderTarget, genderId;
    
    for (i = 0; i <= 5; i++) {
        if (genero[i].toLowerCase().includes(param)) {
            genderTarget = genero[i].toLowerCase();
            genderId = i;
            i = 5;
        };
    };

    return { genderTarget, genderId };
};