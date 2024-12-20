import { Player } from "@/types/schema";
import { sulpherBold, sulpherLight } from "../fonts";
import { useState } from "react";
import { PlayerDetails } from "./card-center";
import { ReasonSelect } from "../reason-select";

const PlayerCard = ({
  player,
  showTransferButtons = true,
  isBanker = false,
}: {
  player: Player;
  showTransferButtons?: boolean;
  isBanker?: boolean;
}) => {
  const [showTransfer, setShowTransfer] = useState(false);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const getButtonText = () => {
    switch (type) {
      case "SEND":
        return "Send";
      case "REQUEST":
        return "Request";
      case "ADD":
        return "Add";
      case "SUBTRACT":
        return "Subtract";
      default:
        return "";
    }
  };
  let color = player?.color;
  if (player?.color === undefined) {
    color = "#000";
  }
  return (
    <>
      <div
        className={`${sulpherLight.className} flex justify-between items-center w-full gap-x-2 pb-2 h-14`}
      >
        {showTransferButtons && (
          <>
            <button
              className={`p-3 bg-red-500 rounded-md w-1/2 text-sm`}
              onClick={() => {
                setShowTransfer(true);
                setType("SEND");
              }}
            >
              Send Cash
            </button>
            <button
              className={`p-3 bg-green-500 rounded-md w-1/2 text-sm`}
              onClick={() => {
                setShowTransfer(true);
                setType("REQUEST");
              }}
            >
              Request Cash
            </button>
          </>
        )}
      </div>
      <div className="snap-center w-screen border bg-white border-black aspect-[3/4] rounded select-none ">
        <div className={`border p-2 w-full h-full border-black `}>
          <div
            style={{ backgroundColor: color }}
            className={`h-16 w-full flex items-center ${
              isBanker ? "justify-evenly" : "justify-center"
            } ${sulpherBold.className} text-2xl`}
          >
            <div>
              {isBanker && (
                <button
                  className={`border rounded-md aspect-square  px-4 border-red-300`}
                  onClick={() => {
                    setShowTransfer(true);
                    setType("SUBTRACT");
                  }}
                >
                  -
                </button>
              )}
            </div>
            <div className={`text-black`}>{player?.name}</div>
            {isBanker && (
              <button
                className={`border rounded-md aspect-square  px-4 border-green-300`}
                onClick={() => {
                  setShowTransfer(true);
                  setType("ADD");
                }}
              >
                +
              </button>
            )}
          </div>

          {!showTransfer ? (
            <PlayerDetails player={player} />
          ) : (
            <>
              <input
                placeholder="Amount"
                className={`border p-4 bg-inherit rounded-lg text-2xl w-full border-neutral-400 ${sulpherBold.className} shadow-md text-black my-4`}
                value={amount}
                type="numeric"
                min={1}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                required
              />
              <ReasonSelect />
              <div
                className={`${sulpherBold.className} w-full flex items-center justify-between gap-x-2`}
              >
                <button
                  className={`border p-2 rounded-md border-black w-1/2 text-black`}
                  onClick={() => {
                    setShowTransfer(false);
                    setAmount("");
                    setType("");
                  }}
                >
                  Cancel
                </button>
                <button
                  className={`border p-2 rounded-md border-black text-white bg-black w-1/2`}
                  onClick={() => {}}
                >
                  {getButtonText()}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PlayerCard;