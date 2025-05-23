// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

function Certificates() {
  // Static certificate data
  const certificates = [
    {
      title: 'Data Analysis with Tableau',
      issuer: 'Tableau Learning Partner',
      date: '2024',
      image: '/Images/certificate1.png',
      url: '#'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI and Stanford University',
      date: '2024',
      image: '/Images/certificate2.png',
      url: '#'
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      date: '2024',
      image: '/Images/certificate3.png',
      url: '#'
    }
  ];

  return (
    <div id='certificates' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          certificates.map((cert, i) => (
            <div key={i} className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
              <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={500}
                  height={300}
                  className='h-full w-full group-hover:scale-110 transition-all duration-300'
                />
              </div>
              <div className="p-2 sm:p-3 flex flex-col">
                <span className="text-[#16f2b3] text-sm mb-1">{cert.issuer}</span>
                <a target='_blank' href={cert.url} rel="noopener noreferrer">
                  <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                    {cert.title}
                  </p>
                </a>
                <p className='mb-2 text-sm text-[#16f2b3]'>
                  {cert.date}
                </p>
              </div>
            </div>
          ))
        }
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/certificates"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Certificates;