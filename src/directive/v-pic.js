const Pic = {
    install (Vue) {
        Vue.directive('pic', function (el, { value: { pic, width, ratio, quality = 0 } }) {
            let imgUrl = '';
            if (ratio) {
                imgUrl = imgUrlTool.getGoodsRatioSuffix(pic, quality, width, ratio);
            } else {
                imgUrl = imgUrlTool.getWidthSuffix(pic, quality, width);
            }
            el.style.backgroundImage = `url(${imgUrl})`;
            el.style.backgroundRepeat = 'no-repeat';
        });
    }

};
export default Pic;
