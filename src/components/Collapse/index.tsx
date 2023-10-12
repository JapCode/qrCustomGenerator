import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './collapse.module.css';

interface ICollapseProps {
  title: string;
  children: JSX.Element;
}

const Collapse = ({ title, children }: ICollapseProps): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const contentAnimation = useSpring({
    height: isCollapsed ? 0 : 'auto',
    marginTop: isCollapsed ? 0 : 5,
    marginBottom: isCollapsed ? 0 : 10,
    opacity: isCollapsed ? 0 : 1,
    config: {
      tension: 200,
      friction: 20,
    },
  });

  const iconAnimation = useSpring({
    transform: `rotate(${isCollapsed ? '0deg' : '180deg'})`,
  });

  const toggleCollapse = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.buttonCollapse}
        type="button"
        onClick={toggleCollapse}
      >
        <h3 className={styles.title}>{title}</h3>
        <animated.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconAnimation}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </animated.svg>
      </button>
      <animated.div
        style={{
          ...contentAnimation,
          overflow: 'hidden',
        }}
      >
        <animated.div
          style={{
            marginTop: contentAnimation.marginTop,
            opacity: contentAnimation.opacity,
          }}
        >
          {!isCollapsed && <div>{children}</div>}
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Collapse;
