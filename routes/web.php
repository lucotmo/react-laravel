<?php

Route::get('/', function () {
    return view('welcome');
});

/* Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*'); */

Route::get('category', 'Api\CategoryController@index');

Route::post('category/store', 'Api\CategoryController@store');

Route::delete('category/delete/{id}', 'Api\CategoryController@destroy');
