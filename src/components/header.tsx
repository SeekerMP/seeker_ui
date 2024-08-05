import './header.scss';
import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link, useLocation} from "react-router-dom";
import {useUser} from "../data/providers/user";
import {Button} from "@mui/material";

export const Header = () => {
    const [showLeftPanel, setShowLeftPanel] = useState(false);
    const location = useLocation();

    const { logout } = useUser();

    useEffect(() => {
        setShowLeftPanel(false);
    }, [location]);

    const links = [{
        route: 'jobList',
        title: 'Job List'
    }, {
        route: 'filters',
        title: 'Filters/Sync'
    }];

    const leftPanel =
        <motion.div
            key="left-panel"
            className='left-panel'
            initial={{ left: -350 }}
            animate={{ left: -50 }}
            exit={{ left: -350 }}
            transition={{ type: 'spring', duration: 0.5 }}
        >
            <ul>
                {
                    links.map(link =>
                        <li key={`link-${link.route}`}>
                            <Link
                                to={link.route}
                                className={ `${link.route }` === location.pathname.slice(1) ? 'selected' : ''}>
                                {link.title}
                            </Link>
                        </li>
                    )}
            </ul>
        </motion.div>

    return (
        <div>
            <div className="header">
                <button className="burger-button" onClick={() => setShowLeftPanel(!showLeftPanel)}>=</button>
                <span className='title'>{links.find(x => x.route === location.pathname.slice(1))?.title}</span>
                <Button variant='contained' onClick={ logout }>
                    Logout
                </Button>
            </div>
            <AnimatePresence>
                {showLeftPanel && leftPanel}
            </AnimatePresence>
        </div>
    )
}