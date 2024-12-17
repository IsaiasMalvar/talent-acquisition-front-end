import React from "react";
import CreateNewRequestForm from "../components/CreateNewRequestForm";

const CreateRequestPage = (): React.ReactElement => {
    return (
        <section className="flex m-auto flex-col w-full items-center gap-y-5">
            <h1 className="font-oswald uppercase text-5xl text-slate-100 mt-4">
                Create New Request
            </h1>
            <CreateNewRequestForm />
        </section>
    );
};

export default CreateRequestPage;
