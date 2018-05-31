<!DOCTYPE html>
<html>
    <head>
		<meta charset="UTF-8">
        <title>Weltmeisterschaft 2018</title>
        <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="WM_style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="WM_Tippspiel.js"></script>
    </head>
    <body>
        <div class="container" id="Seite">
        </div>
	<?php
	echo "test";
	$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
	$txt = "John Doe\n";
	fwrite($myfile, $txt);
	$txt = "Jane Doe\n";
	fwrite($myfile, $txt);
	fclose($myfile);
	?> 
    </body>
</html>