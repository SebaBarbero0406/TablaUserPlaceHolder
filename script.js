let url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    crearTable(data)
  });

let body = document.getElementById('body')

function crearTable(data) {

  let tableHTML = ""

  for (let i = 0; i < data.length; i++) {
    tableHTML += `
    <tr>
      <th scope="row">${i+1}</th>
      <td>${data[i].name}</td>
      <td>${data[i].username}</td>
      <td>${data[i].email}</td>
    </tr>
    `
  }
  

  body.innerHTML = tableHTML
}

