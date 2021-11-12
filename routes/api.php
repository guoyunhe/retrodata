<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ImageController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

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

Route::resource('images', ImageController::class);
