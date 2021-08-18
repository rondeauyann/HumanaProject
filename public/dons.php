<?php

include '../bootstrap.php';
include "../views/dons.phtml";

?>

<?php
    if (isset($_POST['mot_de_passe']) AND $_POST['mot_de_passe'] ==  "1234") // Si le mot de passe est bon
    {

?>
        <h2 class="afficheDons">WOUHOU</h2>
<?php
    }
    else
    {
?>
        <p class="afficheDons"> Faites une donation mensuelle pour avoir gratuitement le dernier contenu en ligne</p>
<?php
    }
?>