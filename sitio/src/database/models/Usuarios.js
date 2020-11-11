module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
        idUsuarios:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        apellido:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        direccion:{
            type:dataTypes.STRING(45),
            allowNull:true
        },
        email:{
            type:dataTypes.STRING(45),
            allowNull:false,
            unique:true,
        },
        pass:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        ciudad:{
            type:dataTypes.STRING(45),
            allowNull:true
        },
        fecha:{
            type:dataTypes.DATE(),
        },
        rol: {
            type: dataTypes.STRING(45)
        }
    }
    let config = {
        tableName:"Usuarios",
        timestamps:true,
        underscored:true
    }
    const Usuarios = sequelize.define(alias,cols,config);
    
    /*Usuarios.associate = function(models){

        Usuarios.belongsToMany(models.Productos,{
            as:"Productos",
            through:"Carrito",
            foreignKey: "idUsuario",
            otherKey:"idProductos",
            timestamps: false
        })
    }*/
    return Usuarios;
}