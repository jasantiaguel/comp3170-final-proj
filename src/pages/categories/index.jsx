import { Link } from "react-router-dom";
import SelectCategory from "../../components/SelectCategory";
import React from 'react';
import '../../css/App.css';
import '../../css/index.css';

export function CategoriesHome() {
    return(
        <div className="welcome-bg" bg>
                <SelectCategory />
        </div>
        
    )
}