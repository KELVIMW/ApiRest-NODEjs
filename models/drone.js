'use strict';
module.exports = (sequelize, DataTypes) => {
    const Drone = sequelize.define('Drone', {
        customer_image: DataTypes.STRING,
        customer_name: DataTypes.STRING,
        customer_address: DataTypes.STRING,
        battery: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        max_speed: {
            type: DataTypes.REAL,
            allowNull: false
        },
        average_speed: {
            type: DataTypes.REAL,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        current_fly: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {});
    Drone.associate = function(models) {
        // associations can be defined here
    };
    return Drone;
};