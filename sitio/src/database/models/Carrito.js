module.exports = (sequelize, dataTypes) =>{
    let alias = "Carrito"
    let cols = {
        idCarrito:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        id_producto: {
            type: dataTypes.INTEGER(11)
        },
        id_usuario: {
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
