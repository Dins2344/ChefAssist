import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Marquee } from "@animatereactnative/marquee";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Landing() {
  const imageList = [
    require("../assets/images/landingPage/1.jpg"),
    require("../assets/images/landingPage/c2.jpg"),
    require("../assets/images/landingPage/2.jpg"),
    require("../assets/images/landingPage/c1.jpg"),
    require("../assets/images/landingPage/3.jpg"),
    require("../assets/images/landingPage/c3.jpg"),
    require("../assets/images/landingPage/3.jpg"),
    require("../assets/images/landingPage/4.jpg"),
    require("../assets/images/landingPage/5.jpg"),
    require("../assets/images/landingPage/6.jpg"),
  ];
  return (
    <GestureHandlerRootView>
      <View>
        <Marquee
          spacing={10}
          speed={1}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, i) => {
              return (
                <Image style={styles.image} key={i} source={image}></Image>
              );
            })}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={.5}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, i) => {
              return (
                <Image style={styles.image} key={i} source={image}></Image>
              );
            })}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={.7}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, i) => {
              return (
                <Image style={styles.image} key={i} source={image}></Image>
              );
            })}
          </View>
        </Marquee>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
    marginTop: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
