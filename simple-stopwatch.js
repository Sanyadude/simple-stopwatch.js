'use strict'

var SimpleStopwatch = function (customOptions) {
    let options = customOptions ? customOptions : {};
    let jsSecond = 1000;
    let time = options.startTime ? options.startTime : 0;
    let updateInterval = options.interval ? options.interval : jsSecond;
    let precision = options.precision ? options.precision : 0;
    let container = document.getElementById(options.containerId);
    let handler;
    let callbacks = {
        start: [],
        stop: [],
        update: [],
        reset: [],
    };
    let formatTime = (milliseconds) => (milliseconds / jsSecond).toFixed(precision);
    let toTimestamp = (time) => Number(time) * jsSecond;
    let getDateNow = () => new Date().getTime();
    let deleteIntervalHandler = () => {
        clearInterval(handler);
        handler = 0;
    };
    let setTime = (newTime) => {
        time = newTime;
        if (container) {
            container.innerText = newTime;
        }
        executeCallbacks('update', newTime);
    };
    let setUpdateInterval = (newInterval) => updateInterval = newInterval;
    let executeCallbacks = (eventName, eventParam) => {
        callbacks[eventName].forEach(function (event) {
            event(eventParam);
        })
    };
    this.start = (newInterval) => {
        if (newInterval) {
            setUpdateInterval(newInterval);
        }
        setTime(time);
        let timeToCount = toTimestamp(time);
        let startTime = getDateNow();
        deleteIntervalHandler();
        handler = setInterval(() => {
            let updateDate = getDateNow();
            let timeDiff = updateDate - startTime;
            let realTime = timeToCount + timeDiff;
            let timeValue = formatTime(realTime);
            setTime(timeValue);
        }, updateInterval);
        executeCallbacks('start');
    };
    this.stop = () => {
        deleteIntervalHandler();
        executeCallbacks('stop');
    };
    this.reset = (newInterval) => {
        deleteIntervalHandler();
        setTime(0);
        executeCallbacks('reset');
    };
    this.getTime = () => Number(time);
    this.isRunning = () => Boolean(handler);
    this.on = (eventName, callback) => {
        if (callbacks.hasOwnProperty(eventName)) {
            callbacks[eventName].push(callback);
        }
    };
}
