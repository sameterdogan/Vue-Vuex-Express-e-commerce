import Iyzipay from 'iyzipay'
import OrderModel from "../models/order"

const iyzipay = new Iyzipay({
    uri: 'https://sandbox-api.iyzipay.com',
    apiKey: 'sandbox-SnstPN51QTlGZJCzFfZRO97UqRQxiZHj',
    secretKey: 'sandbox-WozUB8ZPvEpGhI0NDPDK7M86cP6M4AkX',
})
export const checkout = async (req, res, next) => {


    const order= await OrderModel.findById(req.params.orderId).populate([{path:"address"},{path:"user"}])

    const request = {
        locale: Iyzipay.LOCALE.TR,
        conversationId: order._id,
        price: "1",
        paidPrice: "1.2",
        currency: Iyzipay.CURRENCY.USD,
        paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
        callbackUrl: 'http://localhost:5000/api/order/callback',
        enabledInstallments: [2, 3, 6, 9],
        buyer: {
            id: order.user._id,
            name: order.address.name,
            surname: order.address.name,
            gsmNumber: order.address.phone,
            email: order.user.email,
            identityNumber: '74300864791',
            lastLoginDate: '2015-10-05 12:43:35',
            registrationDate: '2013-04-21 15:12:09',
            registrationAddress: order.address.address,
            ip: '85.34.78.112',
            city: order.address.city,
            country: 'Turkey',
            zipCode: order.address.zipCode,
        },
        shippingAddress: {
            contactName: 'Jane Doe',
            city: order.address.city,
            country: 'Turkey',
            address: order.address.address,
            zipCode: order.address.zipCode,
        },
        billingAddress: {
            contactName: 'Jane Doe',
            city: order.address.city,
            country: 'Turkey',
            address: order.address.address,
            zipCode: order.address.zipCode,
        },
        basketItems: [
            {
                id: 'BI101',
                name: 'Binocular',
                category1: 'Collectibles',
                category2: 'Accessories',
                itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: '0.3'
            },
            {
                id: 'BI102',
                name: 'Game code',
                category1: 'Game',
                category2: 'Online Game Items',
                itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                price: '0.5'
            },
            {
                id: 'BI103',
                name: 'Usb',
                category1: 'Electronics',
                category2: 'Usb / Cable',
                itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: '0.2'
            }
        ],
    }
    iyzipay.checkoutFormInitialize.create(request, function(err, result) {
        console.log(result)
        res.status(200)
            .json({
                success: true,
                order:order,
                checkoutFormContent: `${result.checkoutFormContent}`,
            })
    })
}
export const callbackUrl = async (req, res, next) => {
    iyzipay.checkoutForm.retrieve({
        locale: Iyzipay.LOCALE.TR,
        conversationId: '123456789',
        token: req.body.token,
    }, function(err, result) {
        console.log(err, result)
        res.redirect(`http://localhost:8080/result-checkout?result=${JSON.stringify(result)}`)
    })
}
