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
]