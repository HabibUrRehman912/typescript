
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then((data) => {
      const table = document.createElement('table');
      table.style.borderStyle = "solid";
      table.style.borderColor = "red";
      const headerRow = table.insertRow(0);
      const keys = Object.keys(data.products[0]);
    // console.log(data[0].id)
      keys.forEach(key => {
        const headerCell = document.createElement('th');
        headerCell.innerText = key;
        headerRow.appendChild(headerCell);
      });
  
      data.products.forEach(rowData => {
        const row = table.insertRow();
        keys.forEach(key => {
          const cell = row.insertCell();
          cell.innerText = rowData[key];
        });
      });
  
      document.querySelector('#table-container')!.appendChild(table);
    })
    .catch(error => console.error(error));
  