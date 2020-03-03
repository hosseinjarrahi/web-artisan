<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Sample;
use Faker\Generator as Faker;

$factory->define(Sample::class, function (Faker $faker) {
    return [
        'title' => $faker->realText(20) ,
        'price' => random_int(5000,500000) ,
        'body' => $faker->realText(300) ,
        'techs' =>  ['php','laravel'],
        'pic' => '/img/landing.svg',
    ];
});
