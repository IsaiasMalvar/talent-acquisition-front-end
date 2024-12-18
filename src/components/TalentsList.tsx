import React from "react";
import { TalentRequestFulfillment } from "../store/types";
import TalentRequestItem from "./TalentRequestItem";

interface TalentListProps {
    talentList: TalentRequestFulfillment[];
    sectionTitle: string;
    column1: string;
    column2: string;
    colum3: string;
    column4: string;
}

const TalentsList = ({
    talentList,
    sectionTitle,
    column1,
    column2,
    colum3,
    column4,
}: TalentListProps): React.ReactElement => {
    return (
        <>
            <section className="m-auto h-full flex flex-col items-center">
                <h1 className="text-5xl text-white font-oswald text-center mt-5">
                    {sectionTitle}
                </h1>
                <div className="mobile:hidden sm:grid grid-cols-4 gap-3 p-5 mt-10 mb-5 h-[95%] items-center border-4 rounded border-amber-900/70 mx-2">
                    <div className="grid-title col-start-1">{column1}</div>
                    <div className="grid-title col-start-2 text-center">
                        {column2}
                    </div>
                    <div className="grid-title col-start-3 text-center">
                        {colum3}
                    </div>
                    <div className="grid-title col-start-4 text-center">
                        {column4}
                    </div>
                    {talentList.map((talentRequest) => (
                        <TalentRequestItem
                            column1={column1}
                            column2={column2}
                            colum3={colum3}
                            isSmall={false}
                            talentRequestItem={talentRequest}
                            key={talentRequest.talentRequestId}
                        />
                    ))}
                </div>
                <div className="mobile:block sm:hidden border-4 border-amber-700 mt-5 p-3 mb-5 h-[90%]">
                    {talentList.map((talentRequest) => (
                        <TalentRequestItem
                            column1={column1}
                            column2={column2}
                            colum3={colum3}
                            isSmall={true}
                            talentRequestItem={talentRequest}
                            key={talentRequest.talentRequestId}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default TalentsList;
