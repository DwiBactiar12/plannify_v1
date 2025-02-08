<?php

namespace App\Enums;

enum WorkspaceVisibility: string
{
    case PRIVATE = 'private';
    case PUBLIC = 'public';

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => ['value' => $item->value, 'label' => $item->name])->values()->toArray();
    }
}
