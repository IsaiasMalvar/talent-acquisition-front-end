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

    return <TalentsList talentList={talentRequests} />;
};

export default ViewAllRequestsPage;
