import React from "react";

const styles = {
  welcomeText: "text-2xl font-bold	leading-8 font-[Lato]",
  message: "text-sm leading-5 font-[Lato] font-bold text-[#637282]",
};

function WelcomeText() {
  return (
    <>
      <p className={styles.welcomeText}>Welcome</p>
      <p className={styles.message}>
        Connect your wallet via MetaMask to continue
      </p>
    </>
  );
}

export default WelcomeText;
