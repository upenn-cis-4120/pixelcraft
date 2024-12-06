import React from 'react';
import './HomeScreen.css';
import { ReactComponent as BackArrowIcon } from './icons/backArrowIcon.svg';
import { Link } from 'react-router-dom';

function AboutScreen() {
    return (
        <div className="home-screen">
            <div className="header">
                <Link to="/profile" className="back-arrow-icon">
                    <BackArrowIcon />
                </Link>
                <div className="profile-text">About</div>
            </div>

        <div className="about-screen">

            
            {/* Content Section */}
            <div className="about-content">

                <section className="about-section">
                    <h2>Introduction</h2>
                    <p>
                    Managing a diverse portfolio across multiple asset classes—such as stocks, real estate, cryptocurrencies, and gold—poses a significant challenge for modern investors. Tracking these investments often involves using a combination of siloed tools, manual spreadsheets, and multiple accounts, leading to fragmented workflows and potential errors. Existing tools generally lack comprehensive integration, failing to provide a unified view of financial portfolios. Furthermore, many tools demand substantial manual effort to maintain up-to-date records, creating frustration and inefficiency. These challenges highlight the need for a streamlined, user-friendly solution that aggregates data and provides actionable insights in real-time.

                    </p>
                    <p>
                    Our interface addresses this problem by offering a consolidated platform designed to simplify financial tracking and decision- making. It integrates data from multiple brokerages and supports manual entry for non-digital assets, such as real estate, providing users with a comprehensive view of their portfolio. Key features include a real-time net worth dashboard, intuitive navigation that organizes assets by class and broker, and customizable dashboards to suit diverse user needs. Dynamic visualizations, such as performance charts and allocation breakdowns, enhance clarity, while features like personalized alerts and contextual help ensure the platform is both powerful and accessible.

                    </p>
                </section>

                <section className="about-section">
                    <h2>Design Process</h2>
                    <h3>Validating the Problem Statement</h3>
                    <img src={require('./icons/1.png')} alt="Introduction" className="about-section-image" />

                    <p>
                    We conducted interviews with eight participants, including a mix of experienced investors and beginners, to gain insights into the challenges of managing diverse investment portfolios. A significant source of frustration, highlighted by most participants, was the lack of seamless integration between different brokerage platforms. Many users reported spending hours manually consolidating data from various brokerages, cryptocurrency wallets, and other financial tools. Beginners were especially overwhelmed by the inconsistency of features across these platforms, while advanced investors found it tedious to track real estate and other non-digital assets alongside their broker-provided data. One participant described their current system as “a maze of apps and spreadsheets,” emphasizing the need for a solution that simplifies the process of centralizing financial information.
                    </p>
                    
                    <p>Unique feedback from the interviews also highlighted opportunities for improvement. Several participants expressed the desire for better tracking of asset-specific data, such as property valuation trends for real estate or performance metrics for private investments. A seasoned investor suggested integrating broker APIs not just for data aggregation but also for initiating portfolio rebalancing or transactions directly from the platform—an idea we earmarked for future iterations. These insights informed our platform’s focus on brokerage integrations for real-time updates, intuitive tools for manual entry of non-digital assets, and the inclusion of customizable features to make the interface adaptable to each user's investment style and priorities.
                    </p>
                    <h3>Prototyping and User Feedback</h3>
                    <img src={require('./icons/2.png')} alt="Design Process" className="about-section-image" />

                    <p>
                    In Stage 2 of the design process, we focused on prototyping and iteratively improving the interface, supported by a structured evaluation methodology. For the evaluation, we worked closely with two retail investors who represented our target user group. Initially, they interacted with our paper prototype, providing qualitative feedback on the usability and effectiveness of key features like the consolidated "net worth" view. While this feature was appreciated for simplifying portfolio tracking across diverse assets like stocks, bonds, and PMS/AIF offerings, evaluators highlighted that the interface felt overwhelming due to the variety of asset types being tracked. Based on this feedback, we iteratively developed a second prototype, incorporating an AI chat feature to simplify navigation and enable users to query specific data in a conversational format. To further enhance engagement, we added a news feed for market updates related to their portfolio, which evaluators found dynamic and highly relevant. Finally, we introduced broker integration, allowing users to connect multiple brokerage accounts seamlessly, eliminating the need to toggle between platforms. Through usability testing and qualitative interviews after each iteration, we ensured that our improvements directly addressed user pain points, ultimately creating an interface that evaluators found significantly more intuitive, efficient, and personalized.
                    </p>


                    <h3>Hi-Fi Prototyping</h3>
                    <img src={require('./icons/3.png')} alt="Prototyping and User Feedback" className="about-section-image" />

                    <p>In the next stage of the design process, we created a high-fidelity prototype using Figma, incorporating insights from earlier evaluations to refine the interface and interactions. This prototype emphasized streamlined navigation, a simplified visual layout, and collapsible sections to prioritize essential data while reducing visual clutter. The high-fidelity design provided a polished and realistic user experience, making it easier for users to perform tasks such as viewing their portfolio overview or drilling down into specific asset classes. During testing, users interacted positively with the interface, noting that the clean design and intuitive structure enhanced their confidence in using the app for comprehensive portfolio tracking. The improved visual hierarchy and logical organization were particularly well-received, as they made navigating the platform feel seamless and natural. This feedback validated the effectiveness of our design improvements and demonstrated the potential of the platform to meet diverse user needs.
                    </p>

                </section>

                <section className="about-section">
                    <h2>Summarized User Insights</h2>

                    <ul>
                        <li><strong>Fragmented Tools and Data Consolidation:</strong> Users found managing multiple asset types across different platforms frustrating and time-consuming; they valued the "net worth" feature for its consolidated view.
                        </li>

                        <li><strong>Overwhelming Visual Complexity:</strong> Excessive graphs and numbers made the layout feel cluttered, leading to the implementation of collapsible sections to simplify the interface.
                        </li>
                        <li><strong>Value of Real-Time Portfolio Updates:</strong>Real-time integration with brokerages was highly appreciated, especially by active traders who rely on up-to-date information.</li>
                        <li><strong>Ease of Tracking Asset Classes:</strong>Users loved the ability to track diverse investments, including niche assets like PMS/AIF offerings, but requested clearer categorization of assets for faster navigation.</li>
                        <li><strong>Dynamic and Personalized Features:</strong>The news feed for portfolio-relevant updates was a standout feature, and users suggested further personalization to align with individual investment strategies.
                        </li>

                    </ul>
                    <img src={require('./icons/4.png')} alt="Hi-Fi Prototyping" className="about-section-image" />
                    <img src={require('./icons/5.png')} alt="User Insights" className="about-section-image" />


                    
                    
                </section>

                <section className="about-section">
                    <h2>Design Choices</h2>
                    <img src={require('./icons/6.png')} alt="Design Choices" className="about-section-image" />

                    <p>
                    The app leverages a robust system architecture to provide real-time portfolio management and tracking. It integrates an API Gateway and a Real-Time Data Feed to gather dynamic updates from financial markets, processed by a Data Aggregation Service for seamless consolidation. A Manual Input Processor allows users to include non-digital assets, which are stored in a centralized Database. The Visualization Engine and Machine Learning Module work together to generate intuitive insights, personalized analytics, and dynamic visualizations, all accessible through a user-friendly interface.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Main App Features</h2>
                    <ul>
                    <img src={require('./icons/7.png')} alt="App Features" className="about-section-image" />

                        <li><strong>Consolidated Dashboard:</strong>The consolidated dashboard serves as the central hub of the platform, offering users a comprehensive, real-time overview of their financial portfolios. This feature integrates data across all asset classes, including stocks, bonds, cryptocurrencies, real estate, and collectibles, providing a unified view of total net worth.
                        </li>
                        <li><strong>Seamless Data Integration:</strong>Our platform seamlessly aggregates financial data from multiple sources, addressing the fragmentation often faced by investors managing diverse asset types. The system connects with leading brokerages and financial institutions to automatically import holdings, transactions, and performance metrics.
                        </li>
                        <img src={require('./icons/8.png')} alt="Usability Test Results" className="about-section-image" />

                        <li><strong>Dynamic Visualizations and Advanced Analytics:
                        </strong>Dynamic visualizations transform raw financial data into actionable insights, offering users an engaging and informative experience. Line graphs and area charts display historical portfolio performance.
                        </li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>Usability Test Results</h2>
                    <img src={require('./icons/9.png')} alt="Future Directions" className="about-section-image" />

                    <p>
                    The usability test results show that our platform achieved a higher Net Promoter Score (NPS) compared to both Robinhood and Charles Schwab. This indicates greater user satisfaction and a stronger likelihood of users recommending our app for portfolio management.
                    </p>
                    <p>By addressing existing gaps in portfolio management tools, our interface provides a robust foundation for improving financial tracking. Its intuitive design, real-time data integration, and dynamic features like collapsible sections and portfolio-relevant updates make it a standout solution. With continued iterations and user-centered enhancements, the platform has the potential to become an indispensable tool for investors of all experience levels.
                    </p>
                </section>
            </div>
        </div>
        </div>
    );
}

export default AboutScreen;
