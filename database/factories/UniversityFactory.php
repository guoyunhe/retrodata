<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UniversityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->city() . ' University';
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'contact_name' => $this->faker->name(),
            'contact_email' => $this->faker->email(),
            'contact_phone' => $this->faker->phoneNumber(),
        ];
    }
}
