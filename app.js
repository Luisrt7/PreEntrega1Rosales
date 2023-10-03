// Datos del pedido
const estadoPedido = "enviado";

// Condicional
if (estadoPedido === "pendiente") {
    console.log("Su pedido está pendiente de envío.");
} else if (estadoPedido === "enviado") {
    console.log("Su pedido ha sido enviado y está en camino.");
} else if (estadoPedido === "entregado") {
    console.log("Su pedido ha sido entregado con éxito. ¡Gracias por su compra!");
} else {
    console.log("Estado del pedido desconocido.");
}

// Ciclo
console.log("Seguimiento del pedido:");
for (let i = 1; i <= 5; i++) {
    console.log(`Día ${i}: El pedido está en tránsito.`);
}
