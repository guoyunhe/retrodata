<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $width = 300;
        $height = 300;
        $image = file_get_contents("https://source.unsplash.com/random/${width}x${height}");
        $path = 'public/' . Str::random(10) . '.jpg';
        $full_path = storage_path('app/' . $path);
        file_put_contents($full_path, $image);
        return [
            'path' => $path,
            'height' => $height,
            'width' => $width,
        ];
    }
}
