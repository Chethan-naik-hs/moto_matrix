<?php
$mysql_host = 'localhost';
$mysql_user = 'root';
$mysql_password = '';
$mysql_name = "project";
$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_name);

if (!$conn) {
    die("Cannot connect to the database: " . mysqli_connect_error());
}

// Create the 'professors' table if it doesn't exist
$createTableQuery = "CREATE TABLE IF NOT EXISTS professors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE
)";
$conn->query($createTableQuery);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Check if the email is already registered in the 'professors' table
    $checkQuery = "SELECT * FROM professors WHERE email = ?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Email is already registered. Please use a different email.";
    } else {
        // Insert user data into the 'professors' table
        $insertQuery = "INSERT INTO professors (email) VALUES (?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("s", $email);

        if ($stmt->execute()) {
            echo "Registration successful. You can now log in.";
        } else {
            echo "Error: " . $stmt->error;
        }
    }

    $stmt->close();
}
?>
