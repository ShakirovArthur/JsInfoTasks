class UserService {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get userName() {
    return this.username;
  }
  async authenticate_user() {
    let result = {};
    try {
      const response = await fetch(
        `https://example.com/api/user/authenticate?username=${this.username}&password=${this.password}`
      );
      const data = await response.json();
      result = {
        isAuthenticate: true,
        response: data,
        error: null,
      };
    } catch (error) {
      result = {
        isAuthenticate: false,
        response: null,
        error: error,
      };
    }
    return result;
  }
}

// 1 вариант
const button = document.querySelector("#login");

button.addEventListener("click", async () => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const res = new UserService(username, password);

  const result = await res.authenticate_user();
  result.isAuthenticate
    ? (document.location.href = "/home")
    : alert(result.error);
});

// 2 вариант

// $("form #login").click(function () {
//   const username = $("#username");
//   const password = $("#password");
//   const res = new UserService(username, password);
//   res
//     .authenticate_user()
//     .then((result) =>
//       result.isAuthenticate
//         ? (document.location.href = "/home")
//         : alert(result.error)
//     );
// });
