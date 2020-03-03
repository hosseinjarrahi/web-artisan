<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->realText(30),
        'author' => $faker->firstName,
        'short_desc' => $faker->realText(60),
        'long_desc' => $faker->realText(1000),
        'pic' => '/img/modern-web.png',
        'meta_description' => $faker->realText(50),
        'keywords' => $faker->realText(50),
    ];
});
