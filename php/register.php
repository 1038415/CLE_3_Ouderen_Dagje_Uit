<?php
require_once "databaseQuery.php";

// Server-side validation
$firstName = mysqli_real_escape_string($conn, $_POST['first-name']);
$lastName = mysqli_real_escape_string($conn, $_POST['last-name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

if (empty($firstName) || empty($lastName) || empty($email) || empty($password)) {
    die('Please fill in all fields');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Invalid email format');
}

// Check if email already exists
$sql = "SELECT * FROM users WHERE email='$email'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    die('Email already exists');
}

$password = password_hash($password, PASSWORD_DEFAULT);

// Insert data into database
$sql = "INSERT INTO users (first_name, last_name, email, password) VALUES ('$firstName', '$lastName', '$email', '$password')";
header("Content-Type: application/json");
if (mysqli_query($conn, $sql)) {
    $data = 'User registered successfully';
} else {
    $data = 'Error registering user: ' . mysqli_error($conn);
}

mysqli_close($conn);

echo json_encode($data);