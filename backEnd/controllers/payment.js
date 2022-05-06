import Iyzipay from 'iyzipay'
import OrderModel from '../models/order'
import asyncErrorWrapper from '../helpers/error/asyncErrorWrapper'


const iyzipay = new Iyzipay({
    uri: 'https://sandbox-api.iyzipay.com',
    apiKey: 'sandbox-SnstPN51QTlGZJCzFfZRO97UqRQxiZHj',
    secretKey: 'sandbox-WozUB8ZPvEpGhI0NDPDK7M86cP6M4AkX',
})
export const checkout = async (req, res, next) => {

    const order = await OrderModel.findById(req.params.orderId).populate([{ path: 'address' }, { path: 'user' }, { path: 'category' }])



    order.items.forEach(item => {


        item['id'] = item._id
        item['itemType'] = Iyzipay.BASKET_ITEM_TYPE.PHYSICAL
        item['category1'] = item.category.category
        item['price'] = String(item.price * item.quantity)

        delete item['_id']
    })


    const request = {
        locale: Iyzipay.LOCALE.TR,
        conversationId: String(order._id),
        price: String(order.totalPrice),
        paidPrice: String(order.totalPrice),
        currency: Iyzipay.CURRENCY.TRY,
        paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
        callbackUrl: `http://localhost:5000/api/payment/callback/${order._id}`,
        enabledInstallments: [2, 3, 6, 9],
        buyer: {
            id: String(order.user._id),
            name: order.user.name,
            surname: order.user.name,
            gsmNumber: String(order.user.phone),
            email: order.user.email,
            identityNumber: '74300864791',
            lastLoginDate: '2015-10-05 12:43:35',
            registrationAddress: String(order.address.address),
            ip: '85.34.78.112',
            city: order.address.city.cityName,
            country: 'Turkey',
            zipCode: order.address.zipCode,
        },
        shippingAddress: {
            contactName: order.address.name,
            city: order.address.city.cityName,
            country: 'Turkey',
            address: order.address.address,
            zipCode: order.address.zipCode,
        },
        billingAddress: {
            contactName: order.address.name,
            city: order.address.city.cityName,
            country: 'Turkey',
            address: order.address.address,
            zipCode: order.address.zipCode,
        },
        basketItems: order.items,
    }
    iyzipay.checkoutFormInitialize.create(request, function(err, result) {
        console.log("sds")
        console.log(result)

        res.status(200)
            .json({
                success: true,
                order: order,
                checkoutFormContent: `${result.checkoutFormContent}`,
            })
    })
}
export const callbackUrl = asyncErrorWrapper(async (req, res, next) => {
    iyzipay.checkoutForm.retrieve({
        locale: Iyzipay.LOCALE.TR,
        conversationId: req.params.conversationId,//conversationId = orderId
        token: req.body.token,
    }, async function(err, result) {
        if (result.status === 'success') {
            await OrderModel.findByIdAndUpdate(req.params.conversationId, { status: 0 })
        } else {
            await OrderModel.findByIdAndUpdate(req.params.conversationId, { status: 1 })
        }
        console.log(err, result)
        res.redirect(`http://localhost:8080/cart?paymentResult=${JSON.stringify(result)}`)
    })
})
