import React from "react";
import { TalentRequestFulfillment } from "../store/types";
import { Link } from "react-router";
import { cn, requestStatuses } from "../utils/utils";

interface TalentRequestItemProps {
    talentRequestItem: TalentRequestFulfillment;
    isSmall: boolean;
}

const TalentRequestItem = ({
    talentRequestItem: {
        startDate,
        talentRequestTitle,
        requestStatus,
        talentRequestId,
    },
    isSmall,
}: TalentRequestItemProps): React.ReactElement => {
    return (
        <>
            {isSmall ? (
                <>
                    <div className="flex flex-col justify-start items-start p-2 border-amber-900/70 border-b-2 mb-5">
                        <div className="grid-title col-start-1 text-orange-950">
                            Talent Request Title
                        </div>
                        <div className="font-oswald text-xl p-2 text-center text-slate-100">
                            {talentRequestTitle}
                        </div>
                        <div className="grid-title text-orange-950">
                            Start Date
                        </div>
                        <div className="font-oswald text-xl p-2 text-center text-slate-100">
                            {new Date(startDate).toLocaleDateString("en-US", {
                                timeZone: "UTC",
                            })}
                        </div>
                        <div className="grid-title text-orange-950">Status</div>
                        <div
                            className={cn(
                                `font-oswald text-xl text-slate-100 p-2 text-center ${
                                    requestStatus === requestStatuses.open
                                        ? "bg-amber-400/60"
                                        : requestStatus ===
                                            requestStatuses.approved
                                          ? "bg-green-400/60"
                                          : "bg-purple-400/60"
                                }`
                            )}
                        >
                            {requestStatus}
                        </div>
                        <div className="mt-5 hover:bg-amber-900 hover:border-amber-900 transition-all duration-300 p-2 text-center font-oswald text-xl text-slate-100 border rounded-md">
                            <Link
                                to={`/talent-request/${talentRequestId}`}
                                className="text-slate-100 transition-all duration-300"
                            >
                                View and Approve
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
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
            )}
        </>
    );
};

export default TalentRequestItem;
