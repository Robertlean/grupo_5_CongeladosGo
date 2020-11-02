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
            allowNull:false
        },
        email:{
            type:dataTypes.STRING(45),
            allowNull:false,
            unique:true,
        },
        contraseña:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        ciudad:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        fecha:{
            type:dataTypes.DATE(),
        },
        imagen: {
            type: dataTypes.STRING(100)
        }
    }
    let config = {
        tableName:"Usuarios",
        timestamps:true,
        underscored:true
    }
    const Usuarios = sequelize.define(alias,cols,config);
    
    Usuarios.associate = function(models){

        Usuarios.hasOne(models.Carrito,{
            as:"carrito",
            foreignKey:"idUsuario"
        })

        Usuarios.belongsToMany(models.Productos,{
            as:"Productos",
            through:"Ventas",
            foreignKey: "idUsuarios"
        })
    }
    return Usuarios;
}