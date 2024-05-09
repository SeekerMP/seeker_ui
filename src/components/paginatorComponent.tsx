import {useState} from "react";
import "./paginatorComponent.scss";

type PaginatorProps = {
    pageCount: number,
    nextPageExists: boolean,
    loadPage: (page: number, onLoadEnded: () => void) => void
}

export const PaginatorComponent = (props: PaginatorProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loadingInProgress, setLoadingInProgress] = useState<boolean>(false);

    const onNextPageClicked = () => {
        const newPage = currentPage + 1;
        setLoadingInProgress(true);
        setCurrentPage(newPage);

        props.loadPage(newPage, onLoadEnded);
    }

    const onPrevPageClicked = () => {
        if (currentPage === 1) return;
        const newPage = currentPage - 1;
        setLoadingInProgress(true);
        setCurrentPage(newPage);

        props.loadPage(newPage, onLoadEnded);
    }

    const onLoadEnded = () => {
        setLoadingInProgress(false);
    }

    return(
        <div className="paginator">
            <button disabled={currentPage === 1 || loadingInProgress} onClick={onPrevPageClicked}>prev</button>
            <div className="counter">{currentPage} - {props.pageCount}</div>
            <button disabled={!props.nextPageExists || loadingInProgress} onClick={onNextPageClicked}>next</button>
        </div>
    )
}