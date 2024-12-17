import React, { useEffect, useState } from "react";
import { TalentRequest } from "../store/talentRequest/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
    createTalentRequest,
    reset,
} from "../store/talentRequest/talentRequestSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateNewRequestForm = (): React.ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { message, isError, isSuccess } = useAppSelector(
        (state) => state.talentRequest
    );

    const [talentRequest, setTalentRequest] = useState<TalentRequest>({
        talentRequestTitle: "",
        jobDescription: { responsibilities: "", qualifications: "" },
        candidateSkills: { coreSkill: "", skillLevel: "" },
        startDate: "",
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setTalentRequest({
            ...talentRequest,
            [event.target.name]: event.target.value,
        });

    const onChangeJobDescription = (
        event: React.ChangeEvent<HTMLInputElement>
    ) =>
        setTalentRequest({
            ...talentRequest,
            jobDescription: {
                ...talentRequest.jobDescription,
                [event.target.name]: event.target.value,
            },
        });

    const onChangeCandidateSkills = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) =>
        setTalentRequest({
            ...talentRequest,
            candidateSkills: {
                ...talentRequest.candidateSkills,
                [event.target.name]: event.target.value,
            },
        });

    const {
        talentRequestTitle,
        jobDescription: { responsibilities, qualifications },
        startDate,
        candidateSkills: { coreSkill, skillLevel },
    } = talentRequest;

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createTalentRequest(talentRequest));
    };

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess) {
            dispatch(reset());
            navigate("/get-all-talent-requests");
        }

        dispatch(reset());
    });

    return (
        <div className="p-5 bg-amber-950/10 mb-10">
            <form className="flex flex-col gap-y-5 p-2" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="talentRequestTitle">
                        Talent Request Title
                    </label>
                    <input
                        type="text"
                        className="option focus-within:option focus:option"
                        name="talentRequestTitle"
                        value={talentRequestTitle}
                        onChange={onChange}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobDescription">
                        Job Description (Responsibilities & Qualifications)
                    </label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="responsibilities"
                        placeholder="Responsibilities"
                        className="option placeholder:text-slate-200/90"
                        value={responsibilities}
                        onChange={onChangeJobDescription}
                        required
                    />
                    <input
                        autoComplete="off"
                        type="text"
                        name="qualifications"
                        placeholder="Qualifications"
                        className="option placeholder:text-slate-200/90"
                        value={qualifications}
                        onChange={onChangeJobDescription}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">
                        Candidate Skills (Core Skill & Skill Level)
                    </label>
                    <div className="">
                        <select
                            name="coreSkill"
                            className="option"
                            value={coreSkill}
                            onChange={onChangeCandidateSkills}
                            required
                        >
                            <option className="bg-amber-800" value="" disabled>
                                Select Core Skill
                            </option>
                            <option className="bg-amber-800" value="JAVA">
                                Java
                            </option>
                            <option className="bg-amber-800" value="PYTHON">
                                Python
                            </option>
                            <option className="bg-amber-800" value="NODEJS">
                                NodeJS
                            </option>
                            <option className="bg-amber-800" value="REACT">
                                React
                            </option>
                            <option
                                className="bg-amber-800"
                                value="PROJECT_MANAGEMENT"
                            >
                                Project Management
                            </option>
                            <option
                                className="bg-amber-800"
                                value="AGILE_COACH"
                            >
                                Agile Coach
                            </option>
                        </select>
                    </div>
                    <div className="">
                        <select
                            name="skillLevel"
                            className="option"
                            value={skillLevel}
                            onChange={onChangeCandidateSkills}
                            required
                        >
                            <option className="bg-amber-800" value="" disabled>
                                Select Skill Level
                            </option>
                            <option className="bg-amber-800" value="STUDENT">
                                Student
                            </option>
                            <option className="bg-amber-800" value="JUNIOR">
                                Junior
                            </option>
                            <option className="bg-amber-800" value="ENTRY">
                                Entry
                            </option>
                            <option className="bg-amber-800" value="ADVANCED">
                                Advanced
                            </option>
                            <option className="bg-amber-800" value="EXPERsT">
                                Expert
                            </option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        autoComplete="off"
                        type="date"
                        className="option"
                        name="startDate"
                        value={startDate}
                        onChange={onChange}
                        required
                    />
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
    );
};

export default CreateNewRequestForm;
