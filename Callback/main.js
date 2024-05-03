function getData(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status === 200) {
      return callback(JSON.parse(xhr.responseText));
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

const data = getData("https://jsonplaceholder.typicode.com/users", (data) => {
  displayData(data);
  console.log(data);
});

function displayData(data) {
  const tableBody = document.getElementById("dataBody");

  data.forEach((user) => {
    const userRow = document.createElement("tr");
    userRow.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</td>
            <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
        `;
    tableBody.appendChild(userRow);
  });
}
