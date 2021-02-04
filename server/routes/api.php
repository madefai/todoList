<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('getUser','UserController@index');
Route::post('addUser','UserController@create');


Route::group([
 
    'middleware' => 'api',
  
 ], function ($router) {
  
    Route::post('login', 'AuthController@login');
    Route::get('me', 'AuthController@me');
    Route::get('getUser','UserController@index');
    Route::post('addUser','UserController@create');
    Route::get('getTaches', 'TacheController@index');
    Route::post('addTache', 'TacheController@create');
    Route::get('getTache/{id}','TacheController@getTache');
    Route::delete('deleteTache/{id}','TacheController@deleteTache');
    Route::put('updateTache/{id}', 'TacheController@updateTache');
    Route::put('changeStatut/{id}', 'TacheController@changeStatut');
 });

 


