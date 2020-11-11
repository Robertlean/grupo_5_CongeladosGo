module.exports = (sequelize, dataTypes) => {
    let alias = "Categorias";
    let cols = {
        id_categoria:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        descripcion:{
            type:dataTypes.STRING(45),
            allowNull:false
        }
    }
    let config = {
        tablaName: "categorias",
        timestamps:false
    }
    const Categorias = sequelize.define(alias, cols, config);

    Categorias.associate = function(models){
        Categorias.hasMany(models.Productos,{
            as:"Productos",
            foreignKey:"id_producto"
        })
   }
    return Categorias;
}