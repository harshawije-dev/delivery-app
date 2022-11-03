import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBucketItems,
  selectBucketSubTotal,
} from "../features/bucketSlice";
import { useNavigation } from "@react-navigation/native";

const FloatingBasket = () => {
  const items = useSelector(selectBucketItems);
  const navigation = useNavigation();
  const subTotal = useSelector(selectBucketSubTotal);

  console.log(items);
  console.log(subTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#2dd4bf] p-4 rounded-lg">
        <View className="flex-row space-x-2 items-center">
          <Text className="font-extrabold text-lg bg-[#0d9488] text-white py-1 px-2">
            {items.length}
          </Text>
          <Text className="text-lg text-white font-extrabold flex-1 text-center">
            View Basket
          </Text>
          <Text className="font-extrabold text-white text-lg">{subTotal}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingBasket;
