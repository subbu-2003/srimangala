import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
           <Image
    src="/images/logo/srimanlogo.png"
    alt="logo"
    width={50}      // keep real dimensions
    height={80}
    quality={100}
    className="dark:hidden w-24 h-auto"   // 👈 reduce size here
/>

            <Image
                src="/images/logo/srimanlogo.png"
                alt="logo"
                width={50}      // keep real dimensions
                height={80}
                quality={100}
                className='dark:block hidden w-24 h-auto'
            />
        </Link>
    );
};

export default Logo;
