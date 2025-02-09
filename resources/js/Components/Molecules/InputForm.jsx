import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import InputError from '../InputError';
import InputLabel from '../InputLabel';
import TextInput from '../TextInput';

export default function InputForm({
    name,
    title,
    type = 'text',
    value,
    onChange,
    onError,
    isFocused = false,
    infoTitle,
    ClassNameInfoTitle = 'text-blue-600',
    infoLink,
    placeholder,
}) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <InputLabel htmlFor={name} value={title} />
                {infoTitle && (
                    <div className="text-sm">
                        <Link href={infoLink} className={cn('font-semibold', ClassNameInfoTitle)}>
                            {infoTitle}
                        </Link>
                    </div>
                )}
            </div>
            <TextInput
                id={name}
                type={type}
                name={name}
                value={value}
                className="mt-1 block w-full"
                placeholder={placeholder}
                isFocused={isFocused}
                onChange={onChange}
                onError={onError && <InputError message={onError} className="mt-1" />}
            />
        </div>
    );
}
