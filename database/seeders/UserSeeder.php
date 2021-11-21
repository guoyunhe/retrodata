<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Platform account
        User::factory(['email' => 'admin@example.com', 'type' => 'platform'])
            ->count(1)
            ->create();
    }
}
