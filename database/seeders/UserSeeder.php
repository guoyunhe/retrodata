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
        User::factory(['name' => 'The Admin', 'email' => 'admin@example.com', 'role' => 'admin'])
            ->count(1)
            ->create();
    }
}
