<?php
session_start();
	$_SESSION['testing'] = "vaina";
	if ($_GET['login'] && $_GET['passwd'] && $_GET['submit'] && $_GET['submit'] === "OK") {
			$_SESSION['login'] = $_GET['login'];
			$_SESSION['passwd'] = $_GET['passwd'];
	}
?>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Index</title>
</head>
<body>
	<form action="index.php" method="GET">
		Login: <input type="text" name="login" value="<?php echo $_SESSION['login']; ?>" />
		<br />
		Password: <input type="password" name="passwd" value="<?php echo $_SESSION['passwd']; ?>" />
		<br />
		<input type="submit" name="submit" value="OK"/>
	</form>
</body>
</html>
