module.exports = function (sequelize, dataTypes) {
    var product= sequelize.define("product", {
        product_desc:
        {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: { 
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        uom: {
            type:dataTypes.STRING,
            notEmtpy:true
        },
        organic_ind:{
            type: dataTypes.BOOLEAN
        },
        orgin:{
            type:dataTypes.STRING
        }

    });

    product.associate = function(models) {
        product.hasMany(models.promo, {
          onDelete: "cascade"
        });
      

      product.hasMany(models.order_line, {
        onDelete: "cascade"
      });
    };

    return product;
};