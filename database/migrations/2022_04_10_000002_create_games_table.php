<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('system');
            $table->string('serial');
            $table->string('region')->nullable();
            $table->foreignId('title_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('boxart_image_id')->nullable()->constrained('images')->nullOnDelete();
            $table->foreignId('snap_image_id')->nullable()->constrained('images')->nullOnDelete();
            $table->foreignId('title_image_id')->nullable()->constrained('images')->nullOnDelete();
            $table->string('developer')->nullable();
            $table->string('publisher')->nullable();
            $table->date('release_date')->nullable();
            $table->string('esrb_rating')->nullable();
            $table->string('pegi_rating')->nullable();
            $table->integer('users')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}
