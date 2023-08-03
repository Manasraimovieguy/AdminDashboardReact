import "./widgetLg.css";

import React from 'react'

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Auto Suggestion Updates</h3>
            <table className="widgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="widgetLgTh">User</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Suggestion Generated (Y/N)</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://ca.slack-edge.com/TKLUV7DCL-U022Q2HRNMT-41a4f2900a6a-512" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Chinmay Acharya</span>
                    </td>
                    <td className="widgetLgDate">14th Jul 2022</td>
                    <td className="widgetLgSg">
                        <Button type="Y" />
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Accepted" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://ca.slack-edge.com/TKLUV7DCL-U022Q2HRNMT-41a4f2900a6a-512" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Chinmay Acharya</span>
                    </td>
                    <td className="widgetLgDate">14th Jul 2022</td>
                    <td className="widgetLgSg">
                        <Button type="Y" />
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Accepted" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://ca.slack-edge.com/TKLUV7DCL-U022Q2HRNMT-41a4f2900a6a-512" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Chinmay Acharya</span>
                    </td>
                    <td className="widgetLgDate">14th Jul 2022</td>
                    <td className="widgetLgSg">
                        <Button type="N" />
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="NA" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://ca.slack-edge.com/TKLUV7DCL-U022Q2HRNMT-41a4f2900a6a-512" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Chinmay Acharya</span>
                    </td>
                    <td className="widgetLgDate">14th Jul 2022</td>
                    <td className="widgetLgSg">
                        <Button type="Y" />
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Rejected" />
                    </td>
                </tr>

            </table>

        </div>
    )
}
