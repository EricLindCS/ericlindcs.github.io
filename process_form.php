<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "lamnoda3@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $message, $headers);

    // Redirect back to the form page
    header("Location: index.html");
    exit();
}
?>
