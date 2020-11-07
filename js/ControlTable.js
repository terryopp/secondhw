function ControlTable () { // Конструктор класса для вывода таблицы попарного сравнения
  const table = document.getElementById('answer');

  this.creatingTable = (crit) => { // Создание таблицы
    let amount = crit.length; 
    for (let i = 0; i < amount; i++) {
      let row = table.insertRow(-1);
      for (let j = 0; j < amount; j++) {
        let cell = row.insertCell(-1);
        if (i == 0) cell.append(crit[j]);
        else {
          if (j == 0) cell.append(crit[i]);
          if (i == j) cell.innerHTML = '<span id="q'+i+j+'">1.00</span>';
          if (j != 0 && i != j) cell.innerHTML = '<input id="q'+i+j+'" onchange="innerValue(id)" size="1">';
        }
      }
    }
  }

  this.deletingTable = () => { // Удаление таблицы
    while(table.rows.length > 0) {
      table.deleteRow(0);
    }
  }

  this.showAnswer = (crit) => { // Вычисление суммы и её вывод
    let amount = crit.length;
    let summ = [];
    let globalSumm = 0;
    table.rows[0].insertCell(-1).innerHTML = '<span class="summ">СУММА</span>';
    //ВЫСЧИТЫВАНИЕ СУММЫ
    for (let i = 1; i < amount; i++) {
      summ.push(1);
      for (let j = 1; j < amount; j++) {
        let element = document.getElementById('q'+i+''+j);
        summ[i-1] += element.value ? element.value*1 : 0;
      }
      globalSumm += summ[i-1]
    }
    //ПРЕОБРАЗОВАНИЕ СУММЫ И ЕЁ ВЫВОД
    for (let i = 1; i < amount; i++) {
      let row = table.rows[i];
      row.insertCell(-1).innerHTML = `<span class="summ">${(Math.round(summ[i-1]/globalSumm*100)/100).toFixed(2)}</span>`;
    }
  }
}