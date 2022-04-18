import { ComponentWithAs, Icon, IconProps, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const CompSVG: ComponentWithAs<"svg", IconProps> = ({ ...props }) => {
  return (
    <Icon
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Frame 1" style={{ backgroundColor: "blue" }}>
        <motion.path
          id="Rectangle 1"
          d="M0.35 3C0.35 1.53644 1.53645 0.35 3 0.35H70.5224H137C138.464 0.35 139.65 1.53645 139.65 3V65C139.65 66.4636 138.464 67.65 137 67.65H3C1.53645 67.65 0.35 66.4636 0.35 65V3Z"
          stroke="url(#paint0_linear_0_1)"
          strokeWidth="0.9"
          initial={{
            strokeDasharray: 408,
            strokeDashoffset: 408,
          }}
          transition={{
            duration: 3,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.4,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
        />
        <motion.rect
          id="Rectangle 2"
          x="6.25"
          y="5.25"
          width="128.5"
          height="50.5"
          rx="2.75"
          stroke="url(#paint1_linear_0_1)"
          strokeWidth="0.7"
          initial={{
            strokeDasharray: 352,
            strokeDashoffset: 352,
          }}
          transition={{
            duration: 3,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.4,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
        />
        <motion.circle
          id="Circle 1"
          cx="70"
          cy="61"
          r="2.75"
          stroke="url(#paint2_linear_0_1)"
          strokeWidth="0.7"
          initial={{
            strokeDasharray: 16,
            strokeDashoffset: 16,
          }}
          transition={{
            duration: 3,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.4,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
        />
        <motion.path
          id="Polygon 1"
          d="M83.4312 97.65H57.5903C55.9382 97.65 54.6889 96.1548 54.9825 94.5291L59.3164 70.5291C59.5443 69.2676 60.6424 68.35 61.9243 68.35H79.2431C80.5309 68.35 81.6322 69.2758 81.8536 70.5444L86.0417 94.5445C86.3246 96.1657 85.0769 97.65 83.4312 97.65Z"
          stroke="url(#paint3_linear_0_1)"
          strokeWidth="0.9"
          initial={{
            strokeDasharray: 108,
            strokeDashoffset: 108,
          }}
          transition={{
            duration: 3,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.4,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
        />
        <motion.rect
          id="Rectangle 3"
          x="28.25"
          y="98.25"
          width="83.5"
          height="1.5"
          rx="0.75"
          stroke="url(#paint4_linear_0_1)"
          strokeWidth="0.7"
          initial={{
            strokeDasharray: 168,
            strokeDashoffset: 168,
          }}
          transition={{
            duration: 3,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.4,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="-64.6666"
          y1="68"
          x2="70"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CC3FF" />
          <stop offset="1" stopColor="#3A91F7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="-19"
          y1="56"
          x2="70.5"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CC3FF" />
          <stop offset="1" stopColor="#3A91F7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1="62.5"
          y1="64"
          x2="80"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CC3FF" />
          <stop offset="1" stopColor="#3A91F7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_1"
          x1="55"
          y1="98"
          x2="85"
          y2="98"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CC3FF" />
          <stop offset="1" stopColor="#3A91F7" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_0_1"
          x1="28"
          y1="99.9999"
          x2="112"
          y2="99.9999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CC3FF" />
          <stop offset="1" stopColor="#3A91F7" />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default CompSVG;
