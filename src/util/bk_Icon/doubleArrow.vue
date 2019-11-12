<template>
    <div>
        <div :class="['Arrow_' + direction, 'Arrow_'+ size]">

        </div>
        <div :class="['Arrow_' + direction, 'Arrow_'+ size]">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'doubleArrow',
        props:{
            direction:{
                type:String,
                default:'left'
            },
            size:{
                type:String,
                default: 'medium'
            }
        }
    };
</script>

<style  lang="scss" scoped>
    @function getDeg($direction){
        @if($direction == 'left'){
            @return rotate(-45deg)
        }
        @else if($direction == 'right'){
            @return rotate(45deg)
        }
    }
    @function getSize($size){
        @if($size == 'small'){
            @return 0.5rem
        }
        @else if($size == 'medium'){
            @return 1rem
        }
        @else if($size == 'big'){
            @return 1.5rem
        }
    }
    @each $s in 'right' 'left'  {
        .Arrow_#{$s}{
            border-top: #666666 solid 1px;
            border-#{$s}: #666666 solid 1px;
            transform: getDeg($s);
        }
    }
    @each $s in 'small','big','medium'{
        .Arrow_#{$s}{
            width: getSize($s);
            height: getSize($s);
        }
    }

</style>
