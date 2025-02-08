<?php

namespace App\Enums;

enum CardStatus: string
{
    case TODO = 'Todo';
    case DONE = 'Done';
    case ONREVIEW = 'On Review';
    case INPROGRESS = 'In Progress';

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => ['value' => $item->value, 'label' => $item->name])->values()->toArray();
    }
}
