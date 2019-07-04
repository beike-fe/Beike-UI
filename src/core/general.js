// 防抖函数
function debounce( method, context, time ) {
    let id;
    return function ( ...args ) {
        clearTimeout(id);
        id = setTimeout(() => {
            method.apply(this, args);
        }, time);
    };
}

//节流函数
function throttle( method, time ) {
    let id;
    return function ( ...args ) {
        let context = this;
        if (!id) {
            id = setTimeout(() => {
                method.apply(context, args);
                id = null;
            }, time);
        }
    };
}

export {
    debounce,
    throttle,
};
