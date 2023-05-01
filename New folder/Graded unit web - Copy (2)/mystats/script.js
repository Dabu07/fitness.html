function salveazaDate() {
    const nume = document.getElementById('nume').value;
    const varsta = document.getElementById('varsta').value;
    const greutate = document.getElementById('greutate').value;
    const inaltime = document.getElementById('inaltime').value;

    const fitnessData = {
        nume: nume,
        varsta: varsta,
        greutate: greutate,
        inaltime: inaltime
    };

    localStorage.setItem('fitnessData', JSON.stringify(fitnessData));
    window.location.href = "rezultate_fitness.html";
}