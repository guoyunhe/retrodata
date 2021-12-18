<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReagentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // http://www.ciscochem.com/assets/ethyl-acetate-sds.pdf
        // https://www.pure-chemical.com/msds/Ethyl%20Acetate.pdf
        Schema::create('reagents', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('name_en');
            $table->string('synonyms');
            $table->string('synonyms_en');
            $table->string('cas_no');
            $table->string('chemical_formula');
            $table->decimal('molecular_weight');
            $table->decimal('density');

            $table->text('description');
            $table->text('description_en');

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
        Schema::dropIfExists('reagents');
    }
}
