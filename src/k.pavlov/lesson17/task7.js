function getSecondsTillEnd() {
    const currentTime = new Date();
    const dataFinish = new Date(currentTime);
    dataFinish.setHours(21, 20, 0, 0)
    return (dataFinish - currentTime) / 1000;
}

console.log(getSecondsTillEnd())