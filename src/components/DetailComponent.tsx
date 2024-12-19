import React from "react";
import { Link, useLocation } from "react-router";

import { cn, dateToString, requestStatuses } from "../utils/utils";
import { TalentRequestFulfillment } from "../store/types";

interface DetailComponentProps {
    talentType: TalentRequestFulfillment;
}

const DetailComponent = ({
    talentType,
}: DetailComponentProps): React.ReactElement => {
    const path = useLocation();
    console.log(path.pathname.includes("/talent-requests"));
    const shouldRenderSpan =
        path.pathname.includes("/talent-requests") ||
        path.pathname.includes("/talent-fulfillments");
    return (
        <article className="flex flex-col justify-start p-3 bg-amber-700  text-white w-[80%] m-auto ">
            <div className="p-2 flex flex-col justify-between border-b-2 border-slate-50 gap-y-3">
                <div className="flex flex-col sm:flex-row justify-between gap-y-3">
                    <h1 className="font-poppins text-2xl font-bold uppercase">
                        {talentType.talentRequestTitle}
                    </h1>
                    {shouldRenderSpan && (
                        <span
                            className={cn(
                                `p-2 text-center rounded w-[210px] font-mono font-bold ${talentType.requestStatus === requestStatuses.open ? "bg-amber-400/60" : talentType.requestStatus === requestStatuses.approved ? "bg-green-400/60" : "bg-purple-400/60"}`
                            )}
                        >
                            {talentType.requestStatus}
                        </span>
                    )}
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-y-3">
                    {path.pathname.includes("/talent-requests") ||
                        (path.pathname.includes("/talent-fulfillments") && (
                            <span className="text-base font-semibold break-words">
                                Start Date:
                                {dateToString(
                                    talentType.startDate as string | Date
                                )}
                            </span>
                        ))}
                    <Link
                        to="/"
                        className="text-xl text-center w-[210px] bg-amber-600/50 p-1 rounded hover:bg-amber-900 transition-all duration-300"
                    >
                        Go back
                    </Link>
                </div>
            </div>
            <div className="bg-amber-700 flex-col flex p-3 ">
                {path.pathname.includes("/talent-fulfillment") && (
                    <>
                        {" "}
                        <div className="flex flex-col p-2">
                            <h2 className="text-xl font-poppins font-bold">
                                Talent Request Id
                            </h2>
                            <p className="text-base font-poppins">
                                {talentType.talentRequestId}
                            </p>
                        </div>
                        <div className="flex flex-col p-2">
                            <h2 className="text-xl font-poppins font-bold">
                                Talent Fulfillment Id
                            </h2>
                            <p className="text-base font-poppins">
                                {talentType.talentFulfillmentId}
                            </p>
                        </div>
                    </>
                )}
                <div className="flex flex-col p-2">
                    <h2 className="text-xl font-poppins font-bold">
                        Job Description
                    </h2>
                    <h3 className="text-base font-poppins font-bold mt-2">
                        Responsibilites
                    </h3>
                    <p className="text-base font-poppins">
                        {talentType.jobDescription?.responsibilities}
                    </p>
                </div>
                <div className="flex flex-col p-2">
                    <h3 className="text-base font-poppins font-bold">
                        Qualifications
                    </h3>
                    <p className="text-base font-poppins">
                        {talentType.jobDescription?.qualifications}
                    </p>
                </div>
            </div>
            <div className="bg-amber-700 flex-col flex p-3">
                <div className="flex flex-col p-2">
                    <h2 className="text-xl font-poppins font-bold">
                        Candidate Skills
                    </h2>
                    <h3 className="text-base font-poppins font-bold mt-2">
                        Core technical Skill
                    </h3>
                    <p className="uppercase">
                        {talentType.candidateSkills?.coreSkill}
                    </p>
                </div>
                <div className="flex flex-col p-2">
                    <h3 className="text-base font-poppins font-bold">
                        Skill Level
                    </h3>
                    <p className="uppercase">
                        {talentType.candidateSkills?.skillLevel}
                    </p>
                </div>
            </div>
            {path.pathname.includes("/career-portal") && (
                <div className="bg-amber-700 flex-col flex p-3">
                    <div className="flex flex-col p-2">
                        <h2 className="text-xl font-poppins font-bold">
                            Job Classification
                        </h2>
                        <h3 className="text-base font-poppins font-bold mt-2">
                            Role Level
                        </h3>
                        <p className="uppercase">{talentType.roleLevel}</p>
                    </div>
                    <div className="flex flex-col p-2">
                        <h3 className="text-base font-poppins font-bold">
                            Employment Type
                        </h3>
                        <p className="uppercase">{talentType.employmentType}</p>
                    </div>
                </div>
            )}
        </article>
    );
};

export default DetailComponent;
