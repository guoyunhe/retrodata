<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Laboratory extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'name_en', 'slug'];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['logo'];

    /**
     * Get the logo.
     */
    public function logo()
    {
        return $this->belongsTo(Image::class);
    }

    /**
     * Get the university.
     */
    public function university()
    {
        return $this->belongsTo(University::class);
    }

    /**
     * Get the college.
     */
    public function college()
    {
        return $this->belongsTo(College::class);
    }

    /**
     * Get the memberships.
     */
    public function memberships()
    {
        return $this->morphMany(Membership::class, 'organization')->with('user');
    }
}
