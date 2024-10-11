import Image from 'next/image';

function Projects() {
    return(
    <>
        <div className='project-cont'>
            <div className='project-title'>
                <h1>Projects</h1>
                <h2>Top Ones</h2>
            </div>
            <div className='proj-case'>
                <div className ='project-row'>
                    <div className = 'project1-img'></div>
                    <div className='project-desc'>
                        <h1>Software Development</h1>
                        <h2>SUSI.AI</h2>
                        <p>The main feature of the app is to provide a conversational 
                            interface to provide intelligent answers using 
                            the loklak/AskSusi infrastructure.
                        </p>
                        <h3><b>Platform:</b> Swift, SwiftUI.</h3>
                        <a className='project-btn' href='https://github.com/devdanny2024/Susi' target='_blank' rel='noopener noreferrer'>View Project</a>
                    </div>
                </div>
                <div className ='project-row'>
                    <div className='project-desc'>
                        <h1>Website Development</h1>
                        <h2>Hashiro</h2>
                        <p>The main feature of the website is to offer a streamlined platform for trading NFTs, providing users with secure transactions, wallet integration, and intuitive collection browsing.
                        </p>
                        <h3><b>Platform:</b> Solidity. Next.js, Web3.js.</h3>
                        <a className='project-btn' href='https://github.com/devdanny2024/Hashiroo' target='_blank' rel='noopener noreferrer'>View Project</a>
                    </div>
                    <div className = 'project2-img'></div>
                </div>
                <div className ='project-row'>
                    <div className = 'project1-img'></div>
                    <div className='project-desc'>
                        <h1>Website Development</h1>
                        <h2>NFT Wagon</h2>
                        <p>NFTWAGON is a decentralized platform where users can easily trade, buy, and sell NFTs. Built on Next.js for the frontend and Solidity
                        </p>
                        <h3><b>Platform:</b> Swift, SwiftUI.</h3>
                        <a className='project-btn' href='https://github.com/Blvckcodeio/nftwagons' target='_blank' rel='noopener noreferrer'>View Project</a>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    )
};
export default Projects;