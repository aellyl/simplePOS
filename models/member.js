module.exports = function (sequelize, dataTypes) {
    var member= sequelize.define("member", {
        alias:
        {
            type: dataTypes.STRING,
            allowNull: false
        }

    });

    member.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        member.hasMany(models.order, {
          onDelete: "cascade"
        });
      };

    return member;
};