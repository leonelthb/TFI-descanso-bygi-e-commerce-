# Verificación de la entrega

Pruebas realizadas el 24 de noviembre de 2026 sobre [la tienda pública](https://tfi-descanso-bygi-e-commerce.netlify.app/) y [la API de Render](https://descanso-by-gi-api.onrender.com/api/catalogo/producto).

## Producción

Verificamos en el navegador que la página de catálogo muestra tres productos ficticios. También ejecutamos pedidos HTTP contra la API real con el origen de Netlify. Se usaron dos cuentas temporales, una de cliente y otra de administrador, y se retiraron los registros de prueba cuando terminó la verificación.

| Operación comprobada | Resultado |
|---|---|
| Catálogo y tienda pública | HTTP 200. El catálogo muestra tres productos de demostración. |
| Registro, inicio de sesión y perfil | Registro 201. Inicio de sesión y perfil 200. Contraseña incorrecta 401. |
| Carrito | Consulta 200 y alta de un ítem 201. |
| Confirmación y consulta del pedido | Confirmación 201 y consulta del titular 200. El stock de la almohada bajó de 12 a 11. |
| Lista administrativa de pedidos | Cliente 403 y administrador 200. |
| Cancelación administrativa | HTTP 204. El stock volvió de 11 a 12. |

La API devolvió el origen autorizado de Netlify en los pedidos HTTP de prueba. Queda pendiente recorrer los formularios y el panel completo desde la interfaz del navegador, además de validar el inventario comercial.

## Pruebas automatizadas

Gradle ejecutó 10 pruebas con Java 21 sobre una base PostgreSQL 18 local reconstruida con el dump. Las 10 pasaron. El entorno de verificación usó Mockito como agente de Java porque Windows bloqueó su conexión dinámica al proceso de pruebas.

`PersistenciaPedidoTest` verifica el cálculo y la persistencia del pedido, el descuento y la reposición de stock, y el rechazo al confirmar si el stock ya no alcanza. Los tres casos HTTP agregados verifican 403 para un cliente que solicita la lista administrativa, 404 para un cliente que solicita un pedido ajeno y 401 cuando un usuario registrado envía credenciales inválidas.

## Reconstrucción de la base

El [dump entregado](../database/dumps/descanso_by_gi.sql) se restauró con `psql` en una base vacía de PostgreSQL 18 usando una sola transacción y detención ante el primer error. Se comprobaron nueve tablas, tres productos y cero filas en las tablas de usuarios, carritos, ítems, pedidos y detalles. Las [instrucciones de restauración](../database/README.md) se pueden seguir con PostgreSQL local.

## Historial del repositorio

El commit `69a2f49` de reintegración tiene dos padres. El primer padre, `bd6e181`, conserva el historial del repositorio original. El segundo, `1fa0c80`, corresponde al commit inicial del repositorio nuevo. Antes de esta corrección, el commit `ad8eb27` tenía 96 commits alcanzables, incluidos los cambios de autenticación, autorización y frontend.

```powershell
git log --graph --oneline --all
git show --no-patch --format="%h %p %s" 69a2f49
```
