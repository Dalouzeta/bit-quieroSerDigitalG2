const Producto = require('../models/Producto');

exports.crearProducto = async(req, res) => {
    // console.log('Creando el producto desde el controlador');
    // console.log(req.body);

    try {

        let data_producto;
        data_producto = new Producto(req.body);
        await data_producto.save();
        res.send(data_producto)

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }

}
