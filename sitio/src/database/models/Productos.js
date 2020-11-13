module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
        id_producto:{
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
            type:dataTypes.STRING(100),
            allowNull:false
        },
        descripcion:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        cantidad_ventas:{
            type:dataTypes.INTEGER(45),
            allowNull:false
        },
        precio:{
            type:dataTypes.DECIMAL(10,0),
            allowNull:false
        },
        stock:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        id_categorias:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }
    let config = {
        tablaName: "productos",
        timetamps:false,
    }
    const Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(models){
        
        Productos.belongsTo(models.Categorias,{
            as:"categoria",
            foreignKey:"id_categorias"
        })
        // Productos.belongsToMany(models.Usuarios,{
        //     as:"Usuarios",
        //     through:"Carrito",
        //     foreignKey: "idProductos",
        //     otherKey:"idUsuarios",
        //     timestamps: false
        // })
    }
    return Productos;
}