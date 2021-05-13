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
            component: () => import('@/pages/admin/products/Products'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            path: '/admin/add-product',
            name: 'addProduct',
            component: () => import('@/pages/admin/products/AddProduct'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            name: 'edit-product',
            path: '/admin/edit-product/:slugProduct',
            component: () => import('@/pages/admin/products/EditProduct'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            path: '/admin/categories',
            name: 'categories',
            component: () => import('@/pages/admin/categories/AddCategory'),
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            },
        },
        {
            name: 'edit-category',
            path: '/admin/edit-category/:categoryId',
            component: () => import('@/pages/admin/categories/EditCategory'),
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
        {
            path: '*',
            name: 'notFound',
            component: () => import('@/pages/error/404'),
            meta: {
                layout: 'blank',
            },
        },
        //profile
        {
            name: 'profile',
            path: '/profile',
            component: () => import('@/pages/index/profile/Profile'),
            meta: {
                layout: 'default',
                requiresAuth: true,
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
                if (user.role === 'Admin') {
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
