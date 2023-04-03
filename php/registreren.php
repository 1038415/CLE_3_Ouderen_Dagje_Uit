<?php
if(isset($_POST['submit'])) {
    /** @var mysqli $db */
    require_once "../php/databaseQuery.php";

    // Get form data
    $firstname = mysqli_escape_string($db, $_POST['first_name']);
    $lastname = mysqli_escape_string($db, $_POST['last_name']);
    $email = mysqli_escape_string($db, $_POST['email']);
    $password = $_POST['password'];

    // Server-side validation
    $errors = [];
    if($firstname == '') {
        $errors['first_name'] = 'Please fill in your name.';
    }
    if($lastname == '') {
        $errors['last_name'] = 'Please fill in your name.';
    }
    if($email == '') {
        $errors['email'] = 'Please fill in your email.';
    }
    if($password == '') {
        $errors['password'] = 'Please fill in your password.';

        $sql = "SELECT *
            FROM users
            WHERE email = '$email' AND password = '$password'";
    }

    // If data valid
    if(empty($errors)) {
        // create a secure password, with the PHP function password_hash()
        $password = password_hash($password, PASSWORD_DEFAULT);

        // store the new user in the database.
        $query = "INSERT INTO `users` (first_name, last_name, email, password) VALUES ('$firstname', '$lastname', '$email', '$password')";

        $result = mysqli_query($db, $query);

        if ($result) {
            header('Location: ../html/index.html');
            exit;
        }
    }
}
