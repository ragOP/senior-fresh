import React, { useState, useEffect } from "react";
import {
  mainTitleText,
  programDescriptionText,
  ageQuestionText,
  qualificationConfirmationText,
  callButtonText,
  termsAndConditionsText,
  copyrightText,
  desc,
} from "../constant";
import { scrollTo } from "../utils/animate";
import logo from "../assests/logo.png";
import loader from "../assests/loader.gif";

export default function Home() {
  useEffect(() => {
    window.document.title = mainTitleText;
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [quiz, setQuiz] = useState(ageQuestionText);
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState(0);
  const [yes, setYes] = useState("YES, I'M 65 OR OLDER");
  const [no, setNo] = useState("NO, I'M 64 OR YOUNGER");
  const [endloader, setendloader] = useState(true);

  const stepProcess = () => {
    if (step === "Reviewing Your Answers...") {
      setTimeout(() => {
        setStep("Matching With Best Options...");
      }, 1500);
    }
    if (step === "Matching With Best Options...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
      setTimeout(() => {
        setStep("completed");
        setTimeout(() => {
          setendloader(false);
        }, 4000);
      }, 1500);
    }

    if (step === "completed") {
      const startTime = new Date();
      const timer = setInterval(() => {
        const nowTime = new Date();
        setSecond((180 - Math.round((nowTime - startTime) / 1000)) % 60);
        setMin(
          Math.floor((180 - Math.round((nowTime - startTime) / 1000)) / 60)
        );
      }, 1000);
    }
  };

  useEffect(() => {
    stepProcess();
  }, [step]);

  const topScroll = (id) => {
    scrollTo({ id });
  };

  const handleQuizP = () => {
    topScroll("btn");
    if (quiz === ageQuestionText) {
      setYes("Yes");
      setNo("No");
      setQuiz("2. Do you live in the United States?");
    } else {
      setStep("Reviewing Your Answers...");

      topScroll("top");
    }
  };

  const handleQuizN = () => {
    topScroll("btn");
    if (quiz === "Are you over the age of 60?  ") {
      setYes("Yes");
      setNo("No");
      setQuiz("2. Do you live in the United States?");
    } else {
      setStep("Reviewing Your Answers...");

      topScroll("top");
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #ffebff, #f0ebff, #e0ccff, #f9ebff)",
      }}
    >
      {isLoading ? (
        <>
          <div className="sticky-container glassmorphism md:px-6 lg:px-16 z-50 text-lg font-semibold">
            {mainTitleText}
          </div>

          <div className="shimmer-placeholder">
            <div className="shimmer-text shimmer-title"></div>
            <div className="shimmer-logo"></div>
            <div className="shimmer-text shimmer-description"></div>
            <div className="shimmer-text shimmer-description"></div>
            <div className="shimmer-buttons"></div>
            <div className="shimmer-buttons"></div>
          </div>
        </>
      ) : (
        <div>
          <div className="sticky-container glassmorphism md:px-6 lg:px-16 z-50 text-lg font-semibold">
            {mainTitleText}
          </div>

          {step === "process" ? (
            <>
              <div className="max-w-48rem mx-auto px-5">
                <div className="text-center">
                  <div className="font-roboto font-semibold text-2xl py-2 text-blue-900 mt-[-14px]">
                    {programDescriptionText}
                  </div>
                  <div className="mb-4 text-sm text-justify">{desc}</div>
                  <img className="w-full mb-4" src={logo} alt="head" />
                  <div className="text-sm text-justify">
                    If you have not yet claimed your monthly allowance then
                    answer the questions below and once approved{" "}
                    <b>
                      you will have your $3,300 Food Allowance mailed to you
                      within a few days ready for use!
                    </b>
                  </div>
                </div>
                <div className="survey mt-2">
                  <div
                    id="btn"
                    className="text-center text-2xl font-semibold my-2"
                  >
                    {quiz}
                  </div>
                  <div className="flex flex-col items-center justify-center mt-3 space-y-5">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-5 min-w-full rounded-lg dshadow-md transition duration-300 ease-in-out text-2xl shimmer-animation"
                      onClick={handleQuizP}
                    >
                      <i className="fa-solid fa-circle-check"></i>
                      {"  "}
                      {yes}
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-5 min-w-full rounded-lg shadow-md transition duration-300 ease-in-out text-2xl shimmer-animation"
                      onClick={handleQuizN}
                    >
                      <i className="fa-solid fa-circle-xmark"></i>
                      {"  "}
                      {no}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : step !== "process" && step !== "completed" ? (
            <div className="checking text-center font-bold border-t border-blue-900 h-16 bg-blue-300 mt-4 mx-10 p-5 text-gray-50 shimmer-animation2">
              {step}
            </div>
          ) : (
            <>
              {!endloader ? (
                <div className="flex flex-col items-center px-5 border-t border-blue-700 mt-4 mx-4 p-10 glassmorphism">
                  <div className="text-center text-2xl font-bold mb-4 text-gray-800 shimmer-animation">
                    {qualificationConfirmationText}
                  </div>
                  <div className="text-center mb-4 text-blue-600 shimmer-animation">
                    Make A <b>Quick Call</b> To Claim Your Food Allowance!
                  </div>
                  <div className="text-center mb-4 text-green-500 shimmer-animation">
                    Spots remaining: 4
                  </div>
                  <div className="text-center mb-4 shimmer-animation">
                    👇 TAP BELOW TO CALL 👇
                  </div>
                  <div className="flex justify-center mb-4 w-full">
                    <a href="tel:+18446720874">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-16 min-w-full rounded-lg shadow-md transition duration-300 ease-in-out text-xl shimmer-animation glow">
                        {callButtonText}
                      </button>
                    </a>
                  </div>
                  <div className="text-center font-bold mb-4 text-purple-600 shimmer-animation">
                    We Have Reserved Your Spot
                  </div>
                  <div className="text-center mb-4 shimmer-animation">
                    Due to high call volume, your official agent is waiting for
                    only <b className="text-red-600">3 minutes</b>, then your
                    spot will not be reserved.
                  </div>
                  <div className="flex justify-center itmes-center mb-4 p-4 text-gray-50 border-dotted border-2 border-red-500 w-28">
                    <div className="font-bold mr-1 shimmer-animation text-xl text-red-600">
                      {min}
                    </div>
                    <div className="text-red-600">:</div>
                    <div className="font-boldml-1 shimmer-animation text-xl text-red-600">
                      {second}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center h-full justify-center">
                  <img src={loader} width={100} alt="loader" />
                </div>
              )}
            </>
          )}
          <div className="mt-96 pt-48 pb-11 px-10">
            <div className="text-center text-blue-500 mb-2">
              {termsAndConditionsText}
            </div>
            <div className="text-center font-bold">{copyrightText}</div>
          </div>
        </div>
      )}
    </div>
  );
}
