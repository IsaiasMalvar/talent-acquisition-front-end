export interface TalentRequest {
    talentRequestTitle: string;
    jobDescription: JobDescription;
    candidateSkills: CandidateSkills;
    requestStatus: string;
    startDate: string;
}

export interface TalentRequestFulfillment {
    talentRequestTitle?: string;
    requestStatus?: string;
    startDate?: Date;
    talentRequestId?: string;
    talentFulfillmentId?: string;
    roleLevel?: string;
    employmentType?: string;
    jobPostId?: string;
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

export interface TalentFulfillmentSliceState {
    talentFulfillments: TalentRequestFulfillment[];
    talentFulfillment: TalentRequestFulfillment;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

export interface CareerPortalSliceState {
    jobPosts: TalentRequestFulfillment[];
    jobPost: TalentRequestFulfillment;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}
