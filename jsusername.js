let username = "";

document.getElementById("addletter").addEventListener("click", function (event) {
    event.preventDefault();
    const letter = document.getElementById("usernameletter").value;
    username += `${letter}`;
    document.getElementById("username").value = username;
  });

  document.getElementById("clearusername").addEventListener("click", function (event) {
    event.preventDefault();
    username = "";
    document.getElementById("username").value = username;
  });