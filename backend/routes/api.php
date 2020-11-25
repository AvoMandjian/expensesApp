<?php

use Illuminate\Support\Facades\Route;


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


// Route::apiResource('exxpenses', ExpensesController::class);
Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::middleware('auth:api')->get('/user/{userId}/detail', 'UserController@show');

Route::get('expenses', 'ExpensesController@index');

Route::get('expenses/{id}', 'ExpensesController@show');
Route::get('expenses/showUserExpenses/{id}', 'ExpensesController@showUserExpenses');

Route::delete('expenses/{id}', 'ExpensesController@destroy');
Route::post('expenses', 'ExpensesController@store');
Route::put('expenses/{id}', 'ExpensesController@update');

Route::get('categories', 'CategoryController@index');
Route::get('categories/{id}', 'CategoryController@show');

Route::get('user/{email}', 'getUser@getId');
