<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style/reg.css">
</head>

<body>
  <div class="container">
    <div class="link">
      <h2>Welcome!! to <span>Quizly</span></h2>
      <p>Already registered...?</p>
      <a href="auth.login.php">Login</a>
    </div>
    <div class="registrationForm">
      <form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="post">
        <input type="text" name="username" class="username" placeholder="username">
        <input type="text" name="email" class="email" placeholder="email">
        <input type="password" name="password" class="pass" placeholder="password">
        <input type="password" name="passwordC" class="passC" placeholder="conform password">
        <input type="submit" value="Register" class="reg" name="reg">
      </form>

      <?php
      $dbserver = "localhost";
      $dbusername = "root";
      $dbpassword = "";
      $dbname = "chatify";
      $conn = new mysqli($dbserver, $dbusername, $dbpassword, $dbname);
      if (isset($_POST["reg"])) {
        $username = isset($_POST["username"]) ? $_POST["username"] : "";
        $email = isset($_POST["email"]) ? $_POST["email"] : "";
        $password = isset($_POST["password"]) ? $_POST["password"] : "";
        $passwordC = isset($_POST["passwordC"]) ? $_POST["passwordC"] : "";
        if (!empty($username) || !empty($email) || !empty($password) || !empty($passwordC)) {
          if ($password == $passwordC) {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO chatifyTB (username, email, pass)
            VALUES('$username', '$email', '$hash')";
            if ($conn->query($sql)) {
              header("Location: index.html");
            };
          } else {
            echo "different password";
          };
        } else {
          echo "Fill the form fully please";
        };
      };
      $sql = "";
      //if ($conn->query($sql)) echo "Done";
      ?>
    </div>


  </div>
</body>

</html>