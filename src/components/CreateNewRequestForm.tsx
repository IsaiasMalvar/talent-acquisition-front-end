import React, { ReactEventHandler, useState } from "react";

const CreateNewRequestForm = (): React.ReactElement => {
    const [talentRequest, setTalentRequest] = useState({
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

    return (
        <div className="p-5 bg-amber-950/10 mb-10">
            <form className="flex flex-col gap-y-5 p-2">
                <div className="form-group">
                    <label htmlFor="talentRequestTitle">
                        Talent Request Title
                    </label>
                    <input
                        type="text"
                        className="option"
                        name="talentRequestTitle"
                        value={talentRequestTitle}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobDescription">
                        Job Description (Responsibilities & Qualifications)
                    </label>
                    <input
                        type="text"
                        name="responsibilities"
                        placeholder="Responsibilities"
                        className="option placeholder:text-slate-200/90"
                        value={responsibilities}
                        onChange={onChangeJobDescription}
                    />
                    <input
                        type="text"
                        name="qualifications"
                        placeholder="Qualifications"
                        className="option placeholder:text-slate-200/90"
                        value={qualifications}
                        onChange={onChangeJobDescription}
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
                        >
                            <option className="bg-amber-800" value="">
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
                        >
                            <option className="bg-amber-800" value="">
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
                        type="date"
                        className="option"
                        name="startDate"
                        value={startDate}
                        onChange={() => {}}
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateNewRequestForm;
