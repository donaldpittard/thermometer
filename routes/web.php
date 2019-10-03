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
    return response()->json([
        'data' => [
            'temp' => 86,
            'code' => 200
        ],
    ]);
});
