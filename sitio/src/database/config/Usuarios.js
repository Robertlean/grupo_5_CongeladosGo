module.export = (sequelize, dataType) => {
    let alias = "Categorias";
    let cols = {
        id:{
            type:dataType.INTERGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type:dataType.VARCHAR(45),
            allowNull:false
        },
        apellido:{
            type:dataType.VARCHAR(45),
            allowNull:false
        },
        direccion:{
            type:dataType.VARCHAR(45),
            allowNull:false
        },
        contraseña:{
            type:dataType.VARCHAR(45),
            allowNull:false
        },
        Carrito_idCarrito:{
            type:dataType.VARCHAR(10)
        }
    }
    let config = {
        tableName:"users",
        timestamp:true,
        underscored:true
    }
    const Usuarios = sequelize.define(alias,cols,config);
    Usuarios.associate = function(models){
        Usuarios.hasOne(models.store,{
            as:"carrito",
            foreignKey:"id_usuario"
        })
    }
    return Usuarios;
}