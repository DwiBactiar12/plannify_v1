import { PRIORITY } from "@/lib/utils";
import { Badge } from "@Components/ui/badge";

export default function GetPriorityBadge({ priority }) {

    const { HIGH, MEDIUM, LOW, UNKNOWN, URGENT } = PRIORITY;

    let badge, text;

    switch (priority) {
        case URGENT:
            badge = "bg-red-500 hover:bg-red-600";
            text = URGENT;
            break;
        case HIGH:
            badge = "bg-yellow-100 text-yellow-800";
            text = HIGH;
            break;
        case MEDIUM:
            badge = "bg-blue-100 text-blue-800";
            text = MEDIUM;
            break;
        case LOW:
            badge = "bg-green-100 text-green-800";
            text = LOW;
            break;
        default:
            badge = "";
            text = UNKNOWN;
            break;
    }
    return (
        <Badge className={badge}>{text}</Badge>
    );
}
