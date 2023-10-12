import { FC } from 'react';

interface IColorThemeProps {
  circleColor: string;
  rect1Color: string;
  rect2Color: string;
}

const ColorTheme: FC<IColorThemeProps> = ({
  circleColor,
  rect1Color,
  rect2Color,
}) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group_45">
        <circle id="Ellipse_3" cx="19" cy="19" r="19" fill={circleColor} />
        <g id="Mask_group">
          <mask
            id="mask0_6_31"
            maskUnits="userSpaceOnUse"
            x="1"
            y="1"
            width="36"
            height="36"
          >
            <circle id="Ellipse_1" cx="19" cy="19" r="18" fill={circleColor} />
          </mask>
          <g mask="url(#mask0_6_31)">
            <rect
              id="Rectangle_2"
              x="15.3602"
              y="-8.79688"
              width="19.009"
              height="41.3708"
              transform="rotate(34.2644 15.3602 -8.79688)"
              fill={rect1Color}
            />
            <rect
              id="Rectangle_3"
              x="30.1575"
              y="3.198"
              width="18.1329"
              height="41.3708"
              transform="rotate(35.0396 30.1575 3.198)"
              fill={rect2Color}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ColorTheme;
