import React, { useState, useEffect } from 'react';
import { getYear, getMonth } from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { getMonthName } from "../../Services/DateFunctions";

type HeaderProps = {
    date: Date,
    previousClick: ()=> void,
    nextClick: ()=>void
}

export default function Header( props: HeaderProps ){
    const navigate = useNavigate();
    const [monthName, setMonthName] = useState<string>('');

    useEffect(() => {
        const monthName = getMonthName(props.date);
        setMonthName(monthName);
    }, [props.date]);

    const handlePreviousClick = () => {
        const previousMonthDate = new Date(props.date);
        previousMonthDate.setMonth(previousMonthDate.getMonth() - 1); // Set to previous month
        props.previousClick();
        navigate(`/${getYear(previousMonthDate)}/${getMonth(previousMonthDate)}`);
    };

    const handleNextClick = () => {
        const nextMonthDate = new Date(props.date);
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1); // Set to next month
        props.nextClick();
        navigate(`/${getYear(nextMonthDate)}/${getMonth(nextMonthDate)}`);
    };
    
    return (
        <div className="mt-3 pt-1">
            <header className="navbar">
                <div className="navbar-left">
                    <a href="#" onClick={handlePreviousClick}><FaChevronLeft /></a>
                </div>
                <div className="navbar-header">
                    <h3>{monthName} {getYear(props.date)}</h3>
                </div>
                <div className="navbar-right">
                    <a href="#" onClick={handleNextClick}><FaChevronRight /></a>
                </div>
            </header>
        </div>
    );
}
