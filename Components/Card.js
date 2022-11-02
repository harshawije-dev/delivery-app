import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { React } from "react";

const Card = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity style={styleSheet.touchable}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styleSheet.responsive}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styleSheet = StyleSheet.create({
  touchable: {
    position: "relative",
    marginRight: 4
  },
  responsive: {
    height: 80,
    width: 80,
    borderRadius: 2,
  },
  font: {
    fontSize: 2,
    fontWeight: 800,
  },
});

export default Card;
