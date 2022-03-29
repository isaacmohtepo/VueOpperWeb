<?php
date_default_timezone_set('America/Bogota');
$PUBLIC_KEY = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
$PRIVATE_KEY = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
$HORA_ACTUAL =  date("Y-m-d\TH:i:s\Z");

$signature = $PRIVATE_KEY.$PUBLIC_KEY.$HORA_ACTUAL;


$notification = array(
	"email" => "randommail2@mail.com",
	"password" => "strongkey1232",
	"apiKey" => $PUBLIC_KEY,
	"utcTimeStamp" => $HORA_ACTUAL,
	'signature' =>  hash("sha256", $signature),
);

echo json_encode($notification);

return;

?>