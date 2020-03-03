<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Option;
use Faker\Generator as Faker;

$factory->define(Option::class, function (Faker $faker) {
    return [
        'title' => 'عنوان',
        'body' => 'این یک تست زیبا بریا همیشه میشود چرا که دنیا بدون تو هیچ میشود',
        'pic' => '/svg/computing-cloud-download-svgrepo-com.svg'
    ];
});
