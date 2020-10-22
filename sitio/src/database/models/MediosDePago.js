module.export = (sequilize, dataTypes) => {
    let alias = "MediosDePagos"
    let cols = {
        id: {
            type: dataTypes.INTERGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        descripcion:{
            type: dataTypes.VARCHAR(45),
            allowNull:false
        } 
    };
    let config = {
        tableName: "mediosDePagos",
        timestamps: false
    }
    
    const mediosDePagos = sequelize.define(alias, cols, config)

    return mediosDePagos
}