<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function card(): BelongsTo
    {
        return $this->belongsTo(Card::class);
    }
}
