<?php

Route::get('{any?}/{any2?}/{any3?}', function () {
    return view('index');
});