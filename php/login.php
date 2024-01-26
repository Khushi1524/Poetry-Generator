<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    include('conn.php');
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT);

    if ($conn->connect_errno) {
        echo "Failed to connect to MySQL: " . $conn->connect_error;
        exit();
    }

    $sql = "SELECT id,name FROM users WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result) {
        if ($result->num_rows === 1) {


            $row = $result->fetch_assoc();
            echo '{"name": "'.$row['name'].'"}';

        } else {
            echo "false";
        }
    } else {
        echo 'false';
    }

    $conn->close();
}
?>