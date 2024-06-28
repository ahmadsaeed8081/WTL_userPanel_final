import React, { useState } from "react";
import { RightArrowIcon } from "../../assets/Icons";

const Faqs = () => {
  const questionAnswersList = [
    {
      question: "What is the primary use of the WTL Token?",
      answer:
        "The WTL Token is primarily used in the World Trading Leagues, where participants can pay league participation fees at discounted rates. Additionally, tokens can be used to purchase official merchandise and collect rewards within the league.",
    },
    {
      question: "How does the burning mechanism work for WTL Tokens?",
      answer:
        "The WTL Token employs a monthly burning mechanism where 1% of the circulating supply is burned in the first two years, and 0.5% per day in the third and fourth years. This process helps reduce supply and potentially increase the token's value.",
    },
    {
      question: "Can I earn rewards by burning my own WTL Tokens?",
      answer:
        "Yes, token holders have the option to burn their tokens to earn rewards. For example, if you burn 10,000 WTL tokens, you will receive upto 12,500 tokens as a reward over the next year.",
    },
    {
      question: "What is the liquidity pool for WTL Tokens?",
      answer:
        "WTL maintains a liquidity pool on its website until the token is listed on exchanges. This pool ensures liquidity and price stability.",
    },
    {
      question: "What governance rights do WTL Token holders have?",
      answer:
        "Token holders have the right to give their opinion on important platform decisions such as league fees, prize money, rules, and software updates.",
    },
    {
      question: "What is the airdrop mechanism for WTL Tokens?",
      answer:
        "WTL Tokens include an airdrop mechanism to distribute tokens among the community, encouraging engagement and broadening token distribution.",
    },
    {
      question: "What is the staking mechanism for WTL Tokens?",
      answer:
        "WTL Tokens can be staked to earn rewards. There are flexible and fixed staking options available, with interest rates varying based on the staking duration and conditions.",
    },
    {
      question: "What is the vesting period for WTL Tokens?",
      answer:
        "Different stakeholders such as founders, private investors, and advisors have specific vesting periods ranging from 18 months to 4 years to ensure long-term commitment and reduce market volatility.",
    },
    {
      question: "How can I participate in the whitelisting mechanism?",
      answer:
        "The WTL Token offers a whitelisting mechanism that allows users to register for early access to new features or special token sales.",
    },
    {
      question:
        "Are there any fees involved when buying or selling WTL Tokens?",
      answer:
        "There is no fee charged for buying tokens. The structure for selling fees is designed to encourage holding and long-term participation within the ecosystem.",
    },
  ];
  const QuestionAnswer = ({ item, index }) => {
    const [open, setOpen] = useState(false);
    return (
      <div
        key={index}
        className="flex flex-col p-3 border border-white rounded-xl gap-3 h-max"
      >
        <button
          className="flex items-center w-full justify-between gap-3 cursor-pointer"
          onClick={(e) => setOpen(!open)}
        >
          <h1 className="text-white text-sm">
            <span className="text-themeColor">{index + 1}</span> {item.question}
          </h1>
          <div className="flex items-center justify-center">
            <RightArrowIcon />
          </div>
        </button>
        <p
          className={`font-pop text-xs font-extralight  ${
            open ? "flex" : "hidden"
          }`}
        >
          {item.answer}
        </p>
      </div>
    );
  };
  return (
    <div id="faq" className="faqs-section flex py-16">
      <div className="wrap wrapWidth flex flex-col items-center gap-14">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white md:text-2xl text-xl md:text-start text-center">
            FAQ
            {/* WHAT IS World <span className="text-themeColor">Trading</span>{" "}
            Leagues */}
          </h1>
        </div>
        <div className="w-full grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          {questionAnswersList.map((item, index) => (
            <QuestionAnswer item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
