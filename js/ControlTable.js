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
          if (i == j) cell.append('1');
          if (j != 0 && i != j) cell.innerHTML = '<input id="q'+i+j+'" class="inner" size="1">';
        }
      }
    }
  }

  this.deletingTable = () => { // Удаление таблицы
    while(table.rows.length > 0) {
      table.deleteRow(0);
    }
    console.log(table.rows.length);
  }
}