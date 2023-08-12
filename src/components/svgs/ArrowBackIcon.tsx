import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowBackIcon = ({
  color = "#000000",
  width = 15,
  height = 15,
}: ArrowProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 14" fill={color}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6.56295C15 6.81156 14.9012 7.04999 14.7254 7.22579C14.5496 7.40159 14.3112 7.50035 14.0626 7.50035L3.20194 7.50035L7.22712 11.5236C7.31427 11.6108 7.38341 11.7143 7.43058 11.8281C7.47774 11.942 7.50202 12.0641 7.50202 12.1873C7.50202 12.3106 7.47774 12.4326 7.43058 12.5465C7.38341 12.6604 7.31427 12.7638 7.22712 12.851C7.13996 12.9382 7.03649 13.0073 6.92262 13.0545C6.80875 13.1016 6.6867 13.1259 6.56344 13.1259C6.44019 13.1259 6.31814 13.1016 6.20426 13.0545C6.09039 13.0073 5.98692 12.9382 5.89977 12.851L0.275394 7.22663C0.188099 7.13955 0.118839 7.03611 0.0715815 6.92222C0.0243251 6.80834 -2.92265e-07 6.68625 -2.86876e-07 6.56295C-2.81486e-07 6.43965 0.0243251 6.31756 0.0715816 6.20368C0.118839 6.08979 0.188099 5.98635 0.275394 5.89927L5.89977 0.274903C5.98692 0.187748 6.09039 0.118613 6.20426 0.0714448C6.31814 0.0242768 6.44019 -3.74161e-07 6.56344 -3.68774e-07C6.6867 -3.63386e-07 6.80875 0.0242768 6.92262 0.0714448C7.0365 0.118613 7.13996 0.187748 7.22712 0.274903C7.40314 0.450921 7.50202 0.689653 7.50202 0.938579C7.50202 1.06184 7.47775 1.18388 7.43058 1.29776C7.38341 1.41163 7.31427 1.5151 7.22712 1.60226L3.20194 5.62556L14.0626 5.62556C14.3112 5.62556 14.5496 5.72432 14.7254 5.90011C14.9012 6.07591 15 6.31434 15 6.56295Z"
        fill={color}
      />
    </Svg>
  );
};

type ArrowProps = {
  color?: string;
  width?: number;
  height?: number;
};

export default ArrowBackIcon;