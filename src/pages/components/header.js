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
                        src="/images/memage.png" // Path relative to the 'public' folder
                        alt="Olukayode"
                        width={400} // Specify width
                        height={400} // Specify height
                    />
                </div>
                
            </div>
        </div>
    </>
    )
};
export default Header;
