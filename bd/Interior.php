<?php
include('bd.php');
$conectar=conn();
$result3 = "SELECT MAX(id) AS id FROM datosp";
$query = mysqli_query($conectar, $result3);
if ($row = mysqli_fetch_row($query))
{
    $id = trim($row[0]);
}

$alturapisos = $_POST['altura'];
$materialp = $_POST['materialconstruccion'];
$materialp_text = implode("/", $materialp);
$tipomampo = $_POST['selectA'];
$conrefor = $_POST['selectB'];
$prefa = $_POST['selectC'];
$prefa_text = implode("/", $prefa);
$construccionpiso = $_POST['construido'];
$tipotecho = $_POST['techo'];
$hundimiento = $_POST['hundimiento'];
$grieta = $_POST['grieta'];
$resultadointe = $_POST['resultadointe'];

$sql="INSERT INTO interior(id, alturaentrepi, matcons, tipodemam, concretore, prefabricado, pisovivienda, tipotecho, hundimiento, grietas, resultadointe)
VALUES ('$id', '$alturapisos', '$materialp_text', '$tipomampo', '$conrefor', '$prefa_text', '$construccionpiso', '$tipotecho', '$hundimiento', '$grieta', '$resultadointe')";
$result = mysqli_query($conectar , $sql)or trigger_error("Query Failed! SQL- ERROR: ".mysqli_error($conectar), E_USER_ERROR);
mysqli_close($conectar);
header("location: ../bd/Resultado.php")





?>