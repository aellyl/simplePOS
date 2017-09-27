module.exports = function (sequelize, dataTypes) {
    var promo= sequelize.define("promo", {
        description:
        {
            type: dataTypes.DATE,
            allowNull: false
        },
        percent: { 
            type: dataTypes.DECIMAL
        },
        dollarsOff: {
            type:dataTypes.DECIMAL
        },
        start_dt:{
            type: dataTypes.DATE,
            allowNull:false
        },
        end_dt:
        {
            type: dataTypes.DATE,
            allowNull:false
        }
    });

    promo.associate=function(models){
        promo.belongsTo(models.product,{
          onDelete: "CASCADE",
          foreignKey:{
            allowNull: true
          }
        });

        promo.hasMany(models.order_line, {
            onDelete: "cascade"
          });
    
      }

    return promo;
};