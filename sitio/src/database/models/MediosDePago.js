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

    mediosDePagos.associate = function(models){
<<<<<<< HEAD
        mediosDePagos.belongsTo(models.MediosDePagos,{
            as: "MediosDePagos",
            foreignKey: "id_MediosDePago"
=======
        mediosDePagos.hasMany(models.Ventas,{
            as: "mediosDePagos",
            foreignKey: "id_ventas"
>>>>>>> 4c9fde0dc223beb6ee35422b127686ab37db7e60
        })
    }

    return mediosDePagos
}