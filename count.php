<?php

	function getUserIP()
	{
		$client  = @$_SERVER['HTTP_CLIENT_IP'];
		$forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
		$remote  = $_SERVER['REMOTE_ADDR'];
	
		if(filter_var($client, FILTER_VALIDATE_IP))
		{
			$ip = $client;
		}
		elseif(filter_var($forward, FILTER_VALIDATE_IP))
		{
			$ip = $forward;
		}
		else
		{
			$ip = $remote;
		}
	
		return $ip;
	}

	if (file_exists('counter.txt')) 
	{
		$fil = fopen('counter.txt', r);
		$dat = fread($fil, filesize('counter.txt')); 
		fclose($fil);
		
		$fil = fopen('counter.txt', wb);
		fwrite($fil, $dat+1 );
		fclose($fil);
		
		// get time and user-ip
		$date = date("m/d/Y h:i:s a", time());
		$userip = getUserIP();
		
		if (file_exists('visitor_time_ip.txt')) 
		{			
			$fil = fopen('visitor_time_ip.txt', a);
			$userip = getUserIP();
			fwrite($fil, ($dat+1 . "   " . $date . "   " . $userip . "\n") );
			fclose($fil);
		}
		else
		{
			$fil = fopen('visitor_time_ip.txt', wb);
			$userip = getUserIP();
			fwrite($fil, ("0\n" . "1" . "   " . $date . "   " . $userip . "\n") );
			fclose($fil);			
		}
	}

	else
	{
		$fil = fopen('counter.txt', wb);
		fwrite($fil, 1);
		echo '1';
		fclose($fil);
		
		// get time and user-ip
		$date = date("m/d/Y h:i:s a", time());
		$userip = getUserIP();
		
		$fil = fopen('visitor_time_ip.txt', wb);
		$userip = getUserIP();
		fwrite($fil, ("0\n" . "1" . "   " . $date . "   " . $userip . "\n") );
		fclose($fil);
	}
?>