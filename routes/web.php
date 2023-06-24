<?php

use App\Http\Controllers\PemasukkanController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::permanentRedirect('/' , '/login');

Route::get('/dashboard', [PemasukkanController::class, 'index']) ->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/pemasukkan', [PemasukkanController::class, 'store']) ->middleware(['auth', 'verified'])->name('pemasukkan.store');
Route::get('/pemasukkan', [PemasukkanController::class, 'create']) ->middleware(['auth', 'verified'])->name('pemasukkan.create');
Route::post('/pemasukkan/update', [PemasukkanController::class, 'update']) ->middleware(['auth', 'verified'])->name('pemasukkan.update');
Route::get('/pemasukkan/edit', [PemasukkanController::class, 'edit']) ->middleware(['auth', 'verified'])->name('pemasukkan.edit');
Route::post('/pemasukkan/delete', [PemasukkanController::class, 'destroy']) ->middleware(['auth', 'verified'])->name('pemasukkan.delete');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
