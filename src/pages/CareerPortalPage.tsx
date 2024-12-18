import React, { useEffect } from "react";
import TalentsList from "../components/TalentsList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllJobPosts, reset } from "../store/careerPortal/careerPortalSlice";

const CareerPortalPage = (): React.ReactElement => {
    const { jobPosts, isSuccess } = useAppSelector((state) => state.jobPost);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllJobPosts());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset());
            }
        };
    }, [dispatch, isSuccess]);
    return (
        <div>
            <TalentsList
                sectionTitle="JOB POSTS"
                column1="Job Title"
                column2="Core Skill"
                colum3="Employment Type"
                column4="Actions"
                talentList={jobPosts}
            />
        </div>
    );
};

export default CareerPortalPage;
