function curTime(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let am_pm = "AM"

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    if (h > 12){
        h = h - 12
        am_pm = "PM";
    }

    document.querySelector("#hours").innerHTML = h;
    document.querySelector("#minutes").innerHTML = m;
    // document.querySelector("#seconds").innerHTML = s;
    document.querySelector("#am_pm").innerHTML = am_pm;

    setTimeout(curTime, 1000);
}
curTime();