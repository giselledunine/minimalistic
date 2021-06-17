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
        components : {
            default: () => import('@/components/Login')
        }
    },
    {
        path: '/register',
        name: 'Register',
        components : {
            default: () => import('@/components/Register')
        }
    }
]