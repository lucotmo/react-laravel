<?php

/* Route::get('/', function () {
    return view('welcome');
}); */

/* Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*'); */

Route::get('/{path}', function () {
    return view('welcome');
})->where('path', '.*');

/* Route::get('category', 'Api\CategoryController@index');

Route::post('category/store', 'Api\CategoryController@store');

Route::delete('category/delete/{id}', 'Api\CategoryController@destroy');

Route::get('category/edit/{id}', 'Api\CategoryController@edit');

Route::put('category/update/{id}', 'Api\CategoryController@update'); */
