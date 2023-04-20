const request = new XMLHttpRequest();
request.open("GET", "peopls.json");
request.setRequestHeader("Contetn-type", "application/json");
request.send();
request.onload = () => {
   const data = JSON.parse(request.response);
   data.forEach((user) => {
      const div = document.createElement('div');
      const name = document.createElement('span');
      const age = document.createElement('span');
      name.innerHTML = user.name;
      age.innerHTML = user.age;
      div.append(name, ': ', age);
      document.body.appendChild(div);
   });
};
