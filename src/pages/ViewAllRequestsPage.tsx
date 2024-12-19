import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
    getAllTalentRequests,
    reset,
} from "../store/talentRequest/talentRequestSlice";
import TalentsList from "../components/TalentsList";

const ViewAllRequestsPage = (): React.ReactElement => {
    const { isSuccess, talentRequests } = useAppSelector(
        (state) => state.talentRequest
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllTalentRequests());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset());
            }
        };
    }, [dispatch, isSuccess]);

    return (
        <TalentsList
            sectionTitle="AVAILABLE REQUESTS"
            column1="Title"
            column2="Start Date"
            colum3="Status"
            column4="Actions"
            talentList={talentRequests}
        />
    );
};

export default ViewAllRequestsPage;
