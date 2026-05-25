import star from "../assets/star.svg"

function FifthSection() {
  return (
    <section className="w-full h-[737px] bg-white flex flex-col items-center">
      <div className="mt-[163px]">
        <h1 className="text-[40px] font-[600] leading-[56px] text-[#262626] text-center">
          What Our Customers<br />Have To Say
        </h1>

        <p className="mt-[16px] text-[16px] font-[400] text-[#727272] text-center">
          Here's what our customers say with Bucheen
        </p>
      </div>

      <div className="mt-[48px] flex gap-[32px]">
        <div className="w-[378px] h-[278px] border border-[#D9D9D9] rounded-[16px] pt-[32px] pr-[24px] pl-[24px] pb-[24px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[32px] h-[32px] rounded-full bg-[#A6A6A6]"></div>

            <div>
              <h3 className="text-[14px] font-[500] text-[#232323]">
                Tasha Wijayanti
              </h3>
              <p className="text-[12px] font-[400] text-[#777777]">
                Curug
              </p>
            </div>
          </div>

          <p className="mt-[16px] text-[16px] font-[400] leading-[24px] text-[#727272]">
            This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here
          </p>

          <div className="mt-[24px] flex gap-[2px]">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>

        <div className="w-[378px] h-[278px] rounded-[16px] px-[24px] pt-[32px] pr-[24px] pl-[24px] pb-[24px] shadow-[10px_24px_54px_rgba(0,0,0,0.06)] bg-white">
          <div className="flex items-center gap-[16px]">
            <div className="w-[32px] h-[32px] rounded-full bg-[#A6A6A6]"></div>

            <div>
              <h3 className="text-[14px] font-[500] text-[#232323]">
                Sizuka engkol
              </h3>
              <p className="text-[12px] font-[400] text-[#777777]">
                Indonesia
              </p>
            </div>
          </div>

          <p className="mt-[16px] text-[16px] font-[400] leading-[24px] text-[#727272]">
            Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.
          </p>

          <div className="mt-[24px] flex gap-[2px]">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>

        <div className="w-[378px] h-[278px] border border-[#D9D9D9] rounded-[16px] pt-[32px] pr-[24px] pl-[24px] pb-[24px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[32px] h-[32px] rounded-full bg-[#A6A6A6]"></div>

            <div>
              <h3 className="text-[14px] font-[500] text-[#232323]">
                Gundam gandim
              </h3>
              <p className="text-[12px] font-[400] text-[#AAAAAA]">
                Bulgarian
              </p>
            </div>
          </div>

          <p className="mt-[16px] text-[16px] font-[400] leading-[24px] text-[#727272]">
            It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax
          </p>

          <div className="mt-[24px] flex gap-[2px]">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FifthSection