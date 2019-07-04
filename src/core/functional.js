//组合
function compose2( fn1, fn2 ) {
    return function ( x ) {
        return fn2(fn1(x));
    };
}

//组合
function compose( ...fns ) {
    let result;
    return function composed( ...initParam ) {
        // 拷贝一份保存函数的数组
        let list = fns.slice();
        if (list.length > 0) {
            result = (list.pop())(...initParam);
        }
        while (list.length > 0) {
            // 将最后一个函数从列表尾部拿出并执行它
            result = (list.pop())(result);
        }
        return result;
    };
}

//反转参数
function reverseArgs( fn ) {
    return ( ...args ) => {
        return fn(...args.reverse());
    };
}

//管道
const pipe = reverseArgs(compose);

//柯里化
function curry( fn, args = [] ) {
    if (args.length === fn.length) {
        return fn(...args);
    } else {
        return function ( ...args1 ) {
            // @ts-ignore
            return curry(fn, [ ...args, ...args1 ]);
        };
    }
}

export {
    compose2,
    compose,
    reverseArgs,
    pipe,
    curry,
};
