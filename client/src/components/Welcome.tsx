import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";
import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

type Props = {
  placeholder: string;
  name: string;
  type: string;
  handleChange: (e: any, name: string) => void;
  value: string;
};
const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white";

const Input = ({ placeholder, name, type, value, handleChange }: Props) => (
  <input
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={(e) => handleChange(e, name)}
    step="0.0001"
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

function Welcome() {
  const { connectWallet } = useContext(TransactionContext);

  const conectWallet = () => {};

  const handleSubmit = () => {};

  const [address, setAddress] = useState("");

  return (
    <div className="flex w-fill justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between mf:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            krypt
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-grow justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={21} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light font-sm">Address</p>
                <p className="text-white font-semibold font-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              name="addressTo"
              type="text"
              placeholder="Address To"
              handleChange={() => {}}
              value={"teslim"}
            />
            <Input
              name="amount"
              type="number"
              placeholder="Amount (ETH)"
              handleChange={() => {}}
              value={"teslim"}
            />
            <Input
              name="keyword"
              type="text"
              placeholder="Keyword (Gif)"
              handleChange={() => {}}
              value={"teslim"}
            />
            <Input
              name="message"
              type="text"
              placeholder="Enter Message"
              handleChange={() => {}}
              value={"teslim"}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {true ? (
              <Loader />
            ) : (
              <button
                onClick={handleSubmit}
                type="button"
                className="text-white w-full border-[1px] p-2 border=[#3d4fc] rounded full cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
