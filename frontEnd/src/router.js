import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/store'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        //Admin routes
        {
            path: '/admin',
            name: 'admin',
            component: () => import('@/pages/admin/product/Products'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            path: '/admin/add-product',
            name: 'addProduct',
            component: () => import('@/pages/admin/product/AddProduct'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            name: 'edit-product',
            path: '/admin/edit-product/:slugProduct',
            component: () => import('@/pages/admin/product/EditProduct'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            path: '/admin/category',
            name: 'categories',
            component: () => import('@/pages/admin/category/AddCategory'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            name: 'edit-category',
            path: '/admin/edit-category/:categoryId',
            component: () => import('@/pages/admin/category/EditCategory'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            path: '/admin/user',
            name: 'users',
            component: () => import('@/pages/admin/user/users'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            path: '/admin/order',
            name: 'orders',
            component: () => import('@/pages/admin/order/Order'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        //auth routes
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/pages/auth/Register'),
            meta: {
                layout: 'blank',
            },
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/pages/auth/Login'),
            meta: {
                layout: 'blank',
            },
        },
        //home router
        {
            name: 'home',
            path: '/',
            component: () => import('@/pages/index/Home'),
            meta: {
                layout: 'default',
            },
        },
        {
            name: 'all-products',
            path: '/all-products',
            component: () => import('@/pages/index/product/products'),
            meta: {
                layout: 'default',
            },
        },
        {
            name: 'products-by-category',
            path: '/product/:slugCategory',
            component: () => import('@/pages/index/product/ProductsByCategory'),
        },
        {
            name: 'product-details',
            path: '/product/:slugProduct/details',
            component: () => import('@/pages/index/product/ProductDetails'),
        },
        //cart
        {
            name: 'cart-details',
            path: '/cart',
            component: () => import('@/pages/index/cart/Cart'),
        },
        {
            name: 'address-selection',
            path: '/address-selection',
            component: () => import('@/pages/index/cart/AddressSelection'),
            meta: {
                layout: 'default',
                requiresAuth: true,
            },
        },
        {
            name: 'checkout',
            path: '/cart-checkout/:checkoutForm',
            component: () => import('@/pages/index/cart/CartCheckout'),
            meta: {
                layout: 'blank',
                requiresAuth: true,

            },
        },
        //account
        {
            name: 'account',
            path: '/account/orders',
            component: () => import('@/pages/index/account/Orders'),
            meta: {
                layout: 'default',
                requiresAuth: true,
            },
        },
        {
            name: 'order-detail',
            path: '/account/orders/:orderId',
            component: () => import('@/pages/index/account/OrderDetail'),
            meta: {
                layout: 'default',
                requiresAuth: true,
            },
        },
        {
            name: 'my-user-information',
            path: '/account/my-user-information',
            component: () => import('@/pages/index/account/MyUserInformation'),
            meta: {
                layout: 'default',
                requiresAuth: true,
            },
        },
        {
            name: 'account-address',
            path: '/account/address',
            component: () => import('@/pages/index/account/Address'),
            meta: {
                layout: 'default',
                requiresAuth: true,
            },
        },
        //error
        {
            path: '*',
            name: '404',
            component: () => import('@/pages/error/404'),
            meta: {
                layout: 'blank',
            },
        },
        {
            path: '*',
            name: '403',
            component: () => import('@/pages/error/403'),
            meta: {
                layout: 'blank',
            },
        },
    ],
    mode: 'history',
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.authenticated === null) {
            next({
                path: '/auth/login',
                params: { nextUrl: to.fullPath },
            })
        } else {
            let user = store.getters.getUser
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.role === 'admin') {
                    return next()
                } else {
                    return next({ name: 'register' })
                }
            } else {
                return next()
            }
        }
    } else {
        next()
    }
})
