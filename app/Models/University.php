<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class University extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'slug', 'contact_name', 'contact_phone', 'contact_email'];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['logo', 'memberships'];

    /**
     * Get the logo.
     */
    public function logo()
    {
        return $this->belongsTo(Image::class);
    }

    /**
     * Get the memberships.
     */
    public function memberships()
    {
        return $this->morphMany(Membership::class, 'organization')->with('user');
    }
}
