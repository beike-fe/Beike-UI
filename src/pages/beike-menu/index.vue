<template>
    <div style="display: flex">
        <beike-menu :MenuList="test"></beike-menu>
        <div id="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import beikeMenu from 'components/beike-menu/index';

    export default {
        name: 'beike-menu-test',
        components: {
            beikeMenu,
        },
        data() {
            return {
                test: [
                    {
                        menuName: '导航1',
                        menuUrl: '/subbeike-heart',
                    },
                    {
                        menuName: '导航2',
                        subMenu: [ {
                            submenuName: '二级导航1',
                            submenuUrl: '/subbeike-button',
                        }, {
                            submenuName: '二级导航1',
                            submenuUrl: '/subbeike-heart',
                        },
                            {
                                submenuName: '二级导航1',
                                submenuUrl: '/subbeike-heart',
                            },
                        ],
                    },
                    {
                        menuName: '导航3',
                        subMenu: [ {
                            submenuName: '二级导航1',
                            submenuUrl: '/subbeike-heart',
                        },
                            {
                                submenuName: '二级导航1',
                                submenuUrl: '/subbeike-heart',
                            }
                            , {
                                submenuName: '二级导航1',
                                submenuUrl: '/subbeike-heart',
                            }, {
                                submenuName: '二级导航1',
                                submenuUrl: '/subbeike-heart',
                            },
                        ],
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    #main {
        position: relative;
    }
</style>
