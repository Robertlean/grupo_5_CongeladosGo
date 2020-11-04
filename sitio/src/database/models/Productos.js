module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
        idProductos:{
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
        idCategorias:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }
    let config = {
        tablaName: "Productos",
        timetamps:false,
        underscored: true
    }
    const Productos = sequelize.define(alias, cols, config);

    /*Productos.associate = function(models){
        
        Productos.belongsTo(models.Categorias,{
            as:"categorias",
            foreignKey:"idCategorias"
        })
        Productos.belongsToMany(models.Usuarios,{
            as:"Usuarios",
            through:"Carrito",
            foreignKey: "idProductos",
            otherKey:"idUsuarios",
            timestamps: false
        })
    }*/
    return Productos;
}