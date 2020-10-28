module.exports = (sequelize, dataTypes) => {
    let alias = "Porductos";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(1000),
            allowNull:false
        },
        imagen:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        descripcion:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        cantidadDeVentas:{
            type:dataTypes.INTEGER(45),
            allowNull:false
        },
        precio:{
            type:dataTypes.DECIMAL(10,0),
            allowNull:false
        },
        Stock:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        id_categorias:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }
    let config = {
        tablaName: "Productos",
        timetamps:true,
        underscored: true
    }
    const Productos = sequelize.define(alias, cols, config);

<<<<<<< HEAD
    /*Productos.associate = function(models){
        Productos.belongsTo(models.carrito,{
=======
    Productos.associate = function(models){
        Productos.hasMany(models.Carrito,{
>>>>>>> 4c9fde0dc223beb6ee35422b127686ab37db7e60
            as:"Carrito",
            foreignKey:"id_carrito"
        })
        Productos.belongsTo(models.Categorias,{
            as:"Categorias",
            foreignKey:"id_categorias"
        })
    }*/
    return Productos;
}