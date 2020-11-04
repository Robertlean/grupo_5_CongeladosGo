module.exports = (sequelize, dataTypes) =>{
    let alias = "Carrito"
    let cols = {
        idCarrito:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        idProductos: {
            type: dataTypes.INTEGER(11)
        },
        idUsuario: {
            type: dataTypes.INTEGER(11)
        }               
    };
    
    let config = {
        tableName: "Carrito",
        timestamps: false
    }    
    
    const Carrito = sequelize.define(alias, cols, config)

    return Carrito
}
