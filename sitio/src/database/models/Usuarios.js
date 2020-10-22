module.exports = (sequelize, dataType) => {
    let alias = "Usuarios";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.VARCHAR(45),
            allowNull:false
        },
        apellido:{
            type:dataTypes.VARCHAR(45),
            allowNull:false
        },
        direccion:{
            type:dataTypes.VARCHAR(45),
            allowNull:false
        },
        email:{
            type:dataTypes.STRING(45),
            allowNull:false,
            unique:true,
        },
        contraseña:{
            type:dataTypes.VARCHAR(45),
            allowNull:false
        },
        Ciudad:{
            type:dataTypes.VARCHAR(45),
            allowNull:false
        },
        Fecha:{
            type:dataTypes.DATA(),
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

        Usuarios.hasOne(models.store,{
            as:"carrito",
            foreignKey:"id_usuario"
        })

        Usuario.hasMany(models.domicilios, {
            as: "Domicilios",
            ForeignKey: "idUsuario",
        })
    }
    return Usuarios;
}