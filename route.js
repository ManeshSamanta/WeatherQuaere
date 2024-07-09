
'use strict';


import{updateWeather,error404} from "./script.js";
const defaultlocation ="#/weather?lat=22.5414185&lon=88.35769124388872"
const currentLocation=function(){
    window.navigator.geolocation.getCurrentPosition(res => {
        const{ latitude,longitude }=res.coords;

        updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    },err => {
        window.location.hash = defaultlocation;
    })
}
const searchLocation=query => updateWeather(...query.split("&"));
const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather",searchLocation]
]);
const checkHash=function(){
    const requestURL=window.location.hash.slice(1);

    const [route, query]=requestURL.includes ? requestURL.split("?") : [requestURL];

    routes.get(route) ? routes.get(route)(query):error404();
}
window.addEventListener("hashchange",checkHash);
window.addEventListener("load",function(){
    if(!window.location.hash){
        window.location.hash="#/current-location";
    }
    else{
        checkHash();
    }
});