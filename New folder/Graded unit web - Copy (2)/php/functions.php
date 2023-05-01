<?php
$host="127.0.0.1"; // Host IP
$db_username="root"; // Mysql username
$db_password="root"; // Mysql password
$db_name="graded_unit"; // Database name

// Create connection
$conn = new mysqli($host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
};
?>