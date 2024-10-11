import Image from 'next/image';

function Footer() {
    return(
    <>
       <div className='footer-cont'>
            <div className='footer-title'>
                <h1>Social Bar</h1>
            </div>
            <div className='footer-socials'>
                <Image
                    className= 'fservice-icon'
                    src="/github.svg" // Path relative to the 'public' folder
                    alt="Olukayode"
                    width={47} // Specify width
                    height={47} // Specify height
                />
                <Image
                    className= 'fservice-icon'
                    src="/instagram.svg" // Path relative to the 'public' folder
                    alt="Olukayode"
                    width={47} // Specify width
                    height={47} // Specify height
                />
                <Image
                    className= 'fservice-icon'
                    src="/twitter.svg" // Path relative to the 'public' folder
                    alt="Olukayode"
                    width={47} // Specify width
                    height={47} // Specify height
                />
            </div>
       </div>
    </>
    )
};

export default Footer;
