import { View, Text, Image } from 'react-native'
import React from 'react'

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
    <View>
          {
              imageList.map((image,i) => {
                  return (
                      <Image key={i} source={image}></Image>
                  )
              })
          }
    </View>
  )
}