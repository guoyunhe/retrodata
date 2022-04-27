<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\GameController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\SeriesController;
use App\Http\Controllers\TitleController;
use App\Models\User;

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

// Get current user profile & settings
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Update current user profile & settings
Route::middleware('auth:sanctum')->put('/user', function (Request $request) {
    $request->validate([
        'name' => 'required|min:2|max:100',
        'avatar_id' => 'nullable|exists:images,id',
    ]);
    $user = $request->user();
    $user->name = $request->input('name');
    $user->avatar_id = $request->input('avatar_id');
    $user->save();
    return $user;
});

Route::get('/users', function (Request $request) {
    return User::all();
});

Route::resource('games', GameController::class);

Route::resource('images', ImageController::class);

Route::resource('titles', TitleController::class);

Route::resource('series', SeriesController::class);
