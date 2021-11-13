<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

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
        $path = Storage::putFile('img', $image);
        return [
            'path' => $path,
            'height' => $height,
            'width' => $width,
        ];
    }
}
