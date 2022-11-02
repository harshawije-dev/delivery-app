import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  appendCart,
  popCart,
  selectBucketItems,
  selectBucketItemsOnId,
} from "../features/bucketSlice";

const Dishes = ({ id, name, description, dishPreview }) => {
  const [itemCount, setItemCount] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBucketItemsOnId(state, id));

  const addToBucket = () => {
    dispatch(appendCart({ id, name, description, dishPreview }));
  };

  const removeFromBucket = () => {
    if (!items.length > 0) {
      return;
    }
    dispatch(popCart({ id }));
  };

  console.log(items);

  return (
    <>
      <TouchableOpacity onPress={() => setItemCount(!itemCount)}>
        <View className="flex-row p-2">
          <View className="flex-1 pr-2 align-middle">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
          </View>
          <View>
            <Image
              source={{
                uri: dishPreview,
              }}
              className="w-20 h-20 bg-slate-600 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {itemCount && (
        <View className="flex-row space-x-2 p-2 items-center">
          <TouchableOpacity onPress={removeFromBucket}>
            <MinusCircleIcon size={25} color="#38bdf8" />
          </TouchableOpacity>

          <Text>{items.length}</Text>

          <TouchableOpacity onPress={addToBucket}>
            <PlusCircleIcon size={25} color="#38bdf8" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Dishes;
