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
    return <TalentsList talentList={talentFulfillments} />;
};

export default TalentFulfillmentsPage;
