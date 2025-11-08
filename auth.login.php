<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style/login.css">
</head>

<body>
  <div class="container">

    <div class="registrationForm">
      <form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="post">
        <input type="text" name="email" class="email" placeholder="Email">
        <input type="password" name="password" class="pass" placeholder="Password">
        <input type="submit" value="Login" class="reg" name="reg">
      </form>

      <?php
      $dbserver = "localhost";
      $dbusername = "root";
      $dbpassword = "";
      $dbname = "chatify";
      $conn = new mysqli($dbserver, $dbusername, $dbpassword, $dbname);
      if (isset($_POST["reg"])) {
        $email = isset($_POST["email"]) ? $_POST["email"] : "";
        $password = isset($_POST["password"]) ? $_POST["password"] : "";

        if (!empty($email) || !empty($password)) {
          $sql = "SELECT * FROM chatifyTB WHERE email='$email'";
          $result = $conn->query($sql);
          if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
              if (password_verify($password, $row["pass"])) {
                header("Location: index.html");
              } else {
                echo "Wrong Username or Password";
              };
            };
          };
        } else {
          echo "Fill the form correctly!!";
        };
      };

      ?>
    </div>
    <div class="link">
      <h2>Welcome! to <span>Quizly</span></h2>
      <p>Not registered Yet...?</p>
      <a href="auth.php">Register</a>
    </div>
  </div>
</body>

</html>