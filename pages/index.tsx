import Head from "next/head";
// @ts-ignore
import SmokeElement from "smoke-effect-react";

const home = () => {
  return (
    <>
      <Head>
        <title>fourtwenty.code</title>
      </Head>
        <SmokeElement
            src="/logo.png"
            opacity="1"
            smokeSrc="/Smoke-Element.png"
            smokeOpacity="0.3"
        />
    </>
  );
};

export default home;
