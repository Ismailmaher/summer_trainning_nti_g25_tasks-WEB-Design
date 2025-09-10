  var users = [];
  var editIndex = -1;

  function renderTable() {
    var tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = "";
    users.forEach(function(user, index) {
      var row = `
        <tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button>
          </td>
        </tr>`;
      tableBody.innerHTML += row;
    });
  }



  function addUser() {
    var name = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
      alert("Please enter both name and email.");
      return;
    }

    if (editIndex === -1) {
      users.push({ name: name, email: email });
    } else {
      users[editIndex] = { name: name, email: email };
      editIndex = -1;
      document.getElementById("addBtn").textContent = "Add";
    }

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";

    renderTable();
  }

  function editUser(index) {
    document.getElementById("username").value = users[index].name;
    document.getElementById("email").value = users[index].email;
    document.getElementById("addBtn").textContent = "Update";
    editIndex = index;
  }

  function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
      users.splice(index, 1);
      renderTable();
    }
  }

  document.getElementById("addBtn").addEventListener("click", addUser);