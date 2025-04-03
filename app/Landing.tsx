import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Marquee } from "@animatereactnative/marquee";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/utils/Colors";
import { useLogto } from "@logto/rn";


export default function Landing() {
  const { signIn } = useLogto();

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
          speed={0.5}
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
          speed={0.7}
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
      <View
        style={{
          height: "100%",
          backgroundColor:Colors.WHITE,
          padding: 12,
        }}
      >
        <Text
          style={{ fontSize: 30, textAlign: "center",fontFamily:"roboto-bold" }}
        >
          Chef Assist ai 🍝🥗 | Find, Create and Enjoy Delicious Recipes!
        </Text>
        <Text
          style={{  fontSize: 18, textAlign: "center" }}
        >
          Generate delicious recipes in seconds with the power of AI 👨‍🍳
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => signIn('chefassist://callback')}
        >
          <Text style={{ textAlign: "center", color: Colors.WHITE,fontFamily:"roboto"}}>Get Started</Text>
        </TouchableOpacity>
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
  button: {
    marginTop:20,
    borderRadius: 10,
    backgroundColor: Colors.PRIMARY,
    padding : 10
  }
});
