const url = 'https://api.github.com/users/guerrero/repos';

const ul = document.querySelector(".profile");

const request = new XMLHttpRequest();

request.open('GET', url, true);

request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(request.responseText);
    let content = '';
    for(const repo of data){
      const {name} = repo;
      let stars = repo.stargazers_count || "Nadie te quiere";

      content += `
        <li>
          ${name} (${stars})
        </li>
      `;
    }

    ul.innerHTML = content;

  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
};

request.onerror = () =>
  console.log('Error al tratar de conectarse con el servidor');

request.send();
