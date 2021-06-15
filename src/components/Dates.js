import React from "react";




const Dates = ({dates}) => {
    const { start_date, end_date } = dates;
    const startDateFormatted = new Date(start_date).toLocaleDateString("el-gr");
    const endDateFormatted = new Date(end_date).toLocaleDateString("el-gr");

    return (
        <> 
        {startDateFormatted} - {endDateFormatted}
        </>
    );

};

export default Dates ;