import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

const Loading = () => {
  return (
    <View>
      <LottieView
        source={require("../../assets/loading.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Loading;
