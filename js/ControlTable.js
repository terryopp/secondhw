function ControlTable () { // Конструктор класса для вывода таблицы попарного сравнения
  const table = document.getElementById('answer');

  this.creatingTable = (crit) => { // Создание таблицы
    let amount = crit.length;
  }

  this.outputTable = (crit) => {
    let amount = crit.length; 
    for (let i = 0; i < amount; i++) {
      let row = table.insertRow(-1);
      for (let j = 0; j < amount; j++) {
        let cell = row.insertCell(-1);
        if (i == 0) cell.append(crit[j]);
        if (i > 0 && j == 0) cell.append(crit[i]);
        if (i > 0 && i == j) cell.append('1');
      }
    }
  }

  this.deletingTable = () => {
    while(table.rows.length > 0) {
      table.deleteRow(0);
    }
    console.log(table.rows.length);
  }
}