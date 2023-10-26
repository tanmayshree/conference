import Heading from "../Heading/Heading";
import "./ImportantDates.css";
import date from "./../../assets/date.jpg"

import React from 'react'

export default function ImportantDates() {
    return (
        <div>
            <Heading title="Important Dates"/>
            <div className="md:flex gap-72 mx-10">
                <img src={date} alt="" className="md:w-1/4"/>
                <div className="overflow-x-auto w-[400px] md:w-[800px]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="border-cyan-900 border-b-2">
                                <th>Activity</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="hover cursor-pointer">
                                <td>Paper Submission Deadline</td>
                                <td>15th June, 2024</td>
                            </tr>
                            {/* row 1 */}
                            <tr className="hover cursor-pointer">
                                <td>Paper Submission Deadline</td>
                                <td>15th June, 2024</td>
                            </tr>
                            {/* row 1 */}
                            <tr className="hover cursor-pointer">
                                <td>Paper Submission Deadline</td>
                                <td>15th June, 2024</td>
                            </tr>
                            {/* row 1 */}
                            <tr className="hover cursor-pointer">
                                <td>Paper Submission Deadline</td>
                                <td>15th June, 2024</td>
                            </tr>
                            {/* row 1 */}
                            <tr className="hover cursor-pointer">
                                <td>Paper Submission Deadline</td>
                                <td>15th June, 2024</td>
                            </tr>
                            {/* row 1 */}
                            <tr className="hover cursor-pointer">
                                <td>Paper Submission Deadline</td>
                                <td>15th June, 2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
