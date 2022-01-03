/**
 * 封装星级评分函数
 * 2021-12-27
 */
$(function() {

    //写一个创建星星评分的函数 挂在Window上
    window.createStarRate = function(score) {
        // $.fn.createStarRate = function(score) {//原型扩展
        //满星
        var on = `<svg class="on" aria-hidden="true"><use xlink:href="#icon-xingxing2"></use></svg>`;
        //半星
        var half = `<svg class="half" aria-hidden="true"><use xlink:href="#icon-xingxing3"></use></svg>`;
        //灰色星星
        var off = `<svg class="off" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg>`;

        //计算分数
        var calcScore = Math.floor(score * 2) / 2;
        console.log(calcScore);
        //计算满星
        var onCount = Math.floor(calcScore);
        //计算半星
        var isHasHalf = 0;
        if (calcScore % 1 !== 0) {
            isHasHalf = 1;
        }

        //计算灰色的星星
        var offCount = 5 - onCount - isHasHalf;

        //拼接结果
        var rst = '';
        //拼接满星
        for (var i = 0; i < onCount; i++) {
            rst += on;
        }
        //拼接半星
        if (isHasHalf === 1) {
            rst += half;
        }
        //拼接灰色星星
        for (var k = 0; k < offCount; k++) {
            rst += off;
        }


        //返回
        return rst;
        // $(this).html(rst);   //扩展

    }
})