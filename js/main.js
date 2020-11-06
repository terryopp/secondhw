window.onload = function() {
    const text = document.getElementById('text'); // Поле ввода критериев
    const crit = []; // Массив критериев

    text.addEventListener('keydown', (e)=>{ // Определение нажатия на Enter и добавление критерия в список
        if (e.code == "Enter" && text.value != "") {
            crit.push(text.value);
            text.value = '';
            console.log(crit);
        }
    });
}