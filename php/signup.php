<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contact = $_POST["contact"];
    $password = $_POST["password"];

    if ($name != "" && $email != "" && $password != "" && $contact != "") {


        include('conn.php');
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT);

        if ($conn->connect_errno) {
            $response = 'false';
        } else {
            $sql = "INSERT INTO users (name, email, password, contact) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);

            if ($stmt) {
                $stmt->bind_param("ssss", $name, $email, $password, $contact);
                if ($stmt->execute()) {
                    $response = 'true';
                } else {
                    $response = 'false';
                }

                $stmt->close();
            } else {
                $response = 'false';
            }
        }

        $conn->close();
        echo $response;
    }



} else {
    echo 'false';
}

?>