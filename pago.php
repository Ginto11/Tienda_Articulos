<?php 

	$valorPorPagar = $_POST['total'];
	$valorPagado = $_POST['valor_pagado'];

	if ($valorPorPagar < $valorPagado) {
			$saldoAFavor = $valorPagado - $valorPorPagar;
			echo "<script> alert('Has Pagado y tienes un saldo a favor de: $saldoAFavor pesos'); </script>";
			ingresoDatos();
	} else if($valorPorPagar == $valorPagado){
			echo "<script>  alert('Has pagado, tu pedido llegara a tu direccion');    </script>";
			ingresoDatos();
	} else if ($valorPorPagar > $valorPagado) {
			echo "<script> alert('Fondos insuficientes');
				setTimeout(\"location.href='ropa.html'\", 1000);
			   </script>";
	}


	function ingresoDatos(){
		if(isset($_POST['pagar'])){

		$conexion = mysqli_connect("localhost", "root", "", "tienda");

		$sql = "insert into pagos values(null, '".$_POST['nombre']."', ".$_POST['subtotal'].", ".$_POST['iva'].", ".$_POST['total'].", '".$_POST['direccion']."', '".$_POST['elementos']."', ".$_POST['valor_pagado'].")";

		$resultado = mysqli_query($conexion, $sql);

		mysqli_close($conexion);



		echo "<script> setTimeout(\"location.href='ropa.html'\", 1000);   </script>";
		}
	}

	







 ?>