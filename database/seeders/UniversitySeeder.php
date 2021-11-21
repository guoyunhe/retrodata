<?php

namespace Database\Seeders;

use App\Models\University;
use Illuminate\Database\Seeder;

class UniversitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        University::factory([
            'name' => '阿尔托大学',
            'name_en' => 'Aalto University',
            'slug' => 'aalto',
        ])
            ->hasMemberships(10)
            ->create();
        University::factory([
            'name' => '浙江大学',
            'name_en' => 'Zhejiang University',
            'slug' => 'zju',
        ])
            ->hasMemberships(10)
            ->create();
        University::factory([
            'name' => '深圳大学',
            'name_en' => 'Shenzhen University',
            'slug' => 'szu',
        ])
            ->hasMemberships(10)
            ->create();
    }
}
