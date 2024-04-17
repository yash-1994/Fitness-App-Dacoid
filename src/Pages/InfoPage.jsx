import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";


const InfoPage = (props) => {
  const [percentage, setPercentage] = useState(0);
  const strokeWidth = 4;
  const sqSize = 64;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;

  const navigate = useNavigate();

  const nextPage = () => {
    if(percentage == 33)
    setPercentage(66);
    else navigate("/signin")
  }
  useState(()=> {
setTimeout(() => {
    
    setPercentage(33);
}, 500);
  },[])

  return (
    <div class="bg-white  h-full flex flex-col justify-between transition-all duration-500">
      <div class="h-6 flex justify-end">
        <Link to={"/signin"} class="text-blue-500 hover:underline mt-1 mr-2 text-base" >
          Skip
        </Link>
      </div>
      {percentage === 33 || percentage === 0 ? <Fragment1 nextPage={nextPage}/> : <Fragment2 />}
      <div class="h-20  flex items-start justify-end">
        <div className="relative w-[64px] h-[64px] cursor-pointer flex items-center justify-center" onClick={() => nextPage()}>
          <svg
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}
            className="absolute z-10"
          >
            <circle
              className="fill-none stroke-[#809AFF] transition-all duration-700 ease-out "
              cx={sqSize / 2}
              cy={sqSize / 2}
              r={radius}
              strokeLinecap="round"
              strokeWidth={`${strokeWidth}px`}
              transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
              }}
            ></circle>
          </svg>
          <div className="flex items-center justify-center  h-12 w-12 rounded-full bg-gradient-to-r from-[#DEE5FF] to-[#809AFF]">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

const Fragment1 = () => {
    return (
      <div class="flex flex-col flex-1  ">
        <div class="flex-[1.7] flex items-center justify-center  ">
            <img className="w-[282px]" src="https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X98NRcuTqs-LptbnMh8RugF2~giYfag76Pj4fDaCsYjiOxKMJAmU83mRTuBiDO--rZtkz8tgcqXe--QgR0XDTWiw3v3LSOmG1ty6G6aWVmj~1aqDWqMW0WQ0H9vT1ThnQYUm21xuvgiP31FNPy2JGIPek-rLc2gOU57w5pUncI0dkbC2XG~dHXLhmPJP2RGfxaPzPrXABntLnE6JVJtUKL5SNI3bToqm9hnpecsig~gIAJbwiF6otDKx1SRsB2giqMwv0Oz4N3dklR77Y2IKMrxtdBxRNY4nxASS8iW73pI4sp3CvgngfqAGrKgnSAc1fLXUjFDGSYNR~UwcgfB7Uw__" alt="not loaded" />
        </div>
        <div class="flex-1">
        
            <p className="text-xl font-semibold leading-tight text-left">Track Your Goal</p>
            <p className="text-base font-medium text-[#787878] leading-snug text-left mt-3">Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
        </div>
      </div>
    );
  };
  const Fragment2 = () => {
    return (
      <div class="flex flex-col flex-1 ">
        <div class="flex-[1.7] flex items-center justify-center ">
            <img src="https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr3KQ~d1yUj8ihEHiaH7fqq2Bx87CveYvGg5WfoTnraj4r5QDk9Rs2g7PQ0NkiePRuEs015f2Scvkp9djImftRb7vIN0Q436lUOUi2Vz0HMN2YLBsrUwlsxwHK4~i~GT7KGdOrwjVV045VwrAdEFTsIHU5OFwbyLFidv7viJwMQL~Dj1dO58aVn70O0qclkztMmmGqgp5sbPUTTBET0FqbqH2YDMASEQdPn-Eamptqvrv8K6eu-nsZ5Tr9lKIAKKP4MB5iSZncm46y5fepqMHCd~cdCg13TMWcF-QtyOF1YrT3NN~w4WQDoFpdPZYcVqBqLyN6pDrkUSf-~AcMV5VQ__" alt="not loaded" />
        </div>
        <div class="flex-1">
        
            <p className="text-xl font-semibold  leading-tight text-left">Get Burn</p>
            <p className="text-base font-medium text-[#787878] leading-snug text-left mt-3">Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
        </div>
      </div>
    );
  };

export default InfoPage;
