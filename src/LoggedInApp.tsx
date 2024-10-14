import {Navigate, Route, Routes} from "react-router-dom";
import {JobInfo} from "@components/JobInfo/jobInfo";
import {SyncAndFiltersPage} from "@components/syncAndFiltersPage";
import React from "react";
import {useUser} from "./data/providers/user";
import {useMediaQuery} from "react-responsive";

export const LoggedInApp = () => {
    const { user } = useUser();
    //TODO: move to context
    const hasMouse = useMediaQuery({ query: '(any-hover: hover)'});

    if (user == null)
        return <Navigate to="/login" />;

    return (
        <Routes>
            <Route path="/jobList" element={<JobInfo hasMouse={hasMouse} />} />
            <Route path="/filters" element={<SyncAndFiltersPage />} />
            <Route path="/" element={<Navigate to="/jobList" replace={true} />}/>
        </Routes>
    )
}