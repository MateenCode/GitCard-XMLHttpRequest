let container = document.querySelector('.container');
let list = document.createElement("ul");

list.append(container)



// 2. Create our Ajax Request
let request = new XMLHttpRequest();
request.addEventListener("load", displayCharacters);
request.open('GET', 'https://api.github.com/users/mateencode');
request.send();

// Our display function
function displayCharacters () {
  // Parse our response text
  let data = JSON.parse(this.responseText);
  let gitList = `<li>${data.name}</Li>`


list.innerHTML = gitList

}
