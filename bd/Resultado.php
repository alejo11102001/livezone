<?php
include('bd.php');
$conectar=conn();
$result = "SELECT MAX(id) AS id FROM datosp";
$query = mysqli_query($conectar, $result);
if ($row = mysqli_fetch_row($query))
{
    $id = trim($row[0]);
}

$result1 = "SELECT resultadodatosp2 FROM datosp2 WHERE id=$id";
$query1 = mysqli_query($conectar, $result1);
if ($row = mysqli_fetch_row($query1))
{
    $resultado1 = trim($row[0]);
}
//echo "<script>console.log('$resultado1' );</script>";
$result2 = "SELECT resultadoexterior FROM exterior WHERE id=$id";
$query2 = mysqli_query($conectar, $result2);
if ($row = mysqli_fetch_row($query2))
{
    $resultado2 = trim($row[0]);
}
//echo "<script>console.log('$resultado2' );</script>";
$result3 = "SELECT resultadointe FROM interior WHERE id=$id";
$query3 = mysqli_query($conectar, $result3);
if ($row = mysqli_fetch_row($query3))
{
    $resultado3 = trim($row[0]);
}
//echo "<script>console.log('$resultado3' );</script>";
$total1 = ($resultado1 + $resultado2 + $resultado3);
$total = (($resultado1 + $resultado2 + $resultado3)*100)/60;
//echo "<script>console.log('$total' + '%'); </script>";
//echo "$total% de vulnerabilidad";
mysqli_close($conectar);



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../static/images/icono.png" type="image/x-icon">
    <link rel="stylesheet" href="../Static/style6.css">
    <script src="../bd/Resultado.php"></script>
    <title>Resultado Final</title>
</head>
<body>
<div class="contenedor">
    <main class="main">
        <header class="hero">
            <form action="../bd/Resultado.php" method="get">
            <div class="contenedor2">
                <div class="hero_texts">
                    <section class="result_container">
                        <h1 class="form_title">Resultado Final</h1>
                        <br><p class="form_text">Despues de elaborar el formulario tu resultado final es:</p>
                        <br><label class="label_new">Su puntaje es<input type="text" class="input_new" name="resultado" value="<?php echo $total1 ?>"/>puntos</label>
                        <br><label class="label_new">Por lo tanto, el porcentaje de vulnerabilidad es:<input type="text" class="input_new" name="resultado" value="<?php echo $total ?>"/>%</label>
                        <br><label class="result_label" id="resultado"></label><br>
                        <br><a href="../Templates/index.html"><input type="button" class="form_return" value="Ingresar nueva encuenta"></a><br>
                        <br><div id="current_date"></p>
                    </section>
                </div>
            </div>
            </form>
        </header>
    </main>
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer__consolidado">
                <div class="footer__texts">
                    <br><br><br><br><p class="footer__copy">Proyecto realizado por estudiantes de Ingeniería Civil</p><br>
                    <p>Universidad Católica Luis Amigó, sede Medellín<br>Tv. 51a ##67B 90, Medellín, Antioquia</p><br>
                </div>
            </div>
        </div>
    </footer>
</div>
</body>
</html>
<script>
    document.getElementById("current_date").innerHTML = Date();
</script>