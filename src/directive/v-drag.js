const drag = {
        bind: function ( element, binding ) {
            let el = element;
            if (!el.style.position) {
                //当元素无position属性时，则设置其position为absolute
                console.log(12);
                el.style.position = 'absolute';
            }
            el.onmousedown = function ( e ) {
                //点击后改变状态
                let disX = e.clientX - el.offsetLeft;
                let disY = e.clientY - el.offsetTop;
                el.onmousemove = function ( e ) {
                    //拖拽时位置的移动
                    el.style.left = (e.clientX - disX) + 'px';
                    el.style.top = (e.clientY - disY) + 'px';
                };
                document.onmouseup = function ( e ) {
                    //鼠标抬起时的操作
                    el.onmousemove = null;
                    document.onmouseup = null;
                };
            };
        },
    }

    export default drag;
