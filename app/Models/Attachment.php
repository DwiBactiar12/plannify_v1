<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\Fluent\Concerns\Has;

class Attachment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'card_id',
        'file',
        'link',
        'name'
    ];
}
