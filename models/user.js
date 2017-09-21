module.exports = function (sequelize, dataTypes) {
    var user= sequelize.define("user", {
        username:
        {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: { 
            type: dataTypes.STRING,
            allowNull: false
        },
        fname: {
            type:dataTypes.STRING,
            notEmtpy:true
        },
        lname:{
            type: dataTypes.STRING,
            notEmpty: true
        },
        email:{
            type:dataTypes.STRING,
            validate:{
                isEmail: true
            }
        },
        role:{
            type:dataTypes.STRING,  
        },
        last_login: {
            type:dataTypes.DATE
        }

    });

    return user;
};