<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Plan;
use Faker\Generator as Faker;

$factory->define(Plan::class, function (Faker $faker) {
    return [
        'title' => $faker->realText(20),
        'price' => random_int(5000000,500000000),
        'techs' => ['php','jquery','bootstrap'],
        'options' => ['سبد خرید','اسلایدر اختصاصی','پنل اختصاصی'],
        'color' => $faker->colorName,
    ];
});
