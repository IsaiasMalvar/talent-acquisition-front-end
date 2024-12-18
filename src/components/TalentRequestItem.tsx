import React from "react";
import { TalentRequestFulfillment } from "../store/types";
import { Link, useLocation } from "react-router";
import { cn, dateToString, requestStatuses } from "../utils/utils";

interface TalentRequestItemProps {
    talentRequestItem: TalentRequestFulfillment;
    isSmall: boolean;
    column1: string;
    column2: string;
    colum3: string;
}

const TalentRequestItem = ({
    talentRequestItem: {
        startDate,
        talentRequestTitle,
        requestStatus,
        talentRequestId,
        talentFulfillmentId,
        candidateSkills,
        employmentType,
        jobPostId,
    },
    isSmall,
    column1,
    column2,
    colum3,
}: TalentRequestItemProps): React.ReactElement => {
    const path = useLocation();

    return (
        <>
            {isSmall ? (
                <>
                    <div className="flex flex-col justify-start items-start p-2 border-amber-900/70 border-b-2 mb-5">
                        <div className="grid-title col-start-1 text-orange-950">
                            {column1}
                        </div>
                        <div className="font-oswald text-xl p-2 text-center text-slate-100">
                            {talentRequestTitle}
                        </div>
                        <div className="grid-title text-orange-950">
                            {column2}
                        </div>
                        <div className="font-oswald text-xl p-2 text-center text-slate-100">
                            {path.pathname.includes("/career-portal") ? (
                                <>{dateToString(startDate!)}</>
                            ) : (
                                <>{candidateSkills?.coreSkill}</>
                            )}
                        </div>
                        <div className="grid-title text-orange-950">
                            {colum3}
                        </div>
                        {path.pathname.includes("/career-portal") ? (
                            <div className="font-oswald text-xl p-2 text-center text-slate-100">
                                {employmentType}
                            </div>
                        ) : (
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
                        )}
                        <div className="mt-5 hover:bg-amber-900 hover:border-amber-900 transition-all duration-300 p-2 text-center font-oswald text-xl text-slate-100 border rounded-md">
                            {path.pathname.includes("/talent-fulfillments") ? (
                                <Link
                                    to={`/talent-fulfillments/${talentFulfillmentId}`}
                                    className="text-slate-100 transition-all duration-300"
                                >
                                    Approve
                                </Link>
                            ) : path.pathname.includes("/career-portal") ? (
                                <Link
                                    to={`/career-portal/${jobPostId}`}
                                    className="text-slate-100 transition-all duration-300"
                                >
                                    Details
                                </Link>
                            ) : (
                                <Link
                                    to={`/talent-requests/${talentRequestId}`}
                                    className="text-slate-100 transition-all duration-300"
                                >
                                    Details
                                </Link>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="font-oswald text-xl col-start-1 p-2 text-center text-slate-100">
                        {talentRequestTitle}
                    </div>
                    <div className="font-oswald text-xl col-start-2 p-2 text-center text-slate-100">
                        {path.pathname.includes("/career-portal") ? (
                            <>{dateToString(startDate!)}</>
                        ) : (
                            <>{candidateSkills?.coreSkill}</>
                        )}
                    </div>
                    {path.pathname.includes("/career-portal") ? (
                        <div
                            className={cn(
                                `font-oswald text-xl text-slate-100 col-start-3 p-2 text-center ${requestStatus === requestStatuses.open ? "bg-amber-400/60" : requestStatus === requestStatuses.approved ? "bg-green-400/60" : "bg-purple-400/60"}`
                            )}
                        >
                            {requestStatus}
                        </div>
                    ) : (
                        <span className="font-oswald text-xl text-slate-100 p-2 text-center">
                            {employmentType}
                        </span>
                    )}
                    <div className="col-start-4 hover:bg-amber-900 transition-all duration-300 p-2 text-center font-oswald text-xl text-slate-100 border rounded-md">
                        {path.pathname.includes("/talent-fulfillments") ? (
                            <Link
                                to={`/talent-fulfillments/${talentFulfillmentId}`}
                            >
                                Approve
                            </Link>
                        ) : path.pathname.includes("/career-portal") ? (
                            <Link to={`/career-portal/${jobPostId}`}>
                                Details
                            </Link>
                        ) : (
                            <Link to={`/talent-requests/${talentRequestId}`}>
                                Details
                            </Link>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default TalentRequestItem;
