<?php
require_once "databaseQuery.php";

// Server-side validation
$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

if (empty($username) || empty($password)) {
    die('Please fill in all fields');
}

// Check if user exists and password is correct
$sql = "SELECT * FROM users WHERE first_name='$username'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    if (password_verify($password, $row['password'])) {
        // Password is correct, create session and redirect to home page
        $_SESSION['user_id'] = $row['id'];
        $_SESSION['username'] = $username;
        echo 'success';
    } else {
        // Password is incorrect
        die('Incorrect wachtwoord');
    }
} else {
    // User doesn't exist
    die('User not found');
}

mysqli_close($conn);