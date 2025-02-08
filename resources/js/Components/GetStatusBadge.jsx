import { STATUS } from "@/lib/utils";
import { Badge } from "@Components/ui/badge";

export default function GetStatusBadge({ status }) {

    const { DONE, INPROGRESS, ONREVIEW, TODO, UNKNOWN } = STATUS;

    let badge, text;

    switch (priority) {
        case TODO:
            badge = "bg-red-500 hover:bg-red-600";
            text = TODO;
            break;
        case INPROGRESS:
            badge = "bg-yellow-100 text-yellow-800";
            text = INPROGRESS;
            break;
        case ONREVIEW:
            badge = "bg-blue-100 text-blue-800";
            text = ONREVIEW;
            break;
        case DONE:
            badge = "bg-green-100 text-green-800";
            text = DONE;
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
