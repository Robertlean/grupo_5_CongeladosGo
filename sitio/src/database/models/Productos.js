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
            type:dataTypes.VARCHAR(1000),
            allowNull:false
        },
        imagen:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        descripcion:{
            type:dataTypes.VARCHAR(1000),
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
        tablaName: "Porductos",
        timetamps:true,
        underscored: true
    }
    const Porductos = sequelize.define(alias, cols, config);

    Porductos.associate = function(models){
        Porductos.belongsTo(models.carrito,{
            as:"Carrito",
            foreignKey:"id_carrito"
        })
        Porductos.belongsTo(models.Categorias,{
            as:"Categorias",
            foreignKey:"id_categorias"
        })
    }
    return Porductos;
}