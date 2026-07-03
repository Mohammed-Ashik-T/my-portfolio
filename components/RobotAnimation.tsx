"use client";

import Lottie from "lottie-react";
import robot from "@/public/lottie/robot.json";

export default function RobotAnimation() {
  return (
    <div className="relative h-[520px] w-[520px] ">
      <Lottie
        animationData={robot}
        loop
        className="scale-125 -translate-y-16"
      />
    </div>
  );
}