import React from "react";

import {
  Col,
  Row,
  Typography,
} from "antd";
import ChangeLanguageStyle from "../ChangeLanguageStyle";

interface ICardTitleStyleProp {
  /** ชื่อหัวข้อ */
  titleName: string;
  /** HTML ที่จะอยู่ในด้านขวาสุด */
  changeLanguage?: React.ReactNode;
}

const TitleStyle = (props: ICardTitleStyleProp) => {
  const { titleName, changeLanguage = null } = props;

  return (
    <>
      <Row>
        <Col span={8}>
          <Typography style={{ fontSize: "30px" }}>{titleName}</Typography>
        </Col>
        {changeLanguage ? (
          <>
            <Col
              span={8}
              offset={8}
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              <ChangeLanguageStyle />
            </Col>
          </>
        ) : null}
      </Row>
    </>
  );
};

export default TitleStyle;
