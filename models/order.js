module.exports = function (sequelize, dataTypes) {
    var order= sequelize.define("order", {
        date:
        {
            type: dataTypes.DATE,
            allowNull: false
        },
        total: { 
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        tax_total: {
            type:dataTypes.DECIMAL,
            notEmtpy:true
        }
    });

    order.associate=function(models){
        order.hasMany(models.order_line, {
            onDelete: "cascade"
          });
        

        order.hasMany(models.pos_tran, {
            onDelete: "cascade"
          });
        

        order.belongsTo(models.user,{
          onDelete: "CASCADE",
          foreignKey:{
            allowNull: false
          }
        });

        order.belongsTo(models.member,{
            onDelete: "CASCADE",
            foreignKey:{
              allowNull: false
            }
          });
      
    }

    return order;
};