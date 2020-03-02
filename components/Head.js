import Head from "next/head";

const HeadComponent = ({ title = "", children }) => {
  return (
    <Head>
      <title>{title} | Next Boilerplate</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
      ></link>
      {children}
    </Head>
  );
};

export default HeadComponent;
