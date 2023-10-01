import React from "react";

import { Card } from "antd";

interface IBoxCardTableStyleProp {
  children?: React.ReactNode;
}

const BoxCardTableStyle = (props: IBoxCardTableStyleProp) => {
  const { children } = props;
  return (
    <>
      <div
        // style={{
        //   paddingBottom: "30px",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <Card
          style={{
            background: "unset",
            width: "auto",
            minHeight: "200px",
            display: "initial",
            justifyContent: "center",
            // alignItems: "center",
            border: "0",
          }}
        >
          {children}
        </Card>
      </div>
    </>
  );
};

export default BoxCardTableStyle;
