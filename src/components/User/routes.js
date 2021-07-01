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
            requiredAuth: true,
        },
        components : {
            default: () => import('@/views/Dashboard')
        }
    },
    {
        path: '/questions',
        name: 'Questions',
        meta: {
            layout: "nothing",
            requiredAuth: false,
        },
        components : {
            default: () => import('@/views/Questions')
        },
        children: [{
            path: 'pret-a-porter',
            name: "pret-a-porter",
            meta: {
                layout: "nothing",
                requiredAuth: false,
            },
            components: {
                default: () => import('@/components/Questions/PretAPorter')
            }
        },
            {
                path: 'tri-sentimental',
                name: "tri-sentimental",
                meta: {
                    layout: "nothing",
                    requiredAuth: false,

                },
                components: {
                    default: () => import('@/components/Questions/TriSentimental')
                }
            },
            {
                path: 'results',
                name: "results",
                meta: {
                    layout: "nothing",
                    requiredAuth: false,

                },
                components: {
                    default: () => import('@/components/Questions/Results')
                }
            }
        ]
    }
]