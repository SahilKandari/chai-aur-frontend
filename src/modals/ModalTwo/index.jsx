import React from "react";
import { Button, CheckBox } from "../../components";
import ModalTwoInputfield from "../../components/ModalTwoInputfield";
import ModalTwoModalheader from "../../components/ModalTwoModalheader";
import { default as ModalProvider } from "react-modal";

export default function ModalTwo({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[331px]">
      <div className="flex flex-col items-center justify-start w-full bg-black-900 rounded-[12px]">
        <ModalTwoModalheader className="flex flex-row justify-center w-full" />
        <div className="flex flex-col items-center justify-start w-[97%] gap-5">
          <div className="flex flex-col items-start justify-start w-[35%] gap-3">
            <CheckBox name="beatmode" label="Beat MODE" className="gap-[13px] text-left font-semibold" />
            <CheckBox name="illlyricsist" label="Ill Lyricsist" className="gap-[13px] text-left font-semibold" />
            <CheckBox name="hypebeast" label="HYPEBEAST" className="gap-[13px] text-left font-semibold" />
            <CheckBox
              color="gray_100"
              name="goodvibes"
              label="Good Vibes"
              className="gap-[13px] text-left font-semibold"
            />
            <CheckBox
              color="gray_100"
              name="rapcaviar"
              label="Rap Caviar"
              className="gap-[13px] text-left font-semibold"
            />
          </div>
          <ModalTwoInputfield labelOne="Name" className="flex flex-col items-start justify-start w-[85%] gap-[7px]" />
        </div>
        <div className="flex flex-row justify-center w-[74%] p-6">
          <Button
            size="3xl"
            className="w-full mt-2 font-semibold border-deep_purple-A100 border border-solid rounded-lg"
          >
            Create new Playlist
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
