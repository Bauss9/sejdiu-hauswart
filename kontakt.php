<?php
$email = $_POST['email'];
$message  = $_POST['handynummer'];
$message .= $_POST['plz'];
$message .= $_POST['objekt'];
$message .= $_POST['flache'];
$message .= $_POST['stock'];
$message .= $_POST['messagex'];


$headers = "From: $email";
$sent = mail('info@sejdiu-hauswart.com', 'Dienstleistungen rund ums Haus', $message, $headers);

if ($sent) {
    echo '<style type="text/css">
    #buchencont input, textarea, select, button, #checkboxes{
        display: none;
    }
    </style>'; 
    echo '<style type="text/css">
       #buchencont{
           transition: height 1s;
           height: 200px !important;
       }
       #showcompletion{
           transition: opacity 1s !important;
           display: initial !important;
           opacity: 1 !important;
       }
       </style>';
    } else {
    }
    ?>