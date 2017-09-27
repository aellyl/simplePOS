module.exports = function (sequelize, dataTypes) {
    var pos_tran= sequelize.define("pos_tran", {
        type:
        {
            type: dataTypes.STRING,
            allowNull: false
        },
        amount: { 
            type: dataTypes.DECIMAL,
            allowNull:false
        }
    });

    pos_tran.associate=function(models){
        pos_tran.belongsTo(models.order,{
          onDelete: "CASCADE",
          foreignKey:{
            allowNull: false
          }
        });
    }

    return pos_tran;
};