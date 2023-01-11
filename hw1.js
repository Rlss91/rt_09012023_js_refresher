// 1
let users = [
  {
    id: 0,
    name: "kenny",
    age: 8,
  },
  {
    id: 1,
    name: "james",
    age: 40,
  },
  {
    id: 2,
    name: "john",
    age: 40,
  },
];

//2
let users2 = users.filter((user) => user.age < 18);
console.log("🚀 ~ file: hw1.js:16 ~ users2", users2);

//3
const findMaxAge = (arr) => {
  let max = arr[0].age;
  for (let user of arr) {
    if (max < user.age) {
      max = user.age;
    }
  }
  return max;
};

// 4
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

// 5
const createLi = (title, age, idx) => {
  return `
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        >
            <div>
              <div>${title}</div>
              <div>${age}</div>
            </div>
              <button class="btn btn-danger" id="delete-user-${idx}">
                <i class="bi bi-trash-fill"></i>
              </button>
            </li>
      `;
};

const displayUsers = () => {
  const usersList = document.getElementById("users-list");
  let elmsStr = "";
  for (let user of users) {
    elmsStr += createLi(user.name, user.age, user.id);
  }
  usersList.innerHTML = elmsStr;
  for (let user of users) {
    document
      .getElementById(`delete-user-${user.id}`)
      .addEventListener("click", () => {
        users = users.filter((userItem) => userItem.id != user.id);
        displayUsers();
      });
  }
};
displayUsers();
