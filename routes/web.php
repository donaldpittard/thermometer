<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return view('home')->with('title', 'Local Weather App');
});

$router->get('/api/weather/latitude/{latitude}/longitude/{longitude}/unit/{unit}', function ($latitude, $longitude, $unit) {
    $sampleApiResponse = '{  
        "data":[  
           {  
              "wind_cdir":"NE",
              "rh":59,
              "pod":"d",
              "lon":"-78.63861",
              "pres":1006.6,
              "timezone":"America\/New_York",
              "ob_time":"2017-08-28 16:45",
              "country_code":"US",
              "clouds":75,
              "vis":10,
              "wind_spd":6.17,
              "wind_cdir_full":"northeast",
              "app_temp":24.25,
              "state_code":"NC",
              "ts":1503936000,
              "h_angle":0,
              "dewpt":15.65,
              "weather":{  
                 "icon":"c03d",
                 "code":"803",
                 "description":"Broken clouds"
              },
              "uv":2,
              "aqi":45,
              "station":"CMVN7",
              "wind_dir":50,
              "elev_angle":63,
              "datetime":"2017-08-28:17",
              "precip":0,
              "ghi":444.4,
              "dni":500,
              "dhi":120,
              "solar_rad":350,
              "city_name":"Raleigh",
              "sunrise":"10:44",
              "sunset":"23:47",
              "temp":24.19,
              "lat":"35.7721",
              "slp":1022.2
           }
        ],
        "count":1
    }';

    $response = json_decode($sampleApiResponse);

    return response()->json($response);
});
