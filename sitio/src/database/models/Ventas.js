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
        id_usuario:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        idMedioDepago:{
            type:dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tablaName: "Ventas",
        timestamps:true,
        underscored:true
    }
    let Ventas = sequelize.define(alias,cols,config);

    return Ventas;
}