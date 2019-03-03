module.exports = function(sequelize, dataType){
    var Customer = sequelize.define("Customer", {
        customerName : {
            type : dataType.STRING,
            allowNull: false
        }
    });

    Customer.associate = function(models){
        models.Customer.hasMany(models.Burger, {
            foreignKey : {
                allowNull: false
            }
        })
    }
    return Customer;
}