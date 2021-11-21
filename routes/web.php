<?php

use App\Models\University;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::prefix('api')->group(function () {
//     Route::resources([
//         'images' => 'App\Http\Controllers\ImageController',
//         'tags' => 'App\Http\Controllers\TagController',
//         'users' => 'App\Http\Controllers\UserController',
//     ]);
// });

Route::domain('{university}.' . config('app.domain'))->group(function () {
    Route::get('/{any?}', function (
        $university
    ) {
        return view('app', [
            'university' =>  University::firstWhere('slug', $university),
        ]);
    })->where('any', '.*');
});

Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');
