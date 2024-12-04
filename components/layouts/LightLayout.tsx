import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const LightLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{ backgroundColor: "lightcoral" }}>
      <h3>Light-Layout</h3>

      <div>{children}</div>
    </div>
  );
};

export default LightLayout;
