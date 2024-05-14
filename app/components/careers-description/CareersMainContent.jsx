import React from "react";

const CareersMainContent = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative lg:mb-[80px] lg:mt-0 xl:mb-[150px] xl:mt-0">
          <h1 className="page-heading text-[40px] sm:text-[80px] lg:text-[90px] xl:text-[110px]">
            Careers
          </h1>
          <div className="absolute rotate-[10deg] lg:right-[-98px] lg:top-[64px] xl:right-[-30%] xl:top-[60%]">
            <img
              className="h-[66.47px] w-[66.47px] sm:h-[128.4px] sm:w-[128.4px] lg:h-[140.4px] lg:w-[140.4px] xl:h-[168.4px] xl:w-[168.4px]"
              src="/assets/images/careers_page/careers-img.svg"
              alt="careers image"
            />
          </div>
        </div>
      </div>
      <div className="mx-[100px]">
        <div className="flex items-center">
          <h4 className="content-neue-medium sm:mr-[18px] sm:text-[24px] lg:text-[28px] xl:text-[33px]">
            Graphic Designer
          </h4>
          <div className="mr-[15px] rounded-[24px] border border-black text-center lg:h-[28px] lg:w-[96px] xl:h-[34px] xl:w-[95px] xl:text-[19px]">
            Full-time
          </div>
          <div className=" rounded-[24px] border border-black text-center lg:h-[28px] lg:w-[96px] xl:h-[34px] xl:w-[95px] xl:text-[19px]">
            In-office
          </div>
        </div>
        <br />
        <div className="mb-4">
          <p className="content-neue lg:text-[18px] xl:text-[24px]">
            We are seeking a talented and creative Graphic Designer to join our
            team. The ideal candidate will have a strong portfolio of design
            work that demonstrates expertise in various graphic design tools and
            software. As a Graphic Designer at GIVA, you will be responsible for
            creating visual concepts that communicate ideas that inspire,
            inform, or captivate our clients and customers.
          </p>
          <br />
          <p className="content-neue-medium lg:text-[22px] xl:text-[28px]">
            Responsibilities
          </p>
          <br />
          <div>
            <ul className="content-neue ml-10 list-disc lg:text-[18px] xl:text-[24px]">
              <li>
                Develop and conceptualize a comprehensive array of designs and
                layouts for various media including websites, social media,
                print, and branding.
              </li>
              <li>
                Collaborate with cross-functional teams to produce visually
                appealing and cohesive graphics.
              </li>
              <li>
                Manage design projects from concept through to completion while
                adhering to brand guidelines.
              </li>
              <li>
                Stay up-to-date with industry developments and tools, and be
                willing to share knowledge and insights with the team.
              </li>
            </ul>
          </div>
          <br />
          <p className="content-neue-medium lg:text-[22px] xl:text-[28px]">
            Qualifications
          </p>
          <br />
          <div>
            <ul className="content-neue ml-10 list-disc lg:text-[18px] xl:text-[24px]">
              <li>
                Proven graphic designing experience with a strong portfolio.
              </li>
              <li>
                Proficiency in graphic design software such as Adobe Creative
                Suite.
              </li>
              <li>
                Excellent visual design skills with sensitivity to user-system
                interaction.
              </li>
              <li>Ability to solve problems creatively and effectively.</li>
              <li>
                Up-to-date with the latest graphic design trends, techniques,
                and technologies
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[50px] flex justify-center">
          <div className="content-neue-medium h-[42px] w-[280px] rounded-[24px] bg-black text-center text-[20px] text-white sm:pt-[5px]">
            Apply Now
          </div>
        </div>
        <div className="content-neue mb-[50px] mt-[50px] text-center lg:text-[20px] xl:text-[28px]">
          <p>
            Can’t find any suitable vacancy? Drop us a line{" "}
            <a className="text-blue-700" href="#">
              hr@thekreatr.com
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersMainContent;
