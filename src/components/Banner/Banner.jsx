import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero md:rounded-3xl rounded-lg md:mt-[50px] mt-6 lg:mb-[100px] md:mb-16  mb-5"
            style={{
                backgroundImage: "url(https://s3-alpha-sig.figma.com/img/2b8f/f4be/d57b5fb5ad84c9f6a9b1eb9782e9b11b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NsfDdx56cwqnTctuzYJyw64SkfzHT~~TsFjQvzxW2Z6nbVQ7Rc8-4RYSGK~SZfuKXdBsURFznIfkCtV5mltFixYSk1yP6mch~aMxu09-20YCpfRVYJkRehij-0bdoj8-VTVkIMauyaic0Wia~BNFsWjuUwMCcXoaQ54xlYxE8WrmR48Cp30yTgePQqfKU4U7JUQlFpwVpxVMS8EV5natTZ0upkVJvSbLAPxRW3mUT-iMuWwWqNOYzXUm0nu8Jzyv90-4mb6A8RJZGb8X7EiGJTFdjLengGYvY3jKIPqs4a10rxsu3mUvXMOw-V-BeaixboBTF358vCfzbMzuIdWczQ__)",
            }}>
            

            <div className='bg-gradient-to-t from-[#150B2BE5] to-transparent min-w-full md:rounded-3xl rounded-lg'>
                <div className="md:mt-[129px] mt-7 md:mb-[125px] mb-7">
                    <div>
                        <h1 className="max-w-[897px] sm:mx-auto mx-3 text-center md:mb-6 mb-4 md:text-[52px] text-2xl  font-bold text-white md:leading-[76px]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="max-w-[933px] sm:mx-auto mx-2 md:text-lg text-xs md:leading-[30px] font-normal text-white text-center">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                    </div>
                    <div className='flex justify-center gap-6 md:mt-10 mt-7'>
                        <button className="bg-[#0BE58A] text-[#150B2B] md:text-xl font-semibold md:py-5 py-2 md:px-[30px] px-4 rounded-full hover:bg-transparent hover:border hover:border-white hover:text-white"> Explore Now</button>

                        <button className="border border-white text-white md:text-xl font-semibold md:py-5 py-2 md:px-[30px] px-3 rounded-full hover:border-hidden hover:bg-[#0BE58A] hover:text-[#150B2B]">Our Feedback</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;