import './header.scss';
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link, useLocation} from "react-router-dom";

export const Header = () => {
    const [showLeftPanel, setShowLeftPanel] = useState(false);
    const location = useLocation();

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

    useEffect(() => {
        setShowLeftPanel(false);
    }, [location]);

    return (
        <div>
            <div className="header">
                <button className="burger-button" onClick={() => setShowLeftPanel(!showLeftPanel)}>=</button>
                <span className='title'>{links.find(x=>x.route === location.pathname.slice(1))?.title}</span>
            </div>
            <AnimatePresence>
                { showLeftPanel && leftPanel }
            </AnimatePresence>
        </div>
    )
}