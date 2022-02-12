<?php



require_once('db.php');



if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone'])){

    if(isset($_POST['submit'])){

      $name = $_POST['name'];

      $email = $_POST['email'];

      $phone = $_POST['phone'];

      $product = $_POST['product'];

      $message = $_POST['massage'];

      $sql = "INSERT INTO fluid (fluid_name,email,phone,product,massage) VALUES ('$name', '$email', '$phone', '$product', '$message')";

      if(mysqli_query($conn, $sql)){

      header('Location: index.html');

      exit;
          
      }else{

          echo "Fields Required";
      }

  }

} 



?>