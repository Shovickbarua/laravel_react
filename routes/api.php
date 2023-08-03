<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CrudController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/cruds', [CrudController::class, 'store']);
Route::get('/list', [CrudController::class, 'index']);
Route::resource('crud', CrudController::class);
Route::get('/show', [CrudController::class, 'show']);
Route::get('/edit/{id}', [CrudController::class, 'edit']);
Route::get('/update/{id}', [CrudController::class, 'update']);
// Route::get('/delete/{id}', [CrudController::class, 'destroy']);