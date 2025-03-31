module.exports = (sequelize, DataTypes) => {
    const Tracking = sequelize.define('Tracking', {
        awbNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        orderId: DataTypes.STRING,
        phone: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        countryCode: DataTypes.STRING,
        pickupdate: DataTypes.STRING,
        currentStatus: DataTypes.STRING,
        from: DataTypes.STRING,
        to: DataTypes.STRING,
        statusTime: DataTypes.STRING,
        orderData: DataTypes.STRING,
        carrier: DataTypes.STRING,
        carrierId: DataTypes.INTEGER,
        receivedBy: DataTypes.STRING,
        currentStatusDesc: DataTypes.STRING,
        trackingUrl: DataTypes.STRING,
        callbackUrl: DataTypes.STRING,
        webhookSentDate: DataTypes.STRING,
        extraFields: DataTypes.JSONB,
        scans: DataTypes.JSONB,
    }, {
        tableName: 'Tracking',  // This forces Sequelize to use 'Tracking' as the table name
    });

    return Tracking;
};