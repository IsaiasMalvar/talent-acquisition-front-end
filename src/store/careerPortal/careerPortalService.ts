import axios from "axios";

const career_portal_service =
    "http://localhost:8080/career-portal-service/job-post";

const getAllJobPosts = async () => {
    const response = await axios.get(career_portal_service);

    return response.data;
};

const getJobPostById = async (jobPostId: string) => {
    const response = await axios.get(career_portal_service + "/" + jobPostId);
    console.log(response.data);
    return response.data;
};

const careerPortalService = {
    getAllJobPosts,
    getJobPostById,
};

export default careerPortalService;
