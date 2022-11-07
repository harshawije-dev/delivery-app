import { View, Text, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import React from "react";

// Animation = Animatable.createAnimatableComponent(Animation);

const OrderLoading = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#2394B0]">
      <Animatable.Image
        source={require("../assets/preparing.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-64 h-64"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 font-bold text-center text-white"
      >
        Waiting for Resturant to Accept the Order
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
      {/* <Progress.Pie progress={0.6} size={60} color="white" /> */}
    </SafeAreaView>
  );
};

export default OrderLoading;
