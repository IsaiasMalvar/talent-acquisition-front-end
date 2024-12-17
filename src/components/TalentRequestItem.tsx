import React from "react";
import { TalentRequestFulfillment } from "../store/talentRequest/types";
import { Link } from "react-router";
import { cn } from "../utils/utils";

interface TalentRequestItemProps {
    talentRequestItem: TalentRequestFulfillment;
}

const TalentRequestItem = ({
    talentRequestItem: {
        startDate,
        talentRequestTitle,
        requestStatus,
        talentRequestId,
    },
}: TalentRequestItemProps): React.ReactElement => {
    const requestStatuses = {
        open: "OPEN",
        assigned: "ASSIGNED_TO_TA",
        approved: "APPROVED",
    };

    return (
        <>
            <div className="font-oswald text-xl col-start-1 p-2 text-center text-slate-100">
                {talentRequestTitle}
            </div>
            <div className="font-oswald text-xl col-start-2 p-2 text-center text-slate-100">
                {new Date(startDate).toLocaleDateString("en-US", {
                    timeZone: "UTC",
                })}
            </div>
            <div
                className={cn(
                    `font-oswald text-xl text-slate-100 col-start-3 p-2 text-center ${requestStatus === requestStatuses.open ? "bg-amber-400/60" : requestStatus === requestStatuses.approved ? "bg-green-400/60" : "bg-purple-400/60"}`
                )}
            >
                {requestStatus}
            </div>
            <div className="col-start-4 hover:bg-amber-900 transition-all duration-300 p-2 text-center font-oswald text-xl text-slate-100 border rounded-md">
                <Link to={`/talent-request/${talentRequestId}`}>
                    View and Approve
                </Link>
            </div>
        </>
    );
};

export default TalentRequestItem;
