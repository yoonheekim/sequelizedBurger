module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define('Burger', {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    });

    Burger.associate = function(models){
        models.Burger.belongsTo(models.Customer, {
            // onDelete: "cascade",
            foreignKey :{
                allowNull: true
            }
        })
    }
    return Burger;
};