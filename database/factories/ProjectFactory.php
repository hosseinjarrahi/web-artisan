<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Project;
use Faker\Generator as Faker;

$factory->define(Project::class, function (Faker $faker) {
    return [
        'title' => $faker->realText(20) ,
        'complete' => random_int(0,100) ,
        'description' => $faker->realText(200) ,
        'plan_id' => random_int(0,10) ,
        'url' => $faker->url ,
        'steps' =>  [
            ['step' => 'صفحه لاگین','state' => random_int(0,1),'time' => random_int(1,10)],
            ['step' => 'صفحه لاگین','state' => random_int(0,1),'time' => random_int(1,10)],
            ['step' => 'صفحه لاگین','state' => random_int(0,1),'time' => random_int(1,10)],
        ],
    ];
});
