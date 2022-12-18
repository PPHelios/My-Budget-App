import { useRef } from "react";
import { MainBar } from "../MainBar/MainBar";
import { PanelsWindow } from "../PanelsWindow/PanelsWindow";
import { ChartsPanel } from "../ChartsPanel/ChartsPanel";
export const MainAppWindow = () => {
  const panelsRef = useRef(null);
  const newspaperSpinning = [
    { transform: " scale(0.7)" },
    { transform: " scale(1)" },
  ];

  const newspaperTiming = {
    duration: 2000,
    iterations: 1,
  };
  const scrollToNewPanel = () => {
    console.log("click");
    panelsRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    panelsRef.current?.lastElementChild?.animate(
      newspaperSpinning,
      newspaperTiming
    );
  };
  return (
    <>
      <MainBar scrollToNewPanel={scrollToNewPanel} />
      <ChartsPanel />
      <PanelsWindow ref={panelsRef} />
    </>
  );
};
