import React from 'react';
import { WiDaySunny, WiSprinkle, WiRain, WiThunderstorm, WiHail, WiSnow, WiRainMix, WiSleet, WiFog, WiDayHaze, WiDust, WiNightClear, WiDayCloudy, WiNightCloudy, WiAlien, WiSmoke, WiDayHail } from 'weather-icons-react';
import './Icon.css';
import {match} from '../../lib/utils';

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
    overcastClouds: 804,
    unknownPrecipitation: 900
};

const codeCheckFactory = codes => code => codes.includes(code);

const isThunderStormCode = codeCheckFactory([
    codes.thunderStormWithLightRain,
    codes.thunderStormWithRain,
    codes.thunderStormWithHeavyRain,
    codes.thunderStormWithLightDrizzle,
    codes.thunderStormWithDrizzle,
    codes.thunderStormWithHeavyDrizzle,
]); 

const isHailCode = codeCheckFactory([
    codes.thunderStormWithHail
]); 

const isSprinkleCode = codeCheckFactory([
    codes.lightDrizzle,
    codes.drizzle,
    codes.heavyDrizzle
]);

const isRainCode = codeCheckFactory([
    codes.moderateRain,
    codes.heavyRain,
    codes.lightRain,
    codes.freezingRain,
    codes.lightShowerRain,
    codes.showerRain,
    codes.heavyShowerRain,
]);

const isSnowCode = codeCheckFactory([
    codes.snow,
    codes.heavySnowsnow,
    codes.lightSnowsnow,
    codes.flurries,
]);

const isRainMixCode = codeCheckFactory([
    codes.mixSnowRain,
]);

const isSleetCode = codeCheckFactory([
    codes.sleet,
    codes.heavySleet,
    codes.snowShower,
    codes.heavySnowShower,
]);

const isDustCode = codeCheckFactory([
    codes.sandDust,
]);

const isFogCode = codeCheckFactory([
    codes.mist,
    codes.fog,
    codes.freezingFog,
]);

const isSmokeCode = codeCheckFactory([
    codes.smoke,
]);

const isHazeCode = codeCheckFactory([
    codes.haze,
]);

const isClearSkyCode = codeCheckFactory([
    codes.clearSky,
]);

const isCloudyCode = codeCheckFactory([
    codes.fewClouds,
    codes.scatteredClouds,
    codes.brokenClouds,
    codes.overcastClouds,
]);

const isDayNow = () => (new Date()).getHours() >= 6 && hour <= 18;
const isClearSkyCodeAndIsDay = code => isClearSkyCode(code) && isDayNow();
const isClearSkyCodeAndIsNight = code => !isClearSkyCodeAndIsDay(code);
const isCloudyCodeAndIsDay = code => isCloudyCode(code) && isDayNow();
const isCloudyCodeAndIsNight = code => !isCloudyCodeAndIsDay(code);

const Icon = ({weatherCode, size, color, className='', ...props}) => {
    return (
        <span className={`icon ${className}`} {...props}>
            {match(weatherCode)
            .on(isThunderStormCode, () => <WiThunderstorm size={size} color={color} />)
            .on(isHailCode, () => <WiHail size={size} color={color} />)
            .on(isSprinkleCode, () => <WiSprinkle size={size} color={color} />)
            .on(isRainCode, () => <WiRain size={size} color={color} />)
            .on(isSnowCode, () => <WiSnow size={size} color={color} />)
            .on(isRainMixCode, () => <WiRainMix size={size} color={color} />)
            .on(isSleetCode, () => <WiSleet size={size} color={color} />)
            .on(isDustCode, () => <WiDust size={size} color={color} />)
            .on(isFogCode, () => <WiFog size={size} color={color} />)
            .on(isSmokeCode, () => <WiSmoke size={size} color={color} />)
            .on(isHazeCode, () => <WiDayHaze size={size} color={color} />)
            .on(isClearSkyCodeAndIsDay, () => <WiDaySunny size={size} color={color} />)
            .on(isClearSkyCodeAndIsNight, () => <WiNightClear size={size} color={color} />)
            .on(isCloudyCodeAndIsDay, () => <WiDayCloudy size={size} color={color} />)
            .on(isCloudyCodeAndIsNight, () => <WiNightCloudy size={size} color={color} />)
            .otherwise(<WiAlien size={size} color={color} />)}
        </span>
    );
};

export default Icon;