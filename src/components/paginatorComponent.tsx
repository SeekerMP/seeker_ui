import {useState} from "react";
import "./paginatorComponent.scss";
import {NextIcon} from "@icons/nextIcon";
import {AnimatePresence, motion} from "framer-motion";

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
            <AnimatePresence>
            {
                props.pageCount > 1 &&
                <motion.div
                    className="paginator-buttons"
                    key='paginator-buttons'
                    initial={{top: -100}}
                    animate={{top: '10%'}}
                    exit={{top: 100}}
                    transition={{type: 'spring', duration: 0.3}}
                >
                    <button disabled={ loadingInProgress } onClick={onPrevPageClicked}>
                        { currentPage !== 1 && <NextIcon className='previous-button-icon'/> }
                    </button>
                    <div className="counter">{currentPage} - {props.pageCount}</div>
                    <button disabled={!props.nextPageExists || loadingInProgress} onClick={onNextPageClicked}>
                        { props.nextPageExists && <NextIcon /> }
                    </button>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}