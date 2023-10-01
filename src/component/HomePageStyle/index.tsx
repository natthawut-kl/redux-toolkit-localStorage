import React from "react";
import { Button } from "antd";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import router from "next/router";

const HomePage = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            minWidth: "100px",
            textAlign: "center",
            margin: "10px",
          }}
          onClick={() => {
            router.push({ pathname: `/home` });
          }}
        >
          {t("common:home_page")}
        </Button>
      </div>
    </>
  );
};

export default HomePage;

// export const getServerSideProps: GetServerSideProps = async ({
//     locale
//   }: any) => ({
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'common'
//       ]))
//     }
//   });
