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
            <h1 className="text-5xl text-white font-oswald text-center mt-5">
                Available Requests
            </h1>
            <div className="mobile:hidden sm:grid grid-cols-4 gap-3 p-5 mt-10 mb-5 h-[95%] items-center border-4 rounded border-amber-900/70 mx-2">
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
                        isSmall={false}
                        talentRequestItem={talentRequest}
                        key={talentRequest.talentRequestId}
                    />
                ))}
            </div>
            <div className="mobile:block sm:hidden border-4 border-amber-700 mt-5 p-3 mb-5 h-[90%]">
                {talentRequests.map((talentRequest) => (
                    <TalentRequestItem
                        isSmall={true}
                        talentRequestItem={talentRequest}
                        key={talentRequest.talentRequestId}
                    />
                ))}
            </div>
        </section>
    );
};

export default ViewAllRequestsPage;
