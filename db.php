<?php 

define("DB_HOST", "localhost");
define("DB_USER", "fluidpum_landing-page");
define("DB_PASSWORD", "V1Cf655PmNH+");
define("DB_DATABASE", "fluidpum_fluid-landing");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

if($conn->connect_error){
    die("Connection Failed: ". $conn->connect_error);
}

?>