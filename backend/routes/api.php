<?php

use Illuminate\Support\Facades\Route;





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

Route::post('login', 'LoginController@login');
Route::post('register', 'LoginController@register');
