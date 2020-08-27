?<php
$to = 'jwrios.figueroa@gmail.com';
$firstname = $_POST["name"];
$subject = $_POST["subject"];
$email = $_POST["email"];
$text = $_POST["message"];



$headers = 'MIME-version: 1.0' . "\r\n";
$headers = "From:" . $email . "\r\n";  //Sender's E-mail
$headers = 'content-type: text/html; charset=iso-8859-1' . "\r\n";

$message = '<table style="width:100%">
    <tr>
        <td> '.$firstname.'  '.$subject.'</td>
</tr>
<tr><td>Email: '.$email.'</td></tr>
<tr><td>text: '.$text.'</td></tr>

</table>';

if (@mail($to, $email, $message, $headers))
{
    echo 'The message has been sent.';
} else {
    echo 'failed';
}

?>
