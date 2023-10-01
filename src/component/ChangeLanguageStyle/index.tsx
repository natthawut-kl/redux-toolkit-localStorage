import React, { useState } from "react";

import router from "next/router";

import { useTranslation } from "next-i18next";

import { DownOutlined, GlobalOutlined, LoginOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Dropdown,
  Menu,
  MenuProps,
  Typography,
  message,
} from "antd";
import * as GlobalConstants from "../../globalConstant";

const ChangeLanguageStyle = () => {
  const { t, i18n } = useTranslation(["common"]);

  const handleMenuClick = (e: any) => {
    const newLang =
      i18n.language === GlobalConstants.enLang
        ? GlobalConstants.thLang
        : GlobalConstants.enLang;
    router
      .push(
        // is this correct?
        `${router.asPath}`,
        undefined,
        { locale: newLang }
      )
      .then(() => {
        router.reload();
        console.log("เปลี่ยนภาษา");
      });
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "English",
      key: "1",
    },
    {
      label: "Thai",
      key: "2",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Dropdown menu={menuProps}>
        <Button
          style={{
            minWidth: "120px",
            textAlign: "right",
            margin: "10px",
          }}
        >
          {i18n.language === GlobalConstants.enLang && (
            <>
              {"English"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </>
          )}
          {i18n.language === GlobalConstants.thLang && (
            <>
              {"Thai"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </>
          )}

          <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};

export default ChangeLanguageStyle;
