import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectResturantItems } from "../features/resturantSlice";
import {
  popCart,
  selectBucketItems,
  selectBucketSubTotal,
} from "../features/bucketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";

const Checkout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // Selectors
  const items = useSelector(selectBucketItems);
  const resturant = useSelector(selectResturantItems);
  const subTotal = useSelector(selectBucketSubTotal);
  const [groupItems, setGroupedItems] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      results[item.id] = results[item.id] || [];
      results[item.id].push(item);
      return results;
    }, Object.create(null));

    setGroupedItems(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="border-b px-4 bg-white border-[#34d399] shadow-sm">
          <View className="flex-row space-x-1 justify-between items-center pt-8 pb-4">
            <Text className="text-lg font-extrabold">Checkout</Text>
            <TouchableOpacity
              onPress={navigation.goBack}
              className="bg-gray-100 rounded-full"
            >
              <XCircleIcon size={35} color="#34d399" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="my-5 bg-white flex-row px-4 py-3 space-x-2">
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Cancel</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-100">
          {Object.entries(groupItems).map(([key, items]) => {
            return (
              <View key={key} className="py-5 px-3 bg-white">
                <View className="flex-row items-center space-x-4">
                  <Text>{items.length} x</Text>
                  <Image
                    source={{
                      uri: items[0]?.dishPreview,
                    }}
                    className="w-12 h-12 bg-slate-500 rounded-full"
                  />
                  <Text className="flex-1">{items[0]?.name}</Text>
                  <Text className=" font-medium text-gray-500">
                    {items[0]?.price}
                  </Text>

                  <TouchableOpacity
                    onPress={() => dispatch(popCart({ id: key }))}
                  >
                    <Text className="text-[#34d399] text-xs">Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View>
          <View>
            <Text>Subtotal</Text>
            <Text>{subTotal}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
