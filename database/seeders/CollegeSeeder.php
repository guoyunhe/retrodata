<?php

namespace Database\Seeders;

use App\Models\College;
use App\Models\University;
use Illuminate\Database\Seeder;

class CollegeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $colleges = [
            [
                'name' => '化学院',
                'name_en' => 'Chemistry College',
                'slug' => 'chemistry',
            ],
            [
                'name' => '生物学院',
                'name_en' => 'Biology College',
                'slug' => 'biology',
            ],
            [
                'name' => '农学院',
                'name_en' => 'Agricultural College',
                'slug' => 'agricultural',
            ],
            [
                'name' => '医学院',
                'name_en' => 'Medical College',
                'slug' => 'medical',
            ],
            [
                'name' => '物理学院',
                'name_en' => 'Physics College',
                'slug' => 'physics',
            ],
            [
                'name' => '测试学院',
                'name_en' => 'Test College',
                'slug' => 'test',
            ],
        ];

        foreach (University::all() as $university) {
            foreach ($colleges as $college) {
                College::factory(
                    array_merge($college, ['university_id' => $university->id])
                )->hasMemberships(10)->create();
            }
        }
    }
}
