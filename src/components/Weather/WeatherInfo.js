export default function WeatherInfo ({temp, iconId, classInfo, day}) {
    const arrWeatherIcon = ["01d","02d","03d","04d","10d","11d","13d"];
    const arrWeatherIcon2 = ["01","02","03","04","10","11","13"];

    if (classInfo === "today") {
        if (document.getElementById("main")) {
            let main = document.getElementById("main");
            let root = document.getElementById("root")
            switch (iconId.slice(0,2)) {
                case arrWeatherIcon2[0]: {
                    main.style.background = "no-repeat url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrymepleLgbuI0upBdQ3z_zp3MoYSKelji6AoZT7NUwzVhlHdRnZnzRhkHMgpIi0EaOo&usqp=CAU) center / cover";
                    root.style.background = "no-repeat url(https://oir.mobi/uploads/posts/2021-05/thumbs/1622227632_8-oir_mobi-p-solnechnaya-pogoda-priroda-krasivo-foto-9.jpg) center / cover";
                    break;
                }
                case arrWeatherIcon2[1]: {
                    main.style.background = "no-repeat url(https://azertag.az/files/galleryphoto/2020/3/1000x669/15995553942797651591_1000x669.jpg) center / cover";
                    root.style.background = "no-repeat url(https://storge.pic2.me/cm/1280x1024/704/582da66b0c15a.jpg) center / cover";
                    break;
                }
                case arrWeatherIcon2[2]: {
                    main.style.background = "no-repeat url(https://pogodnik.com/wp-content/uploads/2020/07/rainweeks.jpg) center / cover";
                    root.style.background = "no-repeat url(https://azertag.az/files/2021/1/1200x630/16097493541839424053_1200x630.jpeg) center / cover";
                    break;
                }
                case arrWeatherIcon2[3]: {
                    main.style.background = "no-repeat url(https://u-stena.ru/upload/iblock/66d/66d00257ff76b0966a13c1d83330402b.jpg) center / cover";
                    root.style.background = "no-repeat url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYk9cbEHzEMVjN4d0IJkTAUyohEHnzcKHzusip_UMN8dM-rx2F4OWzxT7BNqHzbgskpM&usqp=CAU) center / cover";
                    break;
                }
                case arrWeatherIcon2[4]: {
                    main.style.background = "no-repeat url(http://www.om-saratov.ru/files/pages/30626/1447246746general_pages_11_November_2015_i30626_v_blijaishie_shest_sutok_v.jpg) center / cover";
                    root.style.background = "no-repeat url(https://p4.wallpaperbetter.com/wallpaper/555/546/542/rainy-weather-wallpaper-preview.jpg) center / cover";
                    break;
                }
                case arrWeatherIcon2[5]: {
                    main.style.background = "no-repeat url(https://images.aif.by/007/781/febf0ed3faaf1bb0c7bc5166decf8e7c.jpg) center / cover";
                    root.style.background = "no-repeat url(https://s1.1zoom.ru/b5050/989/Sky_Element_Night_Lightning_Clouds_Megapolis_586153_1920x1080.jpg) center / cover";
                    break;
                }
                case arrWeatherIcon2[6]: {
                    main.style.background = "no-repeat url(https://previews.123rf.com/images/mexrix/mexrix1611/mexrix161100015/68968655-winter-snowing-forest-in-sunlight.jpg) center / cover";
                    root.style.background = "no-repeat url(https://cdn.pixabay.com/photo/2021/02/18/16/11/snow-6027595_960_720.jpg) center / cover";
                    break;
                }
                default: {
                    main.style.background = "no-repeat url(https://funart.pro/uploads/posts/2021-04/1617401891_34-p-oboi-solnechnaya-pogoda-34.jpg) center / cover"
                }
            }

        }
        return (
            <div className={classInfo}>
                <img src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}></img>
                <div className={classInfo+"_temp"}>
                    <div>{day}</div>
                    <div>{temp}&deg;</div>   
                </div>
            </div> 
        )
    } else {
        return (
            <div className={classInfo}>
                <div>{day}</div>
                <img src={`https://openweathermap.org/img/wn/${arrWeatherIcon[Math.round(Math.random()*5)]}@2x.png`}></img>
                <div>{temp+Math.round(Math.random()*6)}&deg;</div>   
            </div> 
        )
    }
}