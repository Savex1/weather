export default function changeWeather() {
    const sel  = document.getElementById("sel");
    const temp = document.getElementsByClassName("today_temp")[0].children[1]

    if (sel.value === "stormglass") {
        let wSG = localStorage.getItem("weatherSG")
        temp.innerHTML=`${JSON.parse(wSG).temp}&deg;`
    } else {
        let wOW = localStorage.getItem("weatherOW")
        temp.innerHTML=`${Math.round(JSON.parse(wOW).temp)-273}&deg;`
    }
}