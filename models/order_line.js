module.exports = function (sequelize, dataTypes) {
    var order_line= sequelize.define("order_line", {
        qty:
        {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price: { 
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        discount: {
            type:dataTypes.DECIMAL,
        },
        line_no:
        {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        tax:
        {
            type: dataTypes.DECIMAL,
            allowNull: false
        }

    });

    order_line.associate=function(models){
       
        order_line.belongsTo(models.order,{
          onDelete: "CASCADE",
          foreignKey:{
            allowNull: false
          }
        });

        order_line.belongsTo(models.product,{
            onDelete: "CASCADE",
            foreignKey:{
              allowNull: false
            }
          });

          order_line.belongsTo(models.promo,{
            onDelete: "CASCADE",
            foreignKey:{
              allowNull: true
            }
          });
      }

    return order_line;
};