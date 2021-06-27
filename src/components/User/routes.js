export default [
    {
        path : '/user',
        name: 'User',
        components: {
            default: () => import('@/components/User/User')
        },
        children:
            [{
            path: '/profil',
            name: 'Profil2',
            components: {
                default: () => {import('@/components/User/User')}

            }
        }
            ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: "nothing"
        },
        components : {
            default: () => import('@/components/Login')
        }
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: "nothing"
        },
        components : {
            default: () => import('@/views/Register')
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            layout: "user",
            requiredAuth: false,
        },
        components : {
            default: () => import('@/views/Dashboard')
        }
    }
]