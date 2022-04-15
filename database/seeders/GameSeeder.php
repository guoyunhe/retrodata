<?php

namespace Database\Seeders;

use App\Models\Game;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $wii_data = json_decode(file_get_contents(__DIR__ . '/../libretro-database-json/dat/Nintendo - Wii.json'));

        foreach ($wii_data as $wii_game) {
            if (isset($wii_game->name) && isset($wii_game->serial)) {
                $game = new Game([
                    'name' => $wii_game->name,
                    'system' => 'Nintendo Wii',
                    'serial' => $wii_game->serial,
                ]);
                $game->extractRegionFromName();
                if (isset($wii_game->releaseyear)) {
                    $game->release_date = $wii_game->releaseyear;
                    if (isset($wii_game->releasemonth)) {
                        $game->release_date .= '-' . $wii_game->releasemonth;
                    } else {
                        $game->release_date .= '-1';
                    }
                    if (isset($wii_game->releaseday)) {
                        $game->release_date .= '-' . $wii_game->releaseday;
                    } else {
                        $game->release_date .= '-1';
                    }
                }
                if (isset($wii_game->esrb_rating)) {
                    $game->esrb_rating = $wii_game->esrb_rating;
                }
                if (isset($wii_game->users)) {
                    $game->users = $wii_game->users;
                }
                $game->save();
            }
        }
    }
}
