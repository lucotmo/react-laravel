<?php

Route::get('/', function () {
    return view('welcome');
});

/* Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*'); */

Route::get('category', 'Api\CategoryController@index');
