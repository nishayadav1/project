const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constant = require('../lib/constants/constants');
const ObjectId = mongoose.Schema.Types.ObjectId;

var bannerModel = new Schema({
    adminId: {
        type: Schema.ObjectId,
        ref: "admin"
    },
    couponId: {
        type: Schema.ObjectId,
        ref: "coupon"
    },
    bannerName: {
        type: String,
        default: null
    },
    bannerType: {
        type: Number,
        enum: [
            constant.BANNER_TYPE.ADVERTISEMENT,
            constant.BANNER_TYPE.OFFER
        ] //0 for Advertisement, 1 for Offers
    },
    description: {
        type: String,
        default: null
    },
    photo: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    description: {
        type: String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

module.exports = mongoose.model('banner', bannerModel);