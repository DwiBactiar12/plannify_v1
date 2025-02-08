import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const STATUS = {
    TODO: 'To Do',
    INPROGRESS: 'In Progress',
    DONE: 'Done',
    ONREVIEW: 'On Review',
    UNKNOWN: 'Unknown',
};

export const PRIORITY = {
    URGENT: 'Urgent',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    UNKNOWN: 'Unknown',
};

export const flashMessage = (params) => {
    return params.props.flash_message;
};
