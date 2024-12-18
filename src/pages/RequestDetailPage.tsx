import React from "react";
import DetailComponent from "../components/DetailComponent";

const RequestDetailPage = (): React.ReactElement => {
    return (
        <section className="flex justify-between h-[650px] items-center ">
            <DetailComponent />
        </section>
    );
};

export default RequestDetailPage;
