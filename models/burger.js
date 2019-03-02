module.exports = function(sequalize, DataTypes){
    var Burger = sequalize.define('burger', {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });
    return Burger;
}