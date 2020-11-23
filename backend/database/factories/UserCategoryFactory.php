<?php

namespace Database\Factories;

use App\Models\User_Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User_Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' =>
            $this->faker->numberBetween($min = 1, $max = 3),
            'category_id' =>  $this->faker->numberBetween($min = 1, $max = 5),
        ];
    }
}
