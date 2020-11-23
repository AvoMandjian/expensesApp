<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Database\Seeders\CategorySeeder;
use Database\Seeders\ExpensesSeeder;
use Database\Seeders\UserCategorySeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'avo',
            'email' => 'avo@gmail.com',
            'password' => Hash::make('avoavoavo'),
        ]);
        DB::table('users')->insert([
            'name' => 'avo2',
            'email' => 'avo2@gmail.com',
            'password' => Hash::make('avoavoavo'),
        ]);
        DB::table('users')->insert([
            'name' => 'avo3',
            'email' => 'avo3@gmail.com',
            'password' => Hash::make('avoavoavo'),
        ]);


        $seed = new CategorySeeder();
        $seed->run();
        $seed = new UserCategorySeeder();
        $seed->run();
        $seed = new ExpensesSeeder();
        $seed->run();


        // $seed = new CategorySeeder();
        // $seed->run();
        // $seed = new ExpensesSeeder();
        // $seed->run();
        // $seed = new UserCategorySeeder();
        // $seed->run();
    }
}
