<?php

use App\Option;
use App\Plan;
use App\Post;
use App\Project;
use App\Sample;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Option::truncate();
        Plan::truncate();
        Post::truncate();
        Project::truncate();
        Sample::truncate();

        factory(Option::class,5)->create();
        factory(Plan::class,5)->create();
        factory(Post::class,5)->create();
        factory(Project::class,5)->create();
        factory(Sample::class,3)->create();
    }
}
