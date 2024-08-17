<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>USER REGISTRATION</title>
    <!-- Add Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body class="container mt-5">
    <h1>USERS REGISTRATION FORM </h1>
    
    <h2>SIGN IN</h2>
    <form method="post" action="crud.php" class="mb-3">
	    <div class="form-group">
            <label for="create_id">ID:</label>
            <input type="text" class="form-control" name="create_id" id="create_id">
        </div>
        <div class="form-group">
            <label for="create_name">Name:</label>
            <input type="text" class="form-control" name="create_name" id="create_name">
        </div>
        <div class="form-group">
            <label for="create_email">Email:</label>
            <input type="text" class="form-control" name="create_email" id="create_email">
        </div>

        <div class="form-group">
            <label for="create_password">password:</label>
            <input type="password" class="form-control" name="create_password" id="create_password">
        </div>
        <button type="submit" class="btn btn-primary" name="create">Create</button>
    </form>

    <h2>Members details</h2>
    <form method="post" action="crud.php" class="mb-3">
        <button type="submit" class="btn btn-info" name="read">Read</button>
    </form>

    <h2>update members details</h2>
    <form method="post" action="crud.php" class="mb-3">
        <div class="form-group">
            <label for="update_id">ID:</label>
            <input type="text" class="form-control" name="update_id" id="update_id">
        </div>
        <div class="form-group">
            <label for="update_name">New Name:</label>
            <input type="text" class="form-control" name="update_name" id="update_name">
        </div>
        <div class="form-group">
            <label for="update_email">New Email:</label>
            <input type="text" class="form-control" name="update_email" id="update_email">
        </div>

        <div class="form-group">
            <label for="update_password">New password:</label>
            <input type="password" class="form-control" name="update_password" id="update_password">
        </div>
        <button type="submit" class="btn btn-warning" name="update">Update</button>
    </form>

    <h2>delete your account</h2>
    <form method="post" action="crud.php" class="mb-3">
        <div class="form-group">
            <label for="delete_id">ID:</label>
            <input type="text" class="form-control" name="delete_id" id="delete_id">
        </div>
        <button type="submit" class="btn btn-danger" name="delete">Delete</button>
    </form>

   </body>
</html>


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
    $password = $_POST["create_password"];  // You were missing this line

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
    $newpassword = $_POST["update_password"];  // You were missing this line

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
