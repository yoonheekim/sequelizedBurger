module.exports = function(sequelize, DataTypes){
    var Customer = sequelize.define("Customer", {
        customerName : {
            type : DataTypes.STRING,
            allowNull: false
        }
    });

    Customer.associate = function(models){
        models.Customer.hasMany(models.Burger, {
            // onDelete: "cascade"
            // foreignKey :{
            //     allowNull: true
            // }
        })
    }
    return Customer;
}