import React from "react";

import { Card } from "antd";

interface IBoxCardStyleProp {
  children?: React.ReactNode;
}

const BoxCardStyle = (props: IBoxCardStyleProp) => {
  const { children } = props;
  return (
    <>
      <div
        style={{
          paddingBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            background: "unset",
            width: "1000px",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            border: "1px solid",
          }}
        >
          {children}
        </Card>
      </div>
    </>
  );
};

export default BoxCardStyle;
