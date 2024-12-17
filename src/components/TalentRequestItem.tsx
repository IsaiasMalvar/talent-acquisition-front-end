import React from "react";
import { TalentRequestFulfillment } from "../store/talentRequest/types";

interface TalentRequestItemProps {
    talentRequestItem: TalentRequestFulfillment;
}

const TalentRequestItem = ({
    talentRequestItem: { startDate, talentRequestTitle, status },
}: TalentRequestItemProps): React.ReactElement => {
    return (
        <>
            <div className="col-start-1 bg-black rounded p-2 text-center">
                {talentRequestTitle}
            </div>
            <div className="col-start-2 bg-green-500 rounded p-2 text-center">
                {startDate}
            </div>
            <div className="col-start-3 bg-red-500-200 rounded p-2 text-center">
                {status}
            </div>
            <div className="col-start-4 bg-blue-50 rounded p-2 text-center">
                View and Approve
            </div>
        </>
    );
};

export default TalentRequestItem;
