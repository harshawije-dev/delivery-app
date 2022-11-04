import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectResturantItems } from "../features/resturantSlice";
import { selectBucketItems } from "../features/bucketSlice";

const Checkout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // Selectors
  const items = useSelector(selectBucketItems);
  const resturant = useSelector(selectResturantItems);
  const [groupItems, setGroupedItems] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      results[item.id] = results[item.id] || [];
      results[item.id].push(item);
      return results;
    }, Object.create(null));

    setGroupedItems(groupedItems);
  }, [items]);

  console.log(groupItems);

  return (
    <View>
      <Text>Checkout</Text>
    </View>
  );
};

export default Checkout;
