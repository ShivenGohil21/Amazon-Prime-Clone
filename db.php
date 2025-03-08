<?php
$servername = "localhost"; // Change this if needed
$username = "root"; // Your database username
$password = "1234"; // Your database password
$database = "Website"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
