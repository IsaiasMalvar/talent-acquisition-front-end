import React, { useEffect } from "react";
import DetailComponent from "../components/DetailComponent";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { getTalentRequestById } from "../store/talentRequest/talentRequestSlice";

const RequestDetailPage = (): React.ReactElement => {
    const { talentRequest, isError, message, isLoading } = useAppSelector(
        (state) => state.talentRequest
    );

    const dispatch = useAppDispatch();

    const { talentRequestId } = useParams();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        dispatch(getTalentRequestById(talentRequestId!));
    }, [dispatch, isError, message, talentRequestId]);

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
        <section className="flex justify-between h-[650px] items-center ">
            <DetailComponent talentType={talentRequest} />
        </section>
    );
};

export default RequestDetailPage;
