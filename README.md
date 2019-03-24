# simple-stopwatch.js

example of use - index.html

# Usage
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
Methods to manipulate stopwatch -
</br>
Start counting time
<pre>
stopwatch.start()
</pre>
Stop counting time
<pre>
stopwatch.stop()
</pre>
Reset stopwatch
<pre>
stopwatch.reset()
</pre>
Get current stopwatch time
<pre>
stopwatch.getTime()
</pre>
Get state of stopwatch running
<pre>
stopwatch.isRunning()
</pre>
Add callback to timer methods, available names ['start','stop','update','reset'], update callback will have time from stopwatch as parameter
<pre>
stopwatch.on(name, callback)
</pre>
