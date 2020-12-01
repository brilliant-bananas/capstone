const html = require("html-template-tag");

module.exports = () => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Login / Sign Up Form</title>
      <link rel="stylesheet" href="src/css/style.css" />
    </head>
    <body class="loginBody">
      <div class="loginbox">
        <img src="src/images/wallet.png" class="login-image" />
        <form class="loginForm" id="login" method="POST" action="/user">
          <h1>Login</h1>
          <p>Username</p>
          <input type="text" name="email" placeholder="Enter Username" />
          <p>Password</p>
          <input type="password" name="password" />
          <input type="submit" value="login" /><br />
          <p class="message">
            <a href="#" id="linkCreateAccount">
              Don't have an account? Sign Up</a
            >
          </p>
          <br />
        </form>
    </body>
  </html>
`;
