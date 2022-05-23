<?php
include_once('bd.php');
//Recibo todos los datos del formulario
$nombre1=$_POST['nombre1'];
$nombre2=$_POST['nombre2'];
$apellido1=$_POST['apellido1'];
$apellido2=$_POST['apellido2'];
$celular=$_POST['celular'];
$correo=$_POST['correo'];
$cedula=$_POST['cedula'];
$direccion=$_POST['direccion'];
$unidad=$_POST['unidad'];
$departamento=$_POST['departamento'];
$municipio=$_POST['municipio'];
$barrio=$_POST['barrio'];

    $conectar=conn();//ejecuta las conexiones a la b.d
    $sql="INSERT INTO datosp (primernombre, segundonombre, primerapellido, segundoapellido, celular, correo, cedula, direccion, unidad, departamento, municipio, barrio)
    VALUES ('$nombre1', '$nombre2', '$apellido1', '$apellido2', '$celular', '$correo', '$cedula', '$direccion', '$unidad', '$departamento', '$municipio', '$barrio')";
    $result = mysqli_query($conectar , $sql)or trigger_error("Query Failed! SQL- ERROR: ".mysqli_error($conectar), E_USER_ERROR);
    mysqli_close($conectar);
    header("location: ../Templates/DatosP2.html")

?>