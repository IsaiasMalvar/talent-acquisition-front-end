import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
    getAllTalentFulfillments,
    reset,
} from "../store/talentFulfillment/talentFulfillmentSlice";
import TalentsList from "../components/TalentsList";

const TalentFulfillmentsPage = (): React.ReactElement => {
    const { talentFulfillments, isSuccess } = useAppSelector(
        (state) => state.talentFulfillment
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllTalentFulfillments());
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
            talentList={talentFulfillments}
        />
    );
};

export default TalentFulfillmentsPage;
