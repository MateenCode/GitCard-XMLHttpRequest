const containerList = document.querySelector("ul")

let request = new XMLHttpRequest();
request.addEventListener("load", ListStuff);
request.open('GET', 'https://api.github.com/users/mateencode');
request.send();

function ListStuff(){

  let data = JSON.parse(this.responseText);
  let list = '';

  list = `<li><strong>${data.name}</strong></li>
          <li>${data.url}</li>
          <li>${data.bio}</li>
          <li>${data.company}</li>
          <li>${data.location}</li>
  `;

  containerList.innerHTML = list;
}
