import Link from 'next/link';
import userAvatar from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='max-w-[80%] mx-auto flex justify-between mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-6 font-semibold text-gray-600'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            <div className='flex items-center justify-between gap-4'>
                <Image src={userAvatar} alt='user avatar' width={60} height={60} />
                <button className='btn bg-purple-500 text-white'>
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;