# Beike-button

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | string | 'plain' |
| round | 是否圆角 | boolean | false |
| shake | 是否抖动 | boolean | false |
| hoverEffect | hover 时放大 | boolean | false |
| gpu | 是否使用 gpu 加速渲染 | boolean | false |
| @click | 点击按钮回调 | function |  |
| @mouseover | 鼠标经过回调 | function |  |
| @mouseleave | 鼠标离开回调 | function |  |

## 备注
这里因为抖动用到了 mouseover 和 mouseleave 事件。所以显式透出这两个事件。不会影响其他 mouse 事件的添加。
