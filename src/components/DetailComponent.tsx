import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";
import { getTalentRequestById } from "../store/talentRequest/talentRequestSlice";
import { cn, requestStatuses } from "../utils/utils";

const DetailComponent = (): React.ReactElement => {
    const {
        talentRequest: {
            talentRequestTitle,
            requestStatus,
            startDate,
            jobDescription,
            candidateSkills,
        },
        isError,
        message,
        isLoading,
    } = useAppSelector((state) => state.talentRequest);

    const dispatch = useAppDispatch();

    const { talentRequestId } = useParams();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        dispatch(getTalentRequestById(talentRequestId!));
    }, [dispatch, isError, message, talentRequestId]);

    if (isLoading) {
        return (
            <div className="absolute top-0 left-0 w-screen h-screen bg-amber-700 flex flex-col justify-center items-center">
                <div className="animate-bounce rounded-full h-[200px] w-[200px] bg-orange-900"></div>
            </div>
        );
    }

    if (isError) {
        return <h3>Something Went Wrong</h3>;
    }

    return (
        <article className="flex flex-col justify-start p-3 bg-amber-700  text-white w-[80%] m-auto">
            <div className="p-2 flex flex-col justify-between border-b-2 border-slate-50 gap-y-3">
                <div className="flex flex-col sm:flex-row justify-between gap-y-3">
                    <h1 className="font-poppins text-2xl font-bold">
                        {talentRequestTitle}
                    </h1>
                    <span
                        className={cn(
                            `p-2 text-center rounded w-[210px] font-mono font-bold ${requestStatus === requestStatuses.open ? "bg-amber-400/60" : requestStatus === requestStatuses.approved ? "bg-green-400/60" : "bg-purple-400/60"}`
                        )}
                    >
                        {requestStatus}
                    </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-y-3">
                    <span className="text-base font-semibold break-words">
                        Start Date: {startDate}
                    </span>
                    <Link
                        to="/view-all-requests"
                        className="text-xl text-center w-[210px] bg-amber-600/50 p-1 rounded hover:bg-amber-900 transition-all duration-300"
                    >
                        Go back
                    </Link>
                </div>
            </div>
            <div className="bg-amber-700 flex-col flex p-3 ">
                <div className="flex flex-col p-2">
                    <h2 className="text-xl font-poppins font-bold">
                        Job Description
                    </h2>
                    <h3 className="text-base font-poppins font-bold mt-2">
                        Responsibilites
                    </h3>
                    <p className="text-base font-poppins">
                        {jobDescription.responsibilities}
                    </p>
                </div>
                <div className="flex flex-col p-2">
                    <h3 className="text-base font-poppins font-bold">
                        Qualifications
                    </h3>
                    <p className="text-base font-poppins">
                        {jobDescription.qualifications}
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
                    <p className="uppercase">{candidateSkills.coreSkill}</p>
                </div>
                <div className="flex flex-col p-2">
                    <h3 className="text-base font-poppins font-bold">
                        Skill Level
                    </h3>
                    <p className="uppercase">{candidateSkills.skillLevel}</p>
                </div>
            </div>
        </article>
    );
};

export default DetailComponent;
