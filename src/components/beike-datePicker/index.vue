<template>
    <div id="myDatePicker">
        <div class="dateInput f_row al_center ">
            <input @click="handleClick" placeholder="选择日期" v-model="result" ref="input">
        </div>
        <transition name="slide_up">
            <div class="bk-datePicker" v-if="datePanelVisible" ref="showPanel">
                <div class="pickerChoose f_row al_center  ">
                    <!--//控制部分 确定选择年 月 日-->
                    <div class="f_row al_center jc_between pickerChoosePanel" v-if="choosingIndex == 0">
                            <span @click="lastTenY">
                                <bk-dArrow direction="left" size="small"></bk-dArrow>
                            </span>
                        <span>{{ yearRange }}年-{{ yearRange+9 }}年</span>
                        <span @click="nextTenY">
                                <bk-dArrow direction="right" size="small"></bk-dArrow>
                            </span>
                    </div>
                    <div class="f_row al_center jc_between pickerChoosePanel" v-else-if="choosingIndex == 1">
                            <span @click="lastY">
                                <bk-Arrow direction="left" size="small"></bk-Arrow>
                            </span>
                        <span @click="changeChoosingIndexTo0">{{ curDay.year}}年</span>
                        <span @click="nextY">
                                <bk-dArrow direction="right" size="small"></bk-dArrow>
                            </span>
                    </div>
                    <div class="f_row al_center jc_between pickerChoosePanel" v-else>
                            <span @click="lastY">
                                <bk-dArrow direction="left" size="small"></bk-dArrow>
                            </span>
                        <span @click="lastM">
                                <bk-Arrow direction="left" size="small"></bk-Arrow>
                            </span>
                        <span @click="changeChoosingIndexTo0">{{ curDay.year}}年</span>
                        <span @click="changeChoosingIndexTo1"> {{ curDay.month+1}}月</span>
                        <span @click="nextM">
                                <bk-Arrow direction="right" size="small"></bk-Arrow>
                            </span>
                        <span @click="nextY">
                                <bk-dArrow direction="right" size="small"></bk-dArrow>
                            </span>
                    </div>
                </div>
                <div class="showDateTable jc_center al_center f_row">
                    <!--//显示部分  表头  表-->
                    <div class="showDiv" v-if="choosingIndex == 0">
                        <div class="chooseYear" v-for="item in 10">
                                <span @click="handleClickYear(item + yearRange -1)"
                                      :class="{ 'active': (item + yearRange -1) == curDay.year }">
                                    {{ item + yearRange -1 }}
                                </span>
                        </div>
                    </div>
                    <div class="showDiv" v-else-if="choosingIndex == 1">
                        <div class="chooseMonth" v-for="item in 12">
                                <span @click="handleClickMonth(item - 1)"
                                      :class="{'active':item == curDay.month + 1  }">
                                    {{ item }}月
                                </span>
                        </div>
                    </div>
                    <div class="showDiv" v-else>
                        <table>
                            <thead>
                            <td v-for="head in thePicker.weeks">{{ head }}</td>
                            </thead>
                            <tr v-for="(row,rowindex) in dateRows" :key="rowindex">
                                <td v-for="(cell,cellIndex) in row" :key="cellIndex">
                                        <span @click="handleClickDay(cell)"
                                              :class="{ 'navigate':!cell.monthState,'active':cell.dayState }">
                                            {{ cell.label }}
                                        </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import MyDatePicker from './datePicker';

    export default {
        name: 'index',
        data() {
            return {
                thePicker: new MyDatePicker(),
                datePanelVisible: false,
                dateRows: [],
                yearRange: '',
                curDay: '',
                choosingIndex: 3,
                result: '',
            };
        },
        methods: {
            initailDate: function () {
                const curYear = this.thePicker.currentDay.year;
                this.yearRange = parseInt(curYear / 10) * 10;
                console.log(this.yearRange);
                this.dateRows = this.thePicker.dateArray;
                console.log(this.dateRows);
                this.curDay = this.thePicker.currentDay;
            },
            handleClick: function () {
                this.datePanelVisible = true;
                this.initailDate();
                let _this = this;
                document.onmousedown = function ( e ) {
                    console.log(e);
                    let Input = _this.$refs.input;
                    let Panel = _this.$refs.showPanel;

                    console.log(Panel);
                    // let x = e.clientX;
                    // let y = e.clientY;
                    // let left = parent.offsetLeft;
                    // let right = parent.offsetLeft + parent.offsetWidth;
                    // let top = parent.offsetTop;
                    // let bottom = parent.offsetTop + parent.offsetHeight;
                    let x = e.clientX;
                    let y = e.clientY;

                    let width = Panel.clientWidth;
                    let height = Panel.clientHeight;
                    let left = 0;
                    let top = 0;
                    while(Panel.tagName !== 'BODY'){
                        left = left + Panel.offsetLeft;
                        top = top + Panel.offsetTop;
                        Panel = Panel.offsetParent;
                        console.log(left+','+top);
                    }
                    let right = left + width;
                    let bottom = top + height;
                    // console.log(Panel.scrollTop + 's' + Panel + 's' + Panel.clientHeight);
                    console.log(left+'s'+right+'s'+'t'+top+'b'+bottom);
                    console.log(x+'s'+y);
                    Input.onblur = function(){
                        if (x > left && x < right && y > top && y < bottom) {
                            console.log(true);
                            Input.focus();
                            return;
                        }
                        else{
                            console.log(false);
                            document.onmousedown = null;
                            _this.datePanelVisible = false;
                        };
                    }
                    // console.log(Input.focus());
                };
            },
            handleClickDay: function ( v ) {
                this.thePicker.changeDate('day', v.label);
                this.result = v.theDate;
                this.datePanelVisible = false;
                this.$emit('getResult',this.result);
                this.initailDate();
            },
            handleClickMonth: function ( v ) {
                this.thePicker.changeDate('month', v);
                this.choosingIndex = 2;
                this.initailDate();
            },
            handleClickYear: function ( v ) {
                this.thePicker.changeDate('year', v);
                this.choosingIndex = 1;
                this.initailDate();
            },
            changeChoosingIndexTo2: function () {
                this.choosingIndex = 2;
            },
            changeChoosingIndexTo1: function () {
                this.choosingIndex = 1;
            },
            changeChoosingIndexTo0: function () {
                this.choosingIndex = 0;
            },
            nextM: function () {
                this.thePicker.changeDate('month', this.curDay.month + 1);
                this.initailDate();
            },
            lastM: function () {
                this.thePicker.changeDate('month', this.curDay.month - 1);
                this.initailDate();
            },
            nextY: function () {
                this.thePicker.changeDate('year', this.curDay.year + 1);
                this.initailDate();
            },
            lastY: function () {
                this.thePicker.changeDate('year', this.curDay.year - 1);
                this.initailDate();
            },
            nextTenY: function () {
                this.thePicker.changeDate('year', this.curDay.year + 10);
                this.initailDate();
            },
            lastTenY: function () {
                this.thePicker.changeDate('year', this.curDay.year - 10);
                this.initailDate();
            },
        },
        mounted() {

        },
    };
</script>

<style scoped lang="scss">
    @import "../../util/css/bk_Layout";
    /*//排版样式*/
    @import "datePicker";
    /*具体样式*/
    .slide_up-enter-to, .slide_up-leave {
        opacity: 1;
    }

    .slide_up-enter, .slide_up-leave-to {
        transform: translateY(50px);
        opacity: 0;
    }

    .slide_up-enter-active, .slide_up-leave-active {
        transition: all 0.3s ease-in-out;
    }
</style>
