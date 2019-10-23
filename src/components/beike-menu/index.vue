<template>
    <div>
        <ul :id="'menu_'+Theme">
            <li :class="'menuItemLi_'+Theme"
                :style="{height:((index == menuActive) ? liHeight:baseLiHeight)+'rem'}"
                v-for="(item,index) in MenuList">
                <p :class="[ 'menuItem_'+Theme,(index == menuActive ? 'activeFontColor':'')]"
                   @click="handleClick(index)">{{ item.menuName }}</p>
                <template v-if="item.subMenu">
                    <transition name="slide">
                        <template v-if="menuActive == index">
                            <ul>
                                <li v-for="(subItem,subIndex) in item.subMenu" ref="subLi">
                                    <p :class="[(subIndex == subMenuActive)?'activeFontColor':'','subMenuItem_'+Theme]"
                                       @click="handleSubMenuClick(subIndex)">
                                        {{subItem.submenuName }}</p>
                                </li>
                            </ul>
                        </template>
                    </transition>
                </template>
            </li>
        </ul>
    </div>
    <!--<div>-->
    <!--<ul :id="'menu_'+Theme">-->
    <!--<li :class="'menuItemLi_'+Theme" :style="{height: (index == subMenuActive? liHeight:baseLiHeight)+'rem'}"-->
    <!--v-for="(item,index) in MenuList" ref="Li">-->
    <!--<template v-if="item.menuUrl">-->
    <!--<router-link :to="item.menuUrl">-->
    <!--<p :class="['menuItem_'+Theme, (index == subMenuActive)?'fontActive':'']"-->
    <!--@click=" liHeight=baseLiHeight;subMenuActive = index">{{ item.menuName }}</p>-->
    <!--</router-link>-->
    <!--</template>-->
    <!--<template v-if="item.subMenu">-->
    <!--<p :class="['menuItem_'+Theme,(index == subMenuActive)?'fontActive':'']"-->
    <!--@click="handleClick(index)">{{ item.menuName }}</p>-->
    <!--<transition name="slide">-->
    <!--<template v-if="subMenuActive == index">-->
    <!--<ul>-->
    <!--<li :class="'subMenuItem_'+Theme"-->
    <!--v-for="(subItem,subIndex) in item.subMenu"-->
    <!--@click="handleSubMenuClick(subIndex)"-->
    <!--ref="subLi">-->
    <!--<template>-->
    <!--<router-link :to="subItem.submenuUrl">-->
    <!--<span :class="(subIndex == subMenuItemIndex)?'fontActive':''">{{ subItem.submenuName }}</span>-->
    <!--</router-link>-->
    <!--</template>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</template>-->
    <!--</transition>-->
    <!--</template>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
</template>

