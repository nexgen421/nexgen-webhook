const { Tracking } = require('../models');

exports.handleWebhook = async (req, res) => {
    try {
        const { status_feed } = req.body;
        const { awbno: awbNumber, order_id: orderId, phone, first_name: firstName, last_name: lastName, email, country_code: countryCode, pickupdate, current_status: currentStatus, from, to, status_time: statusTime, order_data: orderData, carrier, carrier_id: carrierId, received_by: receivedBy, current_status_desc: currentStatusDesc, tracking_url: trackingUrl, callback_url: callbackUrl, webhook_sent_date: webhookSentDate, extra_fields: extraFields, scans } = status_feed[0]
        if (!awbNumber || !orderId) {
            return res.status(400).json({ error: 'awbNumber and orderId are required' });
        }
        console.log(req.body)
        const tracking = await Tracking.findOne({ where: { awbNumber, orderId } });
        console.log()
        const trackingData = { orderId, phone, firstName, lastName, email, countryCode, pickupdate, currentStatus, from, to, statusTime, orderData, carrier, carrierId, receivedBy, currentStatusDesc, trackingUrl, callbackUrl, webhookSentDate, extraFields, scans };

        if (tracking) {
            await tracking.update(trackingData);
            return res.status(200).json({ message: 'Record updated successfully' });
        } else {
            await Tracking.create({ awbNumber, ...trackingData });
            return res.status(201).json({ message: 'Record created successfully' });
        }
    } catch (error) {
        console.error('Error processing webhook:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};