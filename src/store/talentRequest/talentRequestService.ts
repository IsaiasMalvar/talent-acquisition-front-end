import axios from "axios";
import { TalentRequest } from "./types";

const talent_request_service =
    "http://localhost:8080/talent-request-service/talent-request";

const createTalentRequest = async (talentRequest: TalentRequest) => {
    const response = await axios.post(talent_request_service, talentRequest);

    return response.data;
};

const getAllTalentRequests = async () => {
    const response = await axios.get(talent_request_service);
    console.log(response.data);
    return response.data;
};

const getTalentRequestById = async (talentRequestId: string) => {
    const response = await axios.get(
        talent_request_service + "/" + talentRequestId
    );

    return response.data;
};

const talentRequestService = {
    createTalentRequest,
    getAllTalentRequests,
    getTalentRequestById,
};

export default talentRequestService;
