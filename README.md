# simple-timer.js

example of use - index.html

#Usage
<pre>
var stopwatchOptions = {
    containerId: "stopwatch",
    interval: 1000,
    precision: 3,
    startTime: 10,
    callback: (time)=>console.log(time)
};
var stopwatch = new SimpleStopwatch(stopwatchOptions);
stopwatch.start();
</pre>
</br>
Methods to manipulate stopwatch -
</br>
Start counting time
<pre>
stopwatch.start()
</pre>
</br>
Stop counting time
<pre>
stopwatch.stop()
</pre>
</br>
Reset stopwatch
<pre>
stopwatch.reset()
</pre>
</br>
Get current stopwatch time
<pre>
stopwatch.getTime()
</pre>
</br>
Get state of stopwatch running
<pre>
stopwatch.isRunning()
</pre>