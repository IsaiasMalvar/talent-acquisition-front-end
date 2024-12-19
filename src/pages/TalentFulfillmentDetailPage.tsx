import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import {
    approveTalentFulfillmentJobPost,
    getTalentFulfillmentById,
    reset,
} from "../store/talentFulfillment/talentFulfillmentSlice";
import DetailComponent from "../components/DetailComponent";
import { TalentRequestFulfillment } from "../store/types";

const TalentFulfillmentDetailPage = (): React.ReactElement => {
    const { talentFulfillment, isError, message, isLoading } = useAppSelector(
        (state) => state.talentFulfillment
    );

    const dispatch = useAppDispatch();

    const { talentFulfillmentId } = useParams();
    const navigate = useNavigate();

    const [talentFulfillmentState, setTalentFulfillmentState] =
        useState<TalentRequestFulfillment>({
            candidateSkills: {
                coreSkill: "",
                skillLevel: "",
            },
            employmentType: "",
            jobDescription: {
                qualifications: "",
                responsibilities: "",
            },
            jobPostId: "",
            requestStatus: "",
            roleLevel: "",
            startDate: new Date().getTime().toLocaleString(),
            talentFulfillmentId: "",
            talentRequestId: "",
            talentRequestTitle: "",
        });

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        dispatch(getTalentFulfillmentById(talentFulfillmentId!));
    }, [dispatch, isError, message, talentFulfillmentId]);

    useEffect(() => {
        if (talentFulfillment) {
            setTalentFulfillmentState({ ...talentFulfillment });
        }
    }, [talentFulfillment]);

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTalentFulfillmentState({
            ...talentFulfillmentState,
            [event.target.name]: event.target.value,
        });
    };

    const onChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setTalentFulfillmentState({
                ...talentFulfillmentState,
                requestStatus: "APPROVED",
            });
        } else {
            setTalentFulfillmentState({
                ...talentFulfillmentState,
                requestStatus: "",
            });
        }
    };

    const onApproveJobPost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(approveTalentFulfillmentJobPost(talentFulfillmentState));
        dispatch(reset());
        console.log(talentFulfillmentState, "im");
    };

    if (isLoading) {
        return (
            <div className="absolute top-0 left-0 w-screen h-screen bg-amber-700 flex flex-col justify-center items-center">
                <div className="animate-bounce rounded-full h-[200px] w-[200px] bg-orange-900"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="absolute top-0 left-0 w-screen h-screen bg-amber-700 flex flex-col justify-center items-center">
                <div className="animate-pulse text-9xl rounded-full  text-red-600">
                    ERROR
                </div>
            </div>
        );
    }

    return (
        <section className="flex justify-between flex-col items-start">
            <DetailComponent talentType={talentFulfillment} />

            {talentFulfillment.requestStatus !== "APPROVED" && (
                <div className="p-3 bg-amber-950/10 mb-5 w-[80%] m-auto">
                    <form
                        className="flex flex-col gap-y-5 p-2"
                        onSubmit={onApproveJobPost}
                    >
                        <div className="form-group">
                            <div className="mb-3 flex flex-col gap-y-2">
                                <label htmlFor="">Role Level</label>
                                <select
                                    name="roleLevel"
                                    className="option"
                                    value={talentFulfillmentState.roleLevel}
                                    onChange={onChange}
                                    required
                                >
                                    <option
                                        className="bg-amber-800"
                                        value=""
                                        disabled
                                    >
                                        Select Role Level
                                    </option>
                                    <option
                                        className="bg-amber-800"
                                        value="INDIVIDUAL_CONTRIBUTOR"
                                    >
                                        Contributor
                                    </option>
                                    <option
                                        className="bg-amber-800"
                                        value="LEADERSHIP"
                                    >
                                        Leadership
                                    </option>
                                </select>
                            </div>
                            <div className="form-group p-0">
                                <div className="mb-3 flex flex-col gap-y-2">
                                    <label htmlFor="">Employment Type</label>
                                    <select
                                        name="employmentType"
                                        className="option"
                                        value={
                                            talentFulfillmentState.employmentType
                                        }
                                        onChange={onChange}
                                        required
                                    >
                                        <option
                                            className="bg-amber-800"
                                            value=""
                                            disabled
                                        >
                                            Select Employment Type
                                        </option>
                                        <option
                                            className="bg-amber-800"
                                            value="FULLTIME"
                                        >
                                            Full Time
                                        </option>
                                        <option
                                            className="bg-amber-800"
                                            value="CONTRACT"
                                        >
                                            Contract
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group p-0 ">
                                    <div className="mb-3 flex flex-col gap-y-2 items-start">
                                        <label htmlFor="">Approval</label>
                                        <input
                                            type="checkbox"
                                            name="requestStatus"
                                            id="approval"
                                            onChange={onChecked}
                                            checked={
                                                talentFulfillmentState.requestStatus ===
                                                "APPROVED"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-auto">
                            <button
                                className="option p-3 hover:bg-amber-900 transition-all duration-500 text-slate-50"
                                type="submit"
                            >
                                Submit Talent Request
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </section>
    );
};

export default TalentFulfillmentDetailPage;
