const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constant = require('../lib/constants/constants')
const ObjectId = mongoose.Schema.Types.ObjectId;

var couponModel = new Schema({
    retailerId: [{
        _id: {type: Schema.ObjectId, ref: "retailer" },
        name: {type: String, required: true}
    }],
    adminId: {
        type: Schema.ObjectId, ref: "admin" 
    },
    couponCode: {
        type: String,
        required: true
    },
    discountType: {
        type: Number,
        enum: [
            constant.DISCOUNT_TYPE.FLAT_FEE,
            constant.DISCOUNT_TYPE.PERCENTAGE
        ] //0 for Flat Fee, 1 Percentage
    },
    couponName: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    discount: {
        type: Number
    },
    discountUpto: {
        type: Number,
        default: null
    },
    minCartAmount: {
        type: Number
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

module.exports = mongoose.model('coupon', couponModel);