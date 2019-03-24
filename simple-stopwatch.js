'use strict'

var SimpleStopwatch = function(customOptions) {
    let options = customOptions ? customOptions : {};
    let jsSecond = 1000;
    let time = options.startTime ? options.startTime : 0;
    let updateInterval = options.interval ? options.interval : jsSecond;
    let precision = options.precision ? options.precision : 0;
    let container = document.getElementById(options.containerId);
    let handler;
    let formatTime = (milliseconds) =>(milliseconds/jsSecond).toFixed(precision);
    let toTimestamp = (time) => Number(time)*jsSecond;
    let getDateNow = () => new Date().getTime();
    let deleteIntervalHandler = () => {
        clearInterval(handler);
        handler = 0;
    };
    let setTime = (newTime) => {
        time = newTime;
        if(container){
            container.innerText = newTime;
        }
        if(options.callback) {
            options.callback(newTime);
        }
    };
    let setUpdateInterval = (newInterval) => updateInterval = newInterval;
    this.start = (newInterval) => {
        if(newInterval){
            setUpdateInterval(newInterval);
        }
        setTime(time);
        let timeToCount = toTimestamp(time);
        let startTime = getDateNow();
        deleteIntervalHandler();
        handler = setInterval(()=>{
            let updateDate = getDateNow();
            let timeDiff = updateDate - startTime;
            let realTime = timeToCount + timeDiff;
            let timeValue = formatTime(realTime);
            setTime(timeValue);
        }, updateInterval);
    };
    this.stop = () => deleteIntervalHandler();
    this.reset = (newInterval) => {
        deleteIntervalHandler();
        setTime(0);
    };
    this.getTime = () => Number(time);
    this.isRunning = () => Boolean(handler);
}