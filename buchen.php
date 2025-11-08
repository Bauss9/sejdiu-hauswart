<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dienstleistungen rund ums Haus</title>
    <?php include('kontakt.php'); ?>
    <link rel="stylesheet" href="index.css">
    <link rel='stylesheet' href="buchen.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;1,600;1,700&display=swap" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script src="buchen.js"></script>
    
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,600&display=swap" rel="stylesheet">
</head>
<body>
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <div id="header">
        <div id="headerinfo">
        <i class="fas fa-phone"></i>
        <p>+49 1762 2764430</p><div id="space"></div><i class="fas fa-envelope"></i><p>info@sejdiu-hauswart.com</p>

        <div id="socialmedia">
            <i class="fab fa-facebook" style="color: #4064b3; font-size: 22.5px;"></i>
            <i class="fab fa-instagram" style="font-size: 22.5px;"></i>
        </div>
            </div>
    </div>
    <div id="menu">
        <div id="maincontainer">
            <div id="logo">
                <img src="assets/logo.png">
            </div>
            <div id="newmenu">
                <div id="bar">
                <a href="index.html" style="text-decoration: none;"><div id="button"><h1>HOME</h1></div></a>
                    <a href="buchen.html" style="text-decoration: none;"><div id="button" style="background-color: rgb(233, 211, 86);"><h1>BUCHEN</h1></div>
                    <a href="zeiten.html" style="text-decoration: none;"><div id="button"><h1>ZEITEN</h1></div></a>
                    <a href="kontakt.html" style="text-decoration: none;"><div id="button"><h1>KONTAKT</h1></div></a>
                    <!--
                        <a href="buchen" style="text-decoration: none;"><div id="button"><h1>BUCHEN</h1></div>
                    <a href="zeiten" style="text-decoration: none;"><div id="button"><h1>ZEITEN</h1></div></a>
                    <a href="kontakt" style="text-decoration: none;"><div id="button"><h1>KONTAKT</h1></div></a>
                    <a href="galerie" style="text-decoration: none;"><div id="button"><h1>GALERIE</h1></div></a>
                    -->
                </div>
            </div>
        </div>
    </div>

    <div id="slider">
        <h1>Alles rund um Ihr Haus</h1>
        <img src="assets/line.png" style="position: absolute; width: 75%; height: 85%; margin-top: -50px;">
        <div id="blackslider"></div>
</div>

<div id="buchung-haupt">
    <h1>Buchen</h1>
    <div id="line"></div>
    <div id="kostenloss">Anfrage unverbindlich!</div>
    <form action="" method="post">
    <div id="buchencont">
        <div id="showcompletion">Vielen Dank für Ihre Anfrage! Wir melden uns bei Ihnen schnellstmöglich<p style="color: green;">2-16h</p>.</div>
        <div id="checkboxes">
            <h1>Wählen Sie bitte aus...</h1>
            <div id="garten" name="garten" onclick='changeGarten()'>- Garten</div>
            <div id="umzugggg" name="yaro" onclick="changeUmzug()">- Umzug</div>
            <div id="entrumpelung" name="yaro2" onclick="changeEntr()">- Entrümpelung</div>
        </div>
        <input type="email" name="email" placeholder="E-Mail Adresse" required>
        <input type="text" name="handynummer" placeholder="Handynummer (freiwillig)" required>
        <input type="text" name="plz" placeholder="Postleitzahl" required>
        <select id="selectionid"  name="objekt" required>
            <option disabled selected value style="display: none;"></option>
            <option value="haus">Haus</option>
            <option value="wohnung">Wohnung</option>
            <option value="lager">Lager</option>
            <option value="buro">Büro</option>
            <option value="anderes">Sonstiges</option>
        </select>
        <input type="text" name="flache" placeholder="Fläche in qm" required>
        <input type="text" name="stock" placeholder="Stockwerke" required>
        <textarea id="selectionid" name="messagex" required placeholder="Detaillierte Informationen / sonstige Wünsche" style="height: 250px;"></textarea>
        <button type="submit">Absenden</button>
    </div>
</form>
</div>

   


    <div id="footer">
        <div id="context">
            <div id="firma">
                <h1>Unsere Firma</h1>
                <a href="#" style="text-decoration: none; color: white;"><p>Über uns</p></a>
                <a href="#" style="text-decoration: none; color: white;"><p>Kontakt</p></a>
                <a href="#" style="text-decoration: none; color: white;"><p>Standorte</p></a>
                <a href="#" style="text-decoration: none; color: white;"><p>Galerie</p></a>
            </div>
            <div id="firma">
                <h1>Unterseiten</h1>
                <a href="#" style="text-decoration: none; color: white;"><p>Über uns</p></a>
                <a href="#" style="text-decoration: none; color: white;"><p>Kontakt</p></a>
                <a href="#" style="text-decoration: none; color: white;"><p>Standorte</p></a>
                <a href="#" style="text-decoration: none; color: white;"><p>Galerie</p></a>
            </div>
            <div id="firma2">
                <h1 style="width: 300px;">Ich habe eine Frage...</h1>
                <input id="input55" type="text" placeholder="E-Mail Adresse" style="height: 25px; width: 250px; outline: none;">
                <textarea id="input56" placeholder="Ihre Frage" maxlength="160"></textarea>
                <div id="button-frage">FRAGEN</div>
            </div>
        
        </div>
        <h4>© 2022 Dienstleistungen rund ums Haus</h4>
    </div> 
    
</body>

</html>