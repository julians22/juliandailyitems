<?php

use App\Http\Controllers\Frontend\CollectionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use TCG\Voyager\Facades\Voyager;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group(['as' => 'frontend.'], function() {
    Route::get('/', function () {
        return Inertia::render('Welcome')
            ->withViewData([
                'title' => 'Home - ' . config('app.name'),
                'description' => "Dean Abner Julian personal information website's"
            ]);
    })->name('home');

    Route::resource('collections', CollectionController::class)->only('index', 'show');
});



Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
