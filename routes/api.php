<?php
use Illuminate\Http\Request;

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login','AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::resource('/sample','SampleController');
Route::resource('/option','OptionController');
Route::resource('/post','PostController');
Route::resource('/project','ProjectController');
Route::resource('/plan','PlanController');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
