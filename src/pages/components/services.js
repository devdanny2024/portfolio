import Image from 'next/image';
function Services() {
    return(
    <>
        <div className='services-cont'>
            <div className='services-title'>
                <h1>Services</h1>
                <h2>Skill-Set</h2>
                <br></br>
            </div>
            <div className='services-skills'>
                <div className='service-card'>
                    <Image
                    className= 'service-icon'
                        src="/apple.png" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={47} // Specify width
                        height={47} // Specify height
                    />
                    <h1>iOS Development</h1>
                    <p>
                    Experienced in developing high-performance iOS applications
                     using Swift and Objective-C. I have worked on creating 
                     intuitive user interfaces and implementing backend integrations to 
                     deliver smooth and engaging mobile experiences.
                    </p>
                </div>
                <div className='service-card'>
                    <Image
                    className= 'service-icon'
                        src="/github.svg" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={47} // Specify width
                        height={47} // Specify height
                    />
                    <h1>Git Version Control</h1>
                    <p>
                    Proficient in Git, I manage collaborative projects, maintain clean codebases, and ensure smooth project progress using GitHub and GitLab, handling branches, merges, and commits efficiently.                    
                    </p>
                </div>
                <div className='service-card'>
                    <Image
                    className= 'service-icon'
                        src="/server.svg" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={47} // Specify width
                        height={47} // Specify height
                    />
                    <h1>Backend Development </h1>
                    <p>
                    Building scalable backends using Node.js and Express, I ensure efficient, secure interactions between decentralized systems and user interfaces. My systems handle high loads and integrate blockchain technologies effectively.                    </p>
                </div> 
                <div className='service-card'>
                    <Image
                    className= 'service-icon'
                        src="/blockchain.png" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={47} // Specify width
                        height={47} // Specify height
                    />
                    <h1>Blockchain Development</h1>
                    <p>
                    I develop secure and efficient smart contracts and decentralized applications (dApps) using Solidity and Ethereum. My experience spans finance, healthcare, and supply chain, ensuring decentralized systems operate smoothly.
                    </p>
                    </div> 
                <div className='service-card'>
                    <Image
                    className= 'service-icon'
                        src="/web.png" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={47} // Specify width
                        height={47} // Specify height
                    />
                    <h1>Full Stack Web3 Development </h1>
                    <p>
                    I create full-stack Web3 apps, combining React.js for frontend and Web3.js for blockchain interactions. My dApps offer seamless user experiences with integrated wallets, tokens, and secure transactions.                    </p>
                </div> 
                <div className='service-card'>
                    <Image
                    className= 'service-icon'
                        src="/api.png" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={47} // Specify width
                        height={47} // Specify height
                    />
                    <h1>API Development & Integration </h1>
                    <p>
                    I design and integrate secure APIs using REST and GraphQL, ensuring smooth interactions between decentralized apps and external services. My APIs are scalable, secure, and easy to maintain.                    </p>
                </div> 
            </div>
        </div>

    </>
    )
};
export default Services;