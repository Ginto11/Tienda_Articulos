<?php 

	$conexion = mysqli_connect("localhost", "root", "", "tienda")or die("Error en la conexion");

	$query = "insert into contacto values(null, '".$_POST['nombre']."', '".$_POST['mensaje']."')";

	$resultado= mysqli_query($conexion, $query)or die("ERROR en el query");

	mysqli_close($conexion);


	echo "<script>  setTimeout(\"location.href='index.html'\", 1000);   </script>";




 ?>