function datePicker() {
    let date = new Date();

    // 选择的这一天
    this.currentDay = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
    };
    // 表头
    this.weeks = [ '日', '一', '二', '三', '四', '五', '六' ];

    this.dateArray = [];

    this.changeDateArray();
}


datePicker.prototype.changeDate = function (type , value){
    this.dateArray.splice(0, this.dateArray.length);
    if(type == 'year'){
        this.currentDay.year = value ;
    }
    else if(type == 'month'){
        this.currentDay.month = value %12;
        this.currentDay.year += parseInt(value/12);
        console.log(value)
    }
    else if(type == 'day'){
        this.currentDay.day = value;
    }
    this.changeDateArray();
}

datePicker.prototype.changeDateArray = function f() {

    let firstDay = new Date(this.currentDay.year, this.currentDay.month, 1);
    console.log(firstDay);
    let offsetDay = -firstDay.getDay() + 1;
    console.log(offsetDay);
    for (let i = 0; i < 6; i++) {
        let arrayRow = [];
        for (let j = 0; j < 7; j++) {
            const day = i * 7 + j + offsetDay;
            const dayObject = new Date(this.currentDay.year, this.currentDay.month, day);
            let mState = false;
            let dState = false;
            console.log(dayObject.getMonth() == this.currentDay.month);
            if (dayObject.getMonth()  == this.currentDay.month) {
                mState = true;
            }

            if (dayObject.getDate() == this.currentDay.day) {
                dState = true;
            }
            arrayRow.push({
                theDate: getFormat(dayObject),
                label: dayObject.getDate(),
                monthState: mState,
                dayState: dState,
            });
        }
        this.dateArray.push(arrayRow);
    }
};

function getFormat( date ) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return year + '-' + (month + 1) + '-' + day;
}

export default datePicker;
