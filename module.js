

'use strict';


export const weekDayNames=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames =[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
export const getDate=function(dateUnix,timezone){
    const date=new Date((dateUnix+timezone)*1000);
    const weekDayName =weekDayNames[date.getUTCDay()];
    const monthName=monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}
export const getTime=function(timeUnix,timezone){
    const date=new Date((timeUnix+timezone)*1000);
    const hours = date.getUTCHours();
    const minutes=date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes}, ${period}`;
}
export const getHours=function(timeUnix,timezone){
    const date=new Date((timeUnix+timezone)*1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}
export const  nps_to_kmh=nps => {
    const nph=nps*3600;
    return nph/1000;
}
export const aqiText={
    1:{
        level:"Good",
        message:"Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
    2:{
        level:"Fair",
        message:"Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
    3:{
        level:"Moderate",
        message:"Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
    4:{
        level:"Poor",
        message:"Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
    5:{
        level:"Very Poor",
        message:"Air quality is considered satisfactory, and air pollution poses little or no risk"
    },

}