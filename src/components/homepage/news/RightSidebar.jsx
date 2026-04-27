import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import swimmingImg from '@/assets/swimming.png';
import classImg from '@/assets/class.png';
import playgroundImg from '@/assets/playground.png';
import Image from 'next/image';

const RightSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg mb-6'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500'><FaGoogle /> Login with Google</button>
                <button className='btn'><FaGithub /> Login with Github</button>
            </div>
            <div className=''>
                <h2 className='font-semibold text-md mt-6 mb-4'>Find Us On</h2>
                <div className='flex flex-col'>
                    <button className='btn bg-white border border-gray-300'><FaFacebook /> Facebook</button>
                    <button className='btn bg-white border border-gray-300'><FaTwitter /> Twitter</button>
                    <button className='btn bg-white border border-gray-300'><FaInstagram /> Instagram</button>
                </div>
            </div>
            <div className='bg-gray-200 px-4 py-4 my-4 rounded-[5px]'>
                <h3 className='text-lg font-semibold'>Q-Zone</h3>
                <Image src={swimmingImg} alt='swimming children' width={200} height={200} />
                <Image src={classImg} alt='swimming children' width={200} height={200} />
                <Image src={playgroundImg} alt='swimming children' width={200} height={200} />
            </div>
        </div>
    );
};

export default RightSidebar;