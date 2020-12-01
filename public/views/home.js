const html = require("html-template-tag");

module.exports = () => html`
  <!DOCTYPE html>
  <html>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Home</title>
      <link rel="stylesheet" href="src/css/style.css" />
    </head>
    <body>
      <header class="header">Home</header>
      <div class="navbar">
        <a href="/home" class="active">
          <img src="src/images/icons/home.png" width="40" height="40" />
        </a>
        <a href="/budget"
          ><img src="src/images/icons/budget.png" width="50" height="50"
        /></a>
        <a href="#Transactions"
          ><img src="src/images/icons/transactions.png" width="55" height="55"
        /></a>
        <a href="#contact"
          ><img src="src/images/icons/goals.png" width="55" height="55"
        /></a>
      </div>
    </body>
  </html>
`;
