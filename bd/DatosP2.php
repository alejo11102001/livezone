<?php
include('bd.php');
$conectar=conn();
$result1 = "SELECT MAX(id) AS id FROM datosp";
$query = mysqli_query($conectar, $result1);
if ($row = mysqli_fetch_row($query))
{
    $id = trim($row[0]);
}

$formacion = $_POST['formacion'];
$construccion = $_POST['construcción'];
$empresa = $_POST['empresa'];
$empresa_text = implode("/", $empresa);
$resultadodatosp = $_POST['resultadodatosp'];

$sql="INSERT INTO datosp2 (id, formacion, añoconstruccion, constructora, resultadodatosp2)
VALUES ('$id', '$formacion', '$construccion', '$empresa_text', '$resultadodatosp')";
$result = mysqli_query($conectar , $sql)or trigger_error("Query Failed! SQL- ERROR: ".mysqli_error($conectar), E_USER_ERROR);
mysqli_close($conectar);
header("location: ../Templates/Exterior.html")
?>