<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $casts = [
        'techs' => 'array',
        'options' => 'json',
    ];
}
