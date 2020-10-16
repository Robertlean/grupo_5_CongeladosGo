module.exports = (sequelize, dataType) => {
    let alias = "Porductos";
    let cols = {
        id:{
            type:dataType.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:dataType.VARCHAR(1000),
            allowNull:false
        },
        imagen:{
            type:dataType.STRING(45),
            allowNull:false
        },
        descripcion:{
            type:dataTypes.VARCHAR(1000),
            allowNull:false
        },
        cantidadDeVentas:{
            type:dataType.INTEGER(45),
            allowNull:false
        },
        precio:{
            type:dataTypes.DECIMAL(10,0),
            allowNull:false
        },
        Stock:{
            type:dataType.INTEGER(11),
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