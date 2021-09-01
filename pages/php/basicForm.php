<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require('./Exception.php');
require('./PHPMailer.php');
require('./SMTP.php');


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = json_decode(file_get_contents("php://input"), true);

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 4;                      //Enable verbose debug output
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'advertiamailtest@gmail.com';                     //SMTP username
    $mail->Password   = 'dzatfgexEzXt2HQBlj';                               //SMTP password
    $mail->SMTPSecure = 'ssl';         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                 //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('advertiamailtest@gmail.com', 'Kontaktní formulář');
    $mail->addAddress('michaela.machalova@savills.cz');
    $mail->addReplyTo($data['email'], $data['firstName'] . ' ' . $data['lastName']);


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Nezávazná poptávka od ' . $data['firstName'] . ' ' . $data['lastName'];
    $mail->Body    = 
        "Jméno: " . $data['firstName'] . ' ' . $data['lastName'] . "<br />" .
        "Email: " . $data['email'] . "<br />" .
        "Telefonní číslo: " . $data['phone'] . "<br />" .
        "<strong>Zpráva: </strong>" . $data['message'] . "<br />";

    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo $e;
    echo "fail";
}
?>