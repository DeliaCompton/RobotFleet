async function fillTable(url, table){
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    
    const response = await fetch(url);
    const data = await response.json();

    console.log(data[0]);

    //clear our table
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    //putting headers
    for(const headerText in data[0]){
        const HeaderElement = document.createElement("th");
        HeaderElement.textContent = headerText;
        tableHead.querySelector('tr').appendChild(HeaderElement);
    }
    //for the content
    for(let i = 0; i < data.length; i++){
        const obj = Object.values(data[i]);
        const rowElement = document.createElement("tr");
        for(const cellText of obj){
            const cellElement = document.createElement("td");
            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
        }
        tableBody.appendChild(rowElement);
        
    }
    function sortJSON(data, key, asc=true) {
        return data.sort((a, b) => {
          let x = a[key];
          let y = b[key];
          if (asc) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
          else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
        });
      }
      output = sortJSON(data.result, "robotID", false);
      return data;
}
//populating table with the robot api data
fillTable('https://60c8ed887dafc90017ffbd56.mockapi.io/robots', document.querySelector("table"));

/* I really stuggled with trying to sort the list, if I had more time,
I would add a search bar, to filter through all the robots and attributes. 
I would style the table more and actually get it to sort in every column.*/