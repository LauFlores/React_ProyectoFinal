# DecoBazarLau | Decoración y Bazar


DecoBazarLau es una empresa que busca inspirar a las personas a crear espacios de calidez.

Link al sitio web: https://deco-bazar-lau.vercel.app/
## Detalle
El presente Ecommerce se elaboro en React, se conecto a una DB en Firebase/Firestore. DecoBazarLau es tienda de venta de artículos de bazar con foco en la decoración del hogar; en la página principal se puede ver un listado de los mismos, entrar a su detalle, filtrar por categoría y agregar al carrito (con control de no sobrepasar el stock). En el carrito se puede modificar la cantidad de productos, eliminarlos y finalizar la compra (Al finalizar se despliega un modal con un formulario para completar los datos del usuario), se genera una orden con un ID único. Se controla en Firebase que se haya generado dicha orden.

## Demostración del funcionamiento:

### Se muestra la pantalla principal con items y se filtra por categoría, con demostración de web responsive:

![1](https://github.com/LauFlores/React_ProyectoFinal/assets/132300235/97f1c891-1de7-4d22-afc9-3d5f30f933ce)

----

### A continuación se puede ver el acceso al detalle del producto, allí se valida la selección de stock y se agrega el producto al carrito, posteriormente se comprueba la lógica para actualizar la cantidad, dado que el producto se cargo previamente, y se agrega un condicional para nunca superar el stock. Se prueba la posibilidad de eliminar productos; para luego, finalizar la compra, que cuenta con el despliege modal con un formulario que al enviarse muestra al usuario su número de orden; esto último, se controla en el Firebase a fin de comprobar que se haya generado la orden:

![2](https://github.com/LauFlores/React_2daEntrega/assets/132300235/ddf667e9-3ef1-4ce4-b7a1-69f065b5b530)

----

## Tecnologías utilizadas
- Material UI
- React Bootstrap
- React Router Dom
- Sweetalert2
- Firebase/Firestore para la DB
