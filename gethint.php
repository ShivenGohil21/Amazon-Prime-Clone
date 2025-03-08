<?php
$a[] = "Mirzapur";
$a[] = "Maxton Hall";
$a[] = "Kya Lool Hai Hum";
$a[] = "Made in Heaven";
$a[] = "Farzi";
$a[] = "Hostel Daze";
$a[] = "Yodha";
$a[] = "How to Wait Billy Walish";
$a[] = "The Family Men";
$a[] = "Flames";
$a[] = "Desi Boys";
$a[] = "Middle Class Love";
$a[] = "Good Newws";
$a[] = "Badmaaash Company";
$a[] = "Maidaan";
$a[] = "Gehraiyaan";
$a[] = "Baby Driver";
$a[] = "Shershaan";
$a[] = "Heyy Babyy";
$a[] = "Jugjugg Jeeyo";
$a[] = "The Ministry of Ungentlemanly Warefare";
$a[] = "My Spy the Eternal City";
$a[] = "The Dirty Picture";
$a[] = "Heyy Babyy";
$a[] = "Ki & Ka";
$a[] = "Break Ke Baad";
$a[] = "Eurotrip";
$a[] = "Mere Brother Ki Dulhan";
$a[] = "I,Me Aur Mai";
$a[] = "Onpiece";
$a[] = "Dr.Stone Stone Wars";
$a[] = "Psycho-Pass";
$a[] = "Pyscho-Pass Providence";
$a[] = "Fate Stay Night";
$a[] = "Robotech";
$a[] = " Afro Samurai";
$a[] = " The Ministry Of Ungerntlemanly Warfare";
$a[] = " My Spy The Eternal City";
$a[] = " The Dirty Picture";
$a[] = " Ki & Ka";
$a[] = " Break Ke Baad";
$a[] = " Eurotrip";
$a[] = " Mere Brother Ki Dulhan";
$a[] = " Student Of the Year 2";
$a[] = " Mohabbatein";
$a[] = " Break Ke Baad";
$a[] = " Action Replay";
$a[] = " Waqt";
$a[] = " Love Ni Bhavai";
$a[] = " Besharam";
$a[] = " Singham";
$a[] = "KGF Ch:2";
$a[] = " Pathan";
$a[] = " Golmaal Again";
$a[] = "Imaginary";
$a[] = " Talk To Me";
$a[] = " 1920";
$a[] = "The Boys";
$a[] = "Batman caped Crusader";
$a[] = "Flash";
$a[] = "Gen V";
$a[] = "Desperate Housewives";
$a[] = "Best Of Aib";
$a[] = "Flames";
$a[] = "Rasbari";
$a[] = "Jee Karda";
$a[] = "Singham";
$a[] = "Stree";
$a[] = "Attack On Titan";
$a[] = "Afro Samurai";
$a[] = "Naruto";
$a[] = "One Piece";
$a[] = "Dr.Stone";
$a[] = "Pyscho-Pass";
$a[] = "Pyscho-Pass Providence";
$a[] = "Afro";
$a[] = "Rayaana";
$a[] = "Citadel";










// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = [];

// Lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len = strlen($q);
  foreach ($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      $hint[] = $name;
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
if (empty($hint)) {
  echo "no suggestion";
} else {
    echo '<ul style="list-style-type: none; padding: 0;">';
  foreach ($hint as $name) {
    echo "<li>" . htmlspecialchars($name) . "</li>";
  }
  echo "</ul>";
}
?>