module.exports = (sequelize, dataTypes) => {
    let alias = "MediosDePagos"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        descripcion:{
            type: dataTypes.STRING(45),
            allowNull:false
        } 
    };
    let config = {
        tableName: "mediosDePagos",
        timestamps: false
    }
    
    const mediosDePagos = sequelize.define(alias, cols, config)

   /*  mediosDePagos.associate = function(models){
        mediosDePagos.hasMany(models.Ventas,{
            as: "mediosDePagos",
            foreignKey: "id_ventas"
        })
    } */

    return mediosDePagos
}