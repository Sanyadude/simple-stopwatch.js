function countTime() {
    let timeToCount = new Date().getTime(); //start timestamp
    let startTime = new Date().getTime();
    let interval = 100;
    setInterval(()=>{
        let updateDate = new Date().getTime();
        let realTimeUpdate = updateDate - startTime;
        let realTime = timeToCount + realTimeUpdate;
        console.log(realTime);
    }, interval);
}
