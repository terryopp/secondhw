function innerValue(id) { // Функция для работы со значениями в таблице
  let input = document.getElementById(id);
  if (!isNaN(input.value)) {
    let idInv = 'q' + id[2] + id[1];
    let value = 0;
    eval(`value = 1/(${input.value});`);
    eval(`input.value = (${input.value}).toFixed(2);`);
    document.getElementById(idInv).value = value.toFixed(2);
  } else {
    input.value = '';
  }
};

window.onload = function() {
  const text = document.getElementById('text'); // Поле ввода критериев
  const button = document.getElementById('getAnswer'); // Кнопка для вычисления суммы

  const crit = ['']; // Массив критериев

  const table = new ControlTable();

  text.addEventListener('keydown', (e)=>{ // Определение нажатия на Enter и добавление критерия в список
    if (e.code == "Enter" && text.value != "") {
      table.deletingTable();
      crit.push(text.value);
      text.value = '';
      table.creatingTable(crit);
      if (crit.length > 2) button.disabled = false;
    }
  });

  button.addEventListener('click', () => { // Кнопка "Вычислить"/"Перезаписать"
    switch(button.value) {
      case 'Вычислить':
        table.showAnswer(crit);
        button.value = 'Перезаписать'
        break;
      case 'Перезаписать':
        table.deletingTable();
        crit.splice(1, crit.length - 1);
        button.value = 'Вычислить'
        button.disabled = true;
        break;
    }
    
  });
}