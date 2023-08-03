import "./sidebar.css"
import { LineStyle, Timeline, PersonOutline, AssessmentOutlined, ChatBubbleOutlineOutlined, ErrorOutlined, RateReviewOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to="/analytics" className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </li>
                        </Link>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PersonOutline className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AssessmentOutlined className="sidebarIcon" />
                            Reports
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            < RateReviewOutlined className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined className="sidebarIcon" />
                            Messages
                        </li>
                        <li className="sidebarListItem">
                            <ErrorOutlined className="sidebarIcon" />
                            Issues
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
