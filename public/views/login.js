const html = require("html-template-tag");

module.exports = (content) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Login</title>
      <link rel="stylesheet" href="src/css/style.css" />
    </head>
    <body class="loginBody">
      <div class="loginbox">
        <h1>Login</h1>
        <form>
          <p>Username</p>
          <input type="text" name="" placeholder="Enter Username" />
          <p>Password</p>
          <input type="text" name="" placeholder="Enger Password" />
          <input type="submit" name="" value="login" /><br />
          <a href="#">Don't have an account ?</a><br />
          <br />
          <input type="submit" name="" value="Sign Up" />
        </form>
      </div>
    </body>
  </html>
`;
