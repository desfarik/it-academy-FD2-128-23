function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).find(el => dead.every(res => suspectInfo[el].includes(res)))
   }