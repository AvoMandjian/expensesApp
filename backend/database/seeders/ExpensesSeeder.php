<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Factories\ExpensesFactory;
use Illuminate\Support\Facades\DB;

class ExpensesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeder = new ExpensesFactory();
        $seeder->count(20)->create();
    }
}
