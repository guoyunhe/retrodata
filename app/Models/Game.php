<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    /**
     * Some game names contain region flags like `(USA)`. We can extract regions
     * from it.
     */
    public function extractRegionFromName()
    {
        if ($this->name) {
            if (str_ends_with($this->name, '(USA)')) {
                $this->region = 'USA';
            } else if (str_ends_with($this->name, '(Europe)')) {
                $this->region = 'Europe';
            } else if (str_ends_with($this->name, '(Japan)')) {
                $this->region = 'Japan';
            }
        }
    }
}
