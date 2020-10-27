module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id:{
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
        Ciudad:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        Fecha:{
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
            foreignKey:"id_usuario"
        })

        Usuarios.hasMany(models.domicilios, {
            as: "Domicilios",
            ForeignKey: "idUsuario",
        })
    }
    return Usuarios;
}