import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MotiView } from "moti";
import { animate } from "framer-motion";

export default function App() {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ transform: [{ scale: 0 }] }}
        animate={{ transform: [{ scale: 1 }] }}
        transition={{ type: "timing", duration: 4500 }}
      >
        <View
          style={{
            top: 130,
            justifyContent: "center",
            backgroundColor: "rgba(230, 240, 0,0.9)",
            borderWidth: 2.5,
            width: 280,
            height: 400,
            borderColor: "black",
          }}
        >
          <MotiView
            style={{ alignItems: "center", justifyContent: "center" }}
            from={{ transform: [{ scale: 0 }] }}
            animate={{ transform: [{ scale: 1 }] }}
            transition={{ type: "timing", duration: 3500 }}
            delay={1000}
          >
            <Image
              style={styles.image}
              source={require("./assets/ferrari-logo.png")}
            />
            <Image
              style={styles.image2}
              source={require("./assets/ferrari-logo2.png")}
            />
          </MotiView>
        </View>
      </MotiView>
      <MotiView
        style={{ zIndex: 100 }}
        from={{ left: 420 }}
        animate={{ left: 0 }}
        transition={{ type: "timing", duration: 3500 }}
        delay={1000}
      >
        <ImageBackground
          style={styles.car}
          source={require("./assets/car.png")}
        />

        <MotiView
          style={{
            zIndex: 4000,
            width: 55,
            height: 55,
            position: "absolute",
            bottom: -112,
            left: 54,
            alignItems: "center",
            justifyContent: "center",
          }}
          from={{ transform: [{ rotate: 0 }] }}
          animate={{ transform: [{ rotate: -13 }] }}
          transition={{ type: "timing", duration: 4500 }}
        >
          <Image style={styles.wheel1} source={require("./assets/wheel.png")} />
        </MotiView>
        <MotiView
          style={{
            zIndex: 4000,
            bottom: -112,
            right: 51,
            width: 56,
            height: 56,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          }}
          from={{ transform: [{ rotate: 0 }] }}
          animate={{ transform: [{ rotate: -13 }] }}
          transition={{ type: "timing", duration: 4500 }}
        >
          <Image style={styles.wheel2} source={require("./assets/wheel.png")} />
        </MotiView>
      </MotiView>
      <Image style={styles.road} source={require("./assets/road.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,0,0,0.8)",
  },
  image: {
    top: 15,
    height: 400,
    width: 300,
  },
  image2: {
    alignItems: "center",
    bottom: 60,
    height: 100,
    width: 200,
  },
  car: { width: 410, height: 310, top: 200 },
  road: {
    top: 90,
    width: 500,
    height: 150,
  },
  wheel1: {
    width: 69,
    height: 69,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 100,
  },

  wheel2: {
    width: 69,
    height: 69,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 100,
  },
});
