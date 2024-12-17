import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
    getAllTalentRequests,
    reset,
} from "../store/talentRequest/talentRequestSlice";

const ViewAllRequests = (): React.ReactElement => {
    // isLoading,talentRequests,

    const { isSuccess } = useAppSelector((state) => state.talentRequest);

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
        <section className="m-auto">
            <div className="grid  grid-cols-4 gap-3 p-5 mt-5 ">
                <div className="grid-title col-start-1 ">
                    Talent Request Title
                </div>
                <div className="grid-title col-start-2 ">Start Date</div>
                <div className="grid-title col-start-3 ">Status</div>
                <div className="grid-title col-start-4 ">Actions</div>
                {Array(4)
                    .fill("")
                    .map(() => (
                        <>
                            <div className="col-start-1  p-2 text-center">
                                Side Content
                            </div>
                            <div className="col-start-2   p-2 text-center">
                                Side Content
                            </div>
                            <div className="col-start-3   p-2 text-center">
                                Side Content
                            </div>
                            <div className="col-start-4  p-2 text-center">
                                Side Content
                            </div>
                        </>
                    ))}
            </div>
        </section>
    );
};

export default ViewAllRequests;
