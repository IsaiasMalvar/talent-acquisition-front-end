export interface TalentRequest {
    talentRequestTitle: string;
    jobDescription: JobDescription;
    candidateSkills: CandidateSkills;
    startDate: string;
}

export interface TalentRequestFulfillment {
    talentRequestTitle: string;
    requestStatus: string;
    startDate: Date;
    talentRequestId: string;
}

export interface CandidateSkills {
    coreSkill: string;
    skillLevel: string;
}

export interface JobDescription {
    responsibilities: string;
    qualifications: string;
}

export interface TalentRequestSliceState {
    talentRequests: TalentRequestFulfillment[];
    talentRequest: TalentRequest;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}