<script>

    export default {
        /**
         * Menulist:{
         *     menuName:一级菜单名
         *     menuUrl:一级菜单链接
         *     subMenu{
         *         subMenuItem:二级菜单名
         *         subMenuUrl:二级菜单链接
         *     }
         * }
         * Theme:dark/light  主题
         * openItem:number 默认展开的菜单
         * accordion:boolean 是否展开手风琴模式
         */
        name: 'beike-menu',
        props: {
            MenuList: {
                type: Array,
                default: () => [],
            },
            Theme: {
                type: String,
                default: 'dark',
            },
            DefaultActive: {
                type: String,
                default: '2',
            },
        },
        data() {
            return {
                offsetHeight: 0.1,
                liHeight: 0,
                subLiHeight: 0,
                baseLiHeight: 0,

                // subMenuActive: 0,
                // subMenuItemIndex: 0,

                activeItem: null,

                menuActive: 0,
                subMenuActive: 0,

                subItemStretchTime: 100,
            };
        },
        methods: {
            clearSubStatus: function () {
                this.liHeight = this.baseLiHeight;
                this.subMenuActive = 0;
                this.activeItem = null;
            },
            handleClick: function ( index ) {
                //点击一级菜单 首先子菜单清零 设置为默认值
                this.clearSubStatus();
                //判断如果点击的是已经显示的菜单 则收回菜单 设置mentActive为-1
                if (index === this.menuActive) {
                    this.removeActive();
                    return;
                }

                this.activeItem = this.MenuList[ index ];
                this.menuActive = index;
                //如果是新的菜单  则判断是否有子菜单
                // 如果无 1.则设置index为active值   2. push  route
                if (!this.activeItem.subMenu) {
                    // console.log('asa');
                    this.$router.push(this.activeItem.menuUrl);
                    return;
                }

                //如果有  1.设置默认子菜单为0  push route  2.添加active class的状态
                this.$router.push(this.activeItem.subMenu[ 0 ].submenuUrl);
                let num = this.activeItem.subMenu.length;
                this.addActive(num);
            },
            handleSubMenuClick: function ( subIndex ) {

                this.subMenuActive = subIndex;
                this.$router.push(this.activeItem.subMenu[ subIndex ].submenuUrl);
            },
            // handleClick: function ( index ) {
            //     this.subMenuItemIndex = 0;
            //     // console.log(index);
            //     // li.style.height = 123+'px'
            //     let num = this.MenuList[ index ].subMenu.length;
            //     //class的样式不会进入dom的style里
            //     if (this.subMenuActive == index) {
            //         //如果和原来的index相同则清除active
            //         this.removeActive();
            //         console.log('after');
            //         return;
            //     }
            //     //如果和原来的不同则先清除原来的 1.remove  2.this.subMenuActive = ??
            //     //再添加active
            //     if (this.subMenuActive != -1) {
            //         this.removeActive();
            //     }
            //     this.subMenuActive = index;
            //     this.addActive(num);
            //
            //     //先清除当前的状态
            //     //再生出新的active
            // },
            addActive: function ( num ) {  // 传入当前点击li标签  和li标签下的subli的个数
                //1.获取子菜单li个数
                //2.根据个数和li高度进行setIntervel递增
                //3.当达到最大值时height停止
                if (this.liHeight >= (this.baseLiHeight + this.subLiHeight * num)) {
                    return;
                }
                this.liHeight += 0.1;
                // el.style.height = (this.liHeight) + 'rem';
                setInterval(this.addActive(num), this.subItemStretchTime);
            },
            removeActive: function () {
                if (this.liHeight <= this.baseLiHeight) {
                    this.menuActive = -1;
                    return;
                }
                this.liHeight -= 0.1;
                setInterval(this.removeActive(), this.subItemStretchTime);
            },
            // initLiHeight:function (  ) {
            //     let li = this.$refs.Li[0];  // 页面渲染后尚未渲染二级菜单  所以subli无法获取  只能在remove 或者 addactive中获得
            //     this.liHeight = window.getComputedStyle(li).height;
            //     this.isGetHeight = true;
            //     console.log(this.liHeight);
            // },
            // initSubLiHeight:function (  ) {
            //     let subLi = this.$refs.subLi[0];  // 页面渲染后尚未渲染二级菜单  所以subli无法获取  只能在remove 或者 addactive中获得
            //     this.subLiHeight = window.getComputedStyle(subLi).height;
            //     console.log(this.subLiHeight);
            // }
            initLisHeight: function () {
                this.baseLiHeight = 3;
                this.liHeight = 3;
                this.subLiHeight = 1.5;
            },
            initDefaultActive: function () {
                this.menuActive = this.DefaultActive;
                this.activeItem = this.MenuList[ this.menuActive ];
                if (!this.activeItem.subMenu) {
                    this.$router.push(this.activeItem.menuUrl);
                } else {
                    this.$router.push(this.activeItem.subMenu[ 0 ].submenuUrl);
                    let num = this.activeItem.subMenu.length;
                    console.log(num);
                    this.addActive(num);
                }
            },

        },
        mounted() {

            this.initLisHeight();
            this.initDefaultActive();
            console.log(this.MenuList);
        },
    };
</script>

