<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST["create"])) {
    $id = $_POST["create_id"];
    $email = $_POST["create_email"];
    $password =password_hash($_POST["create_password"],PASSWORD_BCRYPT);

    $sql = "INSERT INTO details (id, email, password) VALUES ('$id', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Record created successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

if (isset($_POST["read"])) {
    $sql = "SELECT id, email, password FROM details";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "ID: " . $row["id"] . " - email: " . $row["email"] . " - password: " . $row["password"] . "<br>";
        }
    } else {
        echo "0 results";
    }
}

if (isset($_POST["update"])) {
    $id = $_POST["update_id"];
    $newemail = $_POST["update_email"];
    $newpassword = $_POST["update_password"];

    $sql = "UPDATE details SET email='$newemail', password='$newpassword' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

if (isset($_POST["delete"])) {
    $id = $_POST["delete_id"];

    $sql = "DELETE FROM details WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>