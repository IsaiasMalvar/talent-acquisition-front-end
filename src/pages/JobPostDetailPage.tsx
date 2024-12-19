import React, { useEffect } from "react";
import DetailComponent from "../components/DetailComponent";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { getJobPostById } from "../store/careerPortal/careerPortalSlice";

const JobPostDetailPage = (): React.ReactElement => {
    const { jobPost, isError, message, isLoading } = useAppSelector(
        (state) => state.jobPost
    );

    const dispatch = useAppDispatch();

    const { jobPostId } = useParams();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        dispatch(getJobPostById(jobPostId!));
    }, [dispatch, isError, message, jobPostId]);

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
        <section className="flex justify-center h-[800px] items-center md:w-[50%] m-auto mobile:w-[100%]">
            <DetailComponent talentType={jobPost} />
        </section>
    );
};

export default JobPostDetailPage;
