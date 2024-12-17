import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
    getAllTalentRequests,
    reset,
} from "../store/talentRequest/talentRequestSlice";
import TalentRequestItem from "../components/TalentRequestItem";

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
        <section className="m-auto h-full flex flex-col items-center">
            <h1 className="text-5xl text-white font-oswald ">
                Available Requests
            </h1>
            <div className="grid  grid-cols-4 gap-3 p-5 mt-10 h-[70%] items-center border-4 rounded border-amber-900/70">
                <div className="grid-title col-start-1">
                    Talent Request Title
                </div>
                <div className="grid-title col-start-2 text-center">
                    Start Date
                </div>
                <div className="grid-title col-start-3 text-center">Status</div>
                <div className="grid-title col-start-4 text-center">
                    Actions
                </div>
                {talentRequests.map((talentRequest) => (
                    <TalentRequestItem
                        talentRequestItem={talentRequest}
                        key={talentRequest.talentRequestId}
                    />
                ))}
            </div>
        </section>
    );
};

export default ViewAllRequestsPage;
