// let title = document.querySelector(".title").value;
// let body = document.querySelector(".body").value;
fetch("http://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((userlar) => {
    let users = document.querySelector(".users");

    userlar.forEach((user) => {
      let user1 = document.createElement("div");
      user1.classList.add("user");
      let img = document.createElement("img");
      img.setAttribute("src", "/images/user-image.png");
      img.classList.add("user-image");
      user1.appendChild(img);
      let h2 = document.createElement("h2");
      h2.classList.add("name");
      h2.textContent = user.name;
      user1.appendChild(h2);
      let p1 = document.createElement("p");
      p1.classList.add("username");
      p1.textContent = user.username;
      user1.appendChild(p1);
      let p2 = document.createElement("p");
      p2.classList.add("email");
      p2.textContent = user.email;
      user1.appendChild(p2);
      let p3 = document.createElement("p");
      p3.classList.add("phone");
      p3.textContent = user.phone;
      user1.appendChild(p3);
      let p4 = document.createElement("p");
      p4.classList.add("comp-name");
      p4.textContent = user.company.name;
      user1.appendChild(p4);
      users.appendChild(user1);
      console.log(user);
    });
  });
