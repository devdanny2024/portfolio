import Image from 'next/image';

function Footer() {
    return(
    <>
       <div className='footer-cont'>
            <div className='footer-title'>
                <h1>Social Bar</h1>
            </div>
            <div className='footer-socials'>
                <a href= 'https://github.com/devdanny2024'  target='_blank' rel='noopener noreferrer'>
                    <Image
                        className= 'fservice-icon'
                        src="/github.svg" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={47} // Specify width
                        height={47} // Specify height
                    />
                </a>
                <a href='https://www.instagram.com/_itsofficialpete/profilecard/?igsh=bXRuZTd4eTVnODE3'  target='_blank' rel='noopener noreferrer'>
                    <Image
                        className= 'fservice-icon'
                        src="/instagram.svg" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={47} // Specify width
                        height={47} // Specify height
                    />
                </a>
                <a href='https://x.com/theatarodo2nd?s=21'  target='_blank' rel='noopener noreferrer'>
                    <Image
                        className= 'fservice-icon'
                        src="/twitter.svg" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={47} // Specify width
                        height={47} // Specify height
                    />
                </a>
                
            </div>
       </div>
    </>
    )
};

export default Footer;
