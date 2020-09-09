module.exports = {
    mode: 'vertical', // 可选有vertical、horizontal，默认vertical
    theme: 'blue', // 可选有blue、dark，默认blue

    fesName: '多么乐信息处理平台', // 项目名称

    FesHeader: true,

    favicon: 'static/favicon.ico', // 图标
    
    // 环境变量配置, 默认使用local环境
    env: {
        // 本地开发环境
        local: {
            api: ''
        },


        // 测试环境 --env=sit 触发使用
        //proxy
        // http://localhost:9000
        develop: {
            api: ''
        },


        // 生产环境 --env=sit 触发使用
        prod: {
            api: ''
        }

    },
    
    
    // 配置角色-路由访问权限，使用FesApp.setRole('unLogin')来修改当前用户的角色，控制路由访问权限
    roles: {
        unLogin: ['/home'],
        admin: ['/list', '*']
    },
    // map
    map: {
        status: [['1', '成功'], ['2', '失败']]
    },
    // 左侧菜单配置
    menu: [
        {
            title: '$i18n.menu.interface',
            path: '/api',
            subMenu: [
                {
                    title: 'Fes',
                    path: '/api/fes'
                },
                {
                    title: 'FesApp',
                    path: '/api/fesApp'
                },
                {
                    title: 'FesApi',
                    path: '/api/fesApi'
                },
                {
                    title: 'FesMenu',
                    path: '/api/fesMenu'
                },
                {
                    title: 'FesMap',
                    path: '/api/fesMap'
                },
                {
                    title: 'FesFesx',
                    path: '/api/fesFesx'
                },
                {
                    title: 'FesStorage',
                    path: '/api/fesStorage'
                },
                {
                    title: 'FesUtil',
                    path: '/api/fesUtil'
                }
            ]
        },
        {
            title: '关键词' ,
            path: '/keywords'

        },
        {
            title: '路由',
            path: '/route'
        },
        {
            //icon: 'static/bell.png',
            title: '列表页',
            path: '/list'
        },
        {            
            title: '列表页ReadMe',
            path: '/list/readme'
        },
        

        {
            title: '内容很多的编辑',
            path: '/list/edit'
        },
        {
            title: '显示头部',
            path: '/header'
        },
        {
            title: '静态资源',
            path: '/static'
        },
        {
            title: '子路由',
            path: '/layout',
            subMenu: [
                {
                    title: '子路由A',
                    path: '/layout/a'
                },
                {
                    title: '子路由B',
                    path: '/layout/b'
                }
            ]
        },
        {
            title: '国际化',
            path: '/i18n'
        }
    ],
    i18n: {
        locale: 'zh-cn', // default zh-cn
        messages: {
            'zh-cn': {
                menu: {
                    interface: '接口'
                },
                overview: '概述',
                i18n: {
                    internationalization: '国际化，基于',
                    achieve: '实现。',
                    ui: 'UI组件'
                },
                title: '多么乐信息处理平台'
            },
            en: {
                menu: {
                    interface: 'interface'
                },
                overview: 'Overview',
                i18n: {
                    internationalization: 'internationalization，base on',
                    achieve: 'to achieve.',
                    ui: 'UI components'
                },
                title: 'title'
            }
        }
    }
};
