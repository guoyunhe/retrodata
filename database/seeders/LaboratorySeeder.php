<?php

namespace Database\Seeders;

use App\Models\College;
use App\Models\Laboratory;
use Illuminate\Database\Seeder;

class LaboratorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (College::all() as $college) {
            Laboratory::factory(
                [
                    'college_id' => $college->id,
                    'university_id' => $college->university_id
                ]
            )->hasMemberships(10)->count(5)->create();
        }
    }
}
