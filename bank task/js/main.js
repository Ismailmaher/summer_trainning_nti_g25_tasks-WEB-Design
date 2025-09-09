var users = [];

function showUsers() {
  if (users.length === 0) {
    console.log("No users available.");
    return;
  }

  console.log("---- Users List ----");
  for (var i = 0; i < users.length; i++) {
    console.log(
      "ID: " + users[i].id +
      " | Name: " + users[i].name +
      " | Balance: " + users[i].balance
    );
  }
  console.log("--------------------");
}

function addUser() {
  var id = prompt("Enter ID:");
  var name = prompt("Enter Name:");
  var balance = Number(prompt("Enter Balance:"));

  if (isNaN(balance)) {
    console.log("Invalid balance. User not added.");
    return;
  }

  users.push({ id: id, name: name, balance: balance });
  showUsers();
}

function editUser() {
  var id = prompt("Enter the ID of the user to edit:");
  var user = users.find(function(u) { return u.id === id; });

  if (user) {
    var newBalance = Number(prompt("Enter the new Balance:"));
    if (isNaN(newBalance)) {
      console.log("Invalid balance. Update failed.");
      return;
    }
    user.balance = newBalance;
    console.log("User updated successfully.");
  } else {
    console.log("User not found.");
  }
  showUsers();
}

function deleteUser() {
  var id = prompt("Enter the ID of the user to delete:");
  var index = users.findIndex(function(u) { return u.id === id; });

  if (index !== -1) {
    users.splice(index, 1);
    console.log("User deleted successfully.");
  } else {
    console.log("User not found.");
  }
  showUsers();
}

function main() {
  while (true) {
    var choice = prompt(
      "Choose an operation:\n1- Add User\n2- Edit User\n3- Delete User\n4- Show Users\n5- Exit"
    );

    if (choice === "1") {
      addUser();
    } else if (choice === "2") {
      editUser();
    } else if (choice === "3") {
      deleteUser();
    } else if (choice === "4") {
      showUsers();
    } else if (choice === "5") {
      console.log("Exiting...");
      break;
    } else {
      console.log("Invalid choice, please try again.");
    }
    
  }
}

main();
