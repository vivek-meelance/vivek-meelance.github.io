import React, { forwardRef } from "react";
import Image from "next/image";

const Community = forwardRef((_, ref) => {
  return (
    <div className="container mt-[30px] 2sm:mt-[80px]" ref={ref}>
      <div className="flex justify-between flex-col-reverse md:flex-row gap-[10px]">
        <div className="basis-[30%] 2xl:basis-[20%] rounded-lg overflow-hidden">
          <video autoPlay muted loop className="w-full">
            <source
              src="/videos/community_op.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <div className="basis-[10%]"></div> */}
        <div className="basis-[70%]">
          <h2 className="text-[35px] 2sm:text-[45px] xl:text-[96px] font-normal leading-[55px] 2sm:leading-[70px] xl:leading-[110px] tracking-normal text-left">
            Built <sub className="byGragient text-[59px]">by</sub> <br />{" "}
            Community, <sub className="byGragient text-[59px]">fostering</sub>{" "}
            <br /> Connections
          </h2>
          <h3 className="text-[30px] 2sm:text-[35px] xl:text-5xl font-semibold leading-[40px] lg:leading-[58px] tracking-[-0.04em] text-left">
            Your aspirations are within your reach
          </h3>
          <p className="text-lg font-medium leading-[27px] tracking-normal text-left">
            Establishing connections is important. The entertainment industry
            works on it. Achieving access requires friends and supporters.
            Meelance gives you a friendly, positive, and teamwork-focused
            community of creative and professional individuals to help you
            connect with your community.
          </p>
        </div>
      </div>
      <div className="text-[35px] 2sm:text-[40px] lg:text-[50px] font-semibold leading-[50px] 2sm:leading-[61px] tracking-[-0.04em] text-left mt-[25px]">
        <span className="byGragient">access to millions +</span> Creative
        Professionals and Leaders
      </div>
      <p className="text-lg font-medium leading-[27px] tracking-normal text-left mt-0 2sm:mt-[25px]">
        With Meelance, you can reach executives all around the world directly.
        It&apos;s like a marketplace that helps individuals (artists, content
        creators or any entertainment professionals) connect with decision
        makers easily, and we believe in being transparent.
      </p>
      <div className="truncate rounded-2xl mt-[30px] 2sm:mt-[50px]">
        <video autoPlay muted loop width="100%" height="364px">
          <source src="/videos/spotLight.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-[40px] 2sm:text-[50px] lg:text-[72px] font-normal leading-[61px] tracking-[-0.04em] text-left mt-[35px]">
        Find Yours{" "}
        <span className="byGragient text-[50px] lg:!text-[72px] !font-normal">
          Spotlight
        </span>
      </div>
      <p className="text-lg font-medium leading-[27px] tracking-normal text-left mt-[0px] 2sm:mt-[25px]">
        Design your profile with photos and videos to showcase your talent and
        catch the eye of casting/hirng professionals
      </p>
      <button className="flex items-center shadow-[0px_3px_40px_0px_#00000040] gap-[10px] pl-6 pr-[24px] py-[10px] rounded-2xl bg-[#fff] mt-[20px] font-bold">
        <span>Create your digital portfolio</span>
        <Image
          src="/images/guidance_up-arrow.svg"
          alt="Gallery_Animation"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
});

export default Community;
