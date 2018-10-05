#!/usr/bin/env php

<?php
date_default_timezone_set("America/Los_Angeles");
$holder = fopen("/var/run/utmpx", "rb");
fseek($holder, 1256);
while (!feof($holder))
{
	$line = fread($holder, 628);
	if (strlen($line) == 628)
	{
		$line = unpack("a256user/a4id/a32line/ipid/itype/itime", $line);
		if ($line['type'] == 7)
		{
			echo trim($line['user']) . " ";
			echo trim($line['line']) . "  ";
			$time = date("M d H:i", $line['time']);
			echo $time . " \n";
		}
	}
}
?>
