export interface TalentRequest {
    talentRequestTitle: string;
    jobDescription: JobDescription;
    candidateSkills: CandidateSkills;
    startDate: string;
}

export interface TalentRequestFulfillment {
    talentRequestTitle: string;
    status: string;
    startDate: string;
}

export interface CandidateSkills {
    coreSkill: string;
    skillLevel: string;
}

export interface JobDescription {
    responsibilities: string;
    qualifications: string;
}