<style scoped>
    /*#menu {*/
    /*position: relative;*/
    /*height: 100vh;*/
    /*width: 20rem;*/
    /*background: rgba(255, 255, 255, 1);*/
    /*border: 0.05rem solid rgba(220, 220, 220, 0.8);*/
    /*}*/

    /*.menuItemLi {*/
    /*position: relative;*/
    /*overflow: hidden;*/
    /*height: 6rem;*/
    /*transition: height 0.4s ease-in-out;*/
    /*}*/

    /*.menuItem {*/
    /*position: relative;*/
    /*display: block;*/
    /*line-height: 100%;*/
    /*background-color: white;*/
    /*padding-left: 1rem;*/
    /*height: 3rem;*/
    /*width: 100%;*/
    /*padding-top: 0.8rem;*/
    /*transition: 0.4s background-color ease-in-out;*/
    /*}*/

    /*.menuItem:hover {*/
    /*background-color: rgba(166, 209, 255, 1);*/
    /*}*/

    /*.subMenuItem {*/
    /*display: block;*/
    /*overflow: hidden;*/
    /*background-color: white;*/
    /*z-index: 2;*/
    /*padding-left: 1.5rem;*/
    /*font-size: 0.9rem;*/
    /*font-weight: lighter;*/
    /*transition: 0.4s background-color ease-in-out;*/
    /*}*/

    /*.subMenuItem:hover {*/
    /*background-color: rgba(200, 200, 200, 0.4);*/
    /*}*/

    .slide-enter-active, .slide-leave-active {
        transition: all 0.5s;
        height: auto;
        overflow: hidden;
    }

    .slide-enter-to, .slide-leave {
        height: 1000rem;
    }

    .slide-enter, .slide-leave-to {
        height: 0px;
        overflow: hidden;
    }

</style>
<style lang="scss">

    $light: light;
    $dark: dark;
    $lightFontColor: black;
    $darkFontColor: white;
    $lightBgColor: white;
    $darkBgColor: rgb(54, 62, 79);
    $lightHoverColor: rgba(200, 200, 200, 0.4);
    $darkHoverColor: rgb(45, 140, 140);
    $activeFontColor: rgb(45, 180, 180);
    @function getHoverColor( $x ) {
        @if ($x == 'light') {
            @return $lightHoverColor;
        } @else if ($x == 'dark') {
            @return $darkHoverColor;
        }

    }

    @function getBgColor( $x ) {
        @if ($x == 'light') {
            @return $lightBgColor;
        } @else if ($x == 'dark') {
            @return $darkBgColor;
        }

    }

    @function getFontColor( $x ) {
        @if ($x == 'light') {
            @return $lightFontColor;
        } @else if ($x == 'dark') {
            @return $darkFontColor;
        }

    }

    .activeFontColor {
        color: $activeFontColor
    }

    @each $theme in $light, $dark {
        #menu_#{$theme} {
            position: relative;
            height: 100vh;
            width: 20rem;
            background-color: getBgColor($theme);
            border: 0.05rem solid rgba(220, 220, 220, 0.8);
            color: getFontColor($theme);

            .menuItemLi_#{$theme} {
                position: relative;
                overflow: hidden;
                height: 6rem;
                transition: height 0.4s ease-in-out;

                .menuItem_#{$theme} {
                    position: relative;
                    display: block;
                    line-height: 100%;
                    background-color: getBgColor($theme);
                    padding-left: 1rem;
                    height: 3rem;
                    width: 100%;
                    padding-top: 0.8rem;
                    transition: 0.3s all ease-in-out;

                    &:hover {
                        background-color: getHoverColor($theme);
                    }
                }

                .subMenuItem_#{$theme} {
                    display: block;
                    overflow: hidden;
                    background-color: getBgColor($theme);
                    padding-left: 1.5rem;
                    font-size: 0.9rem;
                    font-weight: lighter;
                    transition: 0.3s all ease-in-out;


                    &:hover {
                        background-color: getHoverColor($theme);
                    }
                }
            }

        }

    }

</style>
