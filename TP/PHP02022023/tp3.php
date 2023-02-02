<!DOCTYPE html>
<html>
<body>
	Nous sommes le <?php echo Date("j/m/Y"); ?><br>
	<?php
		echo "il est ".Date("H:i:s")."<br>";
		if (Date("H") < 12) {
			echo "Bonne matinee";
		} else {
			echo "Bon apres midi";
		}
	?>
</body>
</html>