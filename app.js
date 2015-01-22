var schedule = require('node-schedule');
//var date = new Date(2015,1,22,16,42,0);

// 根据时间定时任务
//shedule.scheduleJob(date,function(){
//    console.log('执行了这里！！！');
//});
//
//var rule = new shedule.RecurrenceRule();
//rule.minute = 42;
//
//shedule.scheduleJob(rule,function(){
//    console.log('执行了这里');
//});
//
//var rule = new schedule.RecurrenceRule();
//rule.dayOfWeek = [0,new shedule.Range(4,6)];
//rule.hour = 17;
//rule.minute = 0;
//
//var j = shedule.scheduleJob(rule,function(){
//   console.log('执行了这里');
//});

var rule = new schedule.RecurrenceRule();
var times = [];
for (var i = 0;i<60;i++){
    times.push(i);
}
rule.minute = times;

var c = 0;
var j = schedule.scheduleJob(rule, function () {
    c++;
    console.log(c);
    if(c > 11){
        j.cancel();
    }
});
