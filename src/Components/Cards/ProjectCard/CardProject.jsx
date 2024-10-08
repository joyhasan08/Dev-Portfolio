
import './CardProject.css'
import test from '../../../assets/project/New Website Blue Mockup Instagram - Laptop (4).png'
const CardProject = () => {
    return (
        <div>
            <article className="article-wrapper">
                <div className="rounded-lg container-project">
                    <img src={test} alt="" />
                </div>
                <div className="project-info">
                    <div className="flex-pr">
                        <div className="project-title text-nowrap">Project</div>
                        <div className="project-hover">
                            <svg
                                style={{ color: 'black' }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                color="black"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                            >
                                <line y2="12" x2="19" y1="12" x1="5"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                    <div className="types">
                        <span
                            style={{ backgroundColor: 'rgba(165, 96, 247, 0.43)', color: 'rgb(85, 27, 177)' }}
                            className="project-type"
                        >
                            • Analytics
                        </span>
                        {/* <p>Lorem ipsum dolor sit amet, </p> */}
                        <span className="project-type">• Dashboards</span>
                    </div>
                </div>
            </article>

        </div >
    );
};

export default CardProject;