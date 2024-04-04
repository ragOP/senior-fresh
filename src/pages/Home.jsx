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
    <div style={{ background: "linear-gradient(to bottom, #F0F4FD, #D9E4FF)" }}>
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
              <div class="max-w-48rem mx-auto px-5">
                <div class="text-center">
                  <div class="font-roboto font-semibold text-2xl py-4 text-blue-900 mt-[-14px]">
                    {programDescriptionText}
                  </div>
                  <div class="mb-4 text-base text-justify">{desc}</div>
                  <img class="w-full mb-4" src={logo} alt="head" />
                  <div class="text-base text-justify">
                    If you have not yet claimed your monthly allowance then
                    answer the questions below and once approved{" "}
                    <b>
                      you will have your $3,300 Food Allowance mailed to you
                      within a few days ready for use!
                    </b>
                  </div>
                </div>
                <div class="survey mt-4">
                  <div id="btn" class="text-center text-2xl font-semibold my-5">
                    {quiz}
                  </div>
                  <div class="flex flex-col items-center justify-center mt-3 space-y-5">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 min-w-full rounded-lg dshadow-md transition duration-300 ease-in-out text-xl shimmer-animation"
                      onClick={handleQuizP}
                    >
                      {yes}
                    </button>
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 min-w-full rounded-lg shadow-md transition duration-300 ease-in-out text-xl shimmer-animation"
                      onClick={handleQuizN}
                    >
                      {no}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : step !== "process" && step !== "completed" ? (
            <div class="checking text-center font-bold border-t border-blue-900 h-16 bg-blue-300 mt-4 mx-10 p-5 text-gray-50 shimmer-animation2">
              {step}
            </div>
          ) : (
            <div class="flex flex-col px-5 border-t border-blue-900 bg-blue-200 mt-4 mx-2 p-5">
              <div class="text-center text-2xl font-bold mb-4 text-gray-800 shimmer-animation">
                {qualificationConfirmationText}
              </div>
              <div class="text-center mb-4 text-blue-600 shimmer-animation">
                Make A <b>Quick Call</b> To Claim Your Food Allowance!
              </div>
              <div class="text-center mb-4 text-green-500 shimmer-animation">
                Spots remaining: 4
              </div>
              <div class="text-center mb-4 shimmer-animation">
                👇 TAP BELOW TO CALL 👇
              </div>
              <div class="flex justify-center mb-4 w-full">
                <a href="tel:+18446720874">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-16 min-w-full rounded-lg shadow-md transition duration-300 ease-in-out text-xl shimmer-animation glow">
                    {callButtonText}
                  </button>
                </a>
              </div>
              <div class="text-center font-bold mb-4 text-purple-600 shimmer-animation">
                We Have Reserved Your Spot
              </div>
              <div class="text-center mb-4 shimmer-animation">
                Due to high call volume, your official agent is waiting for only{" "}
                <b class="text-red-600">3 minutes</b>, then your spot will not
                be reserved.
              </div>
              <div class="flex justify-center mb-4 bg-red-600 p-4 text-gray-50">
                <div class="font-bold text-gray-50 mr-1 shimmer-animation text-xl">
                  {min}
                </div>
                <div>:</div>
                <div class="font-bold text-gray-50 ml-1 shimmer-animation text-xl">
                  {second}
                </div>
              </div>
            </div>
          )}
          <div class="mt-96 pt-48 pb-11 px-10">
            <div class="text-center text-blue-500 mb-2">
              {termsAndConditionsText}
            </div>
            <div class="text-center font-bold">{copyrightText}</div>
          </div>
        </div>
      )}
    </div>
  );
}
