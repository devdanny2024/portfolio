import Image from 'next/image';

function Header() {
    return(
    <>
        <div className='headers'>
            <div className='header-cont'>
                <div className='header-title'>
                    <h1>Hello,</h1>
                    <h2>I’m A Full-Stack Block Chain Developer</h2>
                    <p>I am Olukayode Soliu, a full stack developer, great at a lot of other things too.</p>
                    <div className='header-btn'>Send me a Mail</div>
                </div>
                <div className='header-img'>
                    <Image
                        src="/memage.png" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={400} // Specify width
                        height={400} // Specify height
                    />
                </div>
                <div className='header-img2'>
                    <Image
                        src="/memages.png" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={600} // Specify width
                        height={800} // Specify height
                    />
                </div>
                <div className='header-img3'>
                    <Image
                        src="/images/memages.png" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={250} // Specify width
                        height={320} // Specify height
                    />
                </div>
            </div>
        </div>
    </>
    )
};
export default Header;
