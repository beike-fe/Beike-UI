// 用法：先 import 再 Vue.use(scrollLoad)

const Tool = {
    getAllHeight (context) {
        if (!this.context) {
            this.context = context;
        }
        if (this.context === window) {
            return {
                // 屏幕高度
                winHeight: document.documentElement.clientHeight || document.body.clientHeight || context.innerheight,
                // 当前滚动条高度
                scrollTop: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                // 文档高度
                docuHeight: document.body.scrollHeight || document.body.offsetHeight
            };
        } else {
            return {
                winHeight: context.offsetHeight,   // 当前元素高度
                scrollTop: context.scrollTop,     // 当前元素滚动高度
                docuHeight: context.scrollHeight // 当前元素滚动条总高度
            };
        }
    },
    getTime () {
        return new Date().getTime();
    }
};
const DEFAULTCONFIG = {
    // 请求间隔
    interval: 50,
    // 距离底部多少开始请求
    bottomHeight: M.ua.iphone ? window.innerWidth * 0.8 : window.innerHeight * 0.6,
    // 是否解除监听
    abort: false,
    // 监听到后是否不理
    stop: false,
    // 全局上下文
    context: window
};
const ScrollLoad = {
    install (Vue) {
        Vue.directive('scrollload', {
            bind (el, binding) {
                // 生成最终配置
                el.config = Object.assign({}, DEFAULTCONFIG, binding.value);
                el.timeoutKey = null;
                el.scrollCallbackFn = null;

                // 绑定刷新
                const refresh = function () {

                    // 如果 dom 不存在或者强制停止监听
                    if (el.style.display === 'none' || el.offsetHeight === 0 || el.config.abort) {
                        el.config.context.removeEventListener('scroll', el.scrollCallbackFn);
                        return;
                    }
                    // 如果监听到监听事件也不理
                    if (el.config.stop) {
                        return;
                    }

                    const {scrollTop, docuHeight, winHeight} = Tool.getAllHeight(el.config.context);
                    // 判断滚动条高度，确定是否要加载下一屏
                    if (scrollTop + winHeight >= docuHeight - el.config.bottomHeight) {
                        // 执行回调函数
                        el.config.callback();
                    }
                };
                // 50ms 检查一次
                el.nowTime = Tool.getTime();
                el.scrollCallbackFn = M.fn.throttle(refresh, el.config.interval);
                el.config.context.addEventListener('scroll', el.scrollCallbackFn.bind(this));

            },
            update (el, binding) {
                el.config = Object.assign({}, DEFAULTCONFIG, binding.value);
            },
            unbind (el) {
                el.config.context.removeEventListener('scroll', el.scrollCallbackFn);
            }

        });
    }

};
export default ScrollLoad;
