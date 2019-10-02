import React from 'react';
import { WiDaySunny, WiSprinkle, WiRain, WiThunderstorm, WiHail, WiSnow, WiRainMix, WiSleet, WiFog, WiDayHaze, WiDust, WiNightClear, WiDayCloudy, WiNightCloudy, WiAlien, WiSmoke } from 'weather-icons-react';

const codes = {
    thunderStormWithLightRain: 200,
    thunderStormWithRain: 201,
    thunderStormWithHeavyRain: 202,
    thunderStormWithLightDrizzle: 230,
    thunderStormWithDrizzle: 231,
    thunderStormWithHeavyDrizzle: 232,
    thunderStormWithHail: 233,
    lightDrizzle: 300,
    drizzle: 301,
    heavyDrizzle: 302,
    lightRain: 500,
    moderateRain: 501,
    heavyRain: 502,
    freezingRain: 511,
    lightShowerRain: 520,
    showerRain: 521,
    heavyShowerRain: 522,
    lightSnow: 600,
    snow: 601,
    heavySnow: 602,
    mixSnowRain: 610,
    sleet: 611,
    heavySleet: 612,
    snowShower: 621,
    heavySnowShower: 622,
    flurries: 623,
    mist: 700,
    smoke: 711,
    haze: 721,
    sandDust: 731,
    fog: 741,
    freezingFog: 751,
    clearSky: 800,
    fewClouds: 801,
    scatteredClouds: 802,
    brokenClouds: 803,
    overcaseClouds: 804,
    unknownPrecipitation: 900
};

const isDay = hour => hour >= 6 && hour <= 18;

const getIcon = (weatherCode) => {
    const size = 210;
    const color = '#FFFFFF';
    const now = (new Date()).getHours();

    switch (weatherCode) {
        case codes.thunderStormWithLightRain:
        case codes.thunderStormWithDrizzle:
        case codes.thunderStormWithRain:
        case codes.thunderStormWithHeavyRain:
        case codes.thunderStormWithLightDrizzle:
        case codes.thunderStormWithDrizzle:
        case codes.thunderStormWithHeavyDrizzle:
            return <WiThunderstorm size={size} color={color} />;
        case codes.thunderStormWithHail:
            return <WiHail size={size} color={color} />;
        case codes.drizzle:
        case codes.heavyDrizzle:
        case codes.lightDrizzle:
            return <WiSprinkle size={size} color={color} />;
        case codes.moderateRain:
        case codes.heavyRain:
        case codes.lightRain:
        case codes.freezingRain:
        case codes.lightShowerRain:
        case codes.showerRain:
        case codes.heavyShowerRain:
            return <WiRain size={size} color={color} />;
        case codes.snow:
        case codes.heavySnow:
        case codes.lightSnow:
            return <WiSnow size={size} color={color} />;
        case codes.mixSnowRain:
            return <WiRainMix size={size} color={color} />;
        case codes.sleet:
        case codes.heavySleet:
        case codes.snowShower:
        case codes.heavySnowShower:
            return <WiSleet size={size} color={color} />;
        case codes.sandDust:
            return <WiDust size={size} color={color} />;
        case codes.flurries:
            return <WiSnow size={size} color={color} />;
        case codes.mist:
            return <WiFog size={size} color={color} />;
        case codes.smoke:
            return <WiSmoke size={size} color={color} />;
        case codes.haze:
            return <WiDayHaze size={size} color={color} />;
        case codes.sandDuse:
            return <WiDust size={size} color={color} />;
        case codes.fog:
            return <WiFog size={size} color={color} />;
        case codes.freezingFog:
            return <WiFog size={size} color={color} />;
        case codes.clearSky:
            if (isDay(now)) {
                return <WiDaySunny size={size} color={color} />
            } else {
                return <WiNightClear size={size} color={color} />
            }
        case codes.fewClouds:
        case codes.scatteredClouds:
        case codes.brokenClouds:
        case codes.overcaseClouds:
            if (isDay(now)) {
                return <WiDayCloudy size={size} color={color} />
            } else {
                return <WiNightCloudy size={size} color={color} />
            }
        case codes.unknownPrecipitation:
            return <WiAlien size={size} color={color} />
    }
};

const Icon = ({weatherCode}) => {
    return (
        <span className="weather-code">
            {getIcon(weatherCode)}
        </span>
    )
};

export default Icon;