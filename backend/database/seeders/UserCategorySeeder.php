<?php

namespace Database\Seeders;


use Database\Factories\UserCategoryFactory;
use Illuminate\Database\Seeder;


class UserCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $seeder = new UserCategoryFactory();
        $seeder->count(5)->create();
    }
}
