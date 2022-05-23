<?php
include('bd.php');
$conectar=conn();
$result2 = "SELECT MAX(id) AS id FROM datosp";
$query = mysqli_query($conectar, $result2);
if ($row = mysqli_fetch_row($query))
{
    $id = trim($row[0]);
}

$area = $_POST['area'];
$ubicacion = $_POST['ubicacion1'];
$elemento = $_POST['elemento'];
$usoactual = $_POST['uso'];
$usoactual_text = implode("/", $usoactual);
$usodiferente = $_POST['uso1'];
$usoanterior = $_POST['uso2'];
$usoanterior_text = implode("/", $usoanterior);
$usoprimerpiso = $_POST['usoP'];
$totalpisos = $_POST['piso'];
$ubicacionpiso = $_POST['ubicacion'];
$sotanos = $_POST['sotano'];
$compartemuro = $_POST['muro'];
$equipos = $_POST['equipo'];
$equipos_text = implode("/", $equipos);
$resultadoexterior = $_POST['resultadoexterior2'];

$sql="INSERT INTO exterior(id, area, ubicacion, elementosc, usoactual, tuvousodiferente, usoanterior, usoprimerpiso, totalpisos, ubicacionpiso, sotanos, compartemuro, presenciaequipos, resultadoexterior)
VALUES ('$id', '$area', '$ubicacion', '$elemento', '$usoactual_text', '$usodiferente', '$usoanterior_text', '$usoprimerpiso', '$totalpisos', '$ubicacionpiso', '$sotanos', '$compartemuro', '$equipos_text', '$resultadoexterior')";
$result = mysqli_query($conectar , $sql)or trigger_error("Query Failed! SQL- ERROR: ".mysqli_error($conectar), E_USER_ERROR);
mysqli_close($conectar);
header("location: ../Templates/Interior.html")
?>


