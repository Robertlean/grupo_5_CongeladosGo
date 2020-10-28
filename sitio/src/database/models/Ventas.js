module.exports = (sequelize, dataTypes) => {
    let alias = "Ventas";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        TotalDeVentas:{
            type:dataTypes.DECIMAL(10,0),
            allowNull:false
        },
        idUsuarios:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        idMedioDepago:{
            type:dataTypes.INTEGER(11)
        }
    }
    let config = {
        tablaName: "Ventas",
        timestamps:true,
        underscored:true
    }
    let Ventas = sequelize.define(alias,cols,config);

    /*Ventas.associate = function(models){
        Ventas.belongsTo(models.usuarios,{
            as:"responsable",
            foreignKey:"id_usuario"
        })
        /*Ventas.hasMany(models.Productos,{
            as:"productos",
            foreingKey:"id_tienda"
            
        })
    }*/

    return Ventas;
}