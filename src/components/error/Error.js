import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

const Error = () => {
  return (
    <View>
      <LottieView
        source={require("../../assets/error.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Error;
