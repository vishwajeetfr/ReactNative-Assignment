import React, { useState } from "react";
import generateExpirationDate from "./faker.js";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const expiryDate = generateExpirationDate();

  const [freezer, setFreezer] = useState(require("./assets/freezButton.png"));
  const [cardState, setCardState] = useState(require("./assets/card.png"));

  const freezPress = () => {
    setFreezer((prevFreezer) =>
      prevFreezer === require("./assets/freezButton.png")
        ? require("./assets/unfreezButton.png")
        : require("./assets/freezButton.png")
    );
    setCardState((prevCardState) =>
      prevCardState === require("./assets/card.png")
        ? require("./assets/freezer.png")
        : require("./assets/card.png")
    );
  };

  const handlePayPress = () => {
    Alert.alert("Pay Button Pressed!");
  };
  const handleCardPress = () => {
    Alert.alert("Card Button Pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>select payment mode</Text>
      <Text style={styles.para1}>
        choose your preferred payment method to make payment.
      </Text>

      <TouchableOpacity onPress={handlePayPress}>
        <Image source={require("./assets/pay.png")} style={styles.pay} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCardPress}>
        <Image
          source={require("./assets/cardButton.png")}
          style={styles.cardButton}
        />
      </TouchableOpacity>
      <Image source={require("./assets/footer.png")} style={styles.home} />

      <Text style={styles.para2}>YOUR DIGITAL DEBIT CARD</Text>

      <TouchableOpacity onPress={freezPress} style={styles.touchable}>
        <Image source={freezer} style={styles.freezButton} />
      </TouchableOpacity>

      <ImageBackground source={cardState} style={styles.card}>
        {cardState === require("./assets/card.png") && (
          <>
            <Text style={styles.expiry}>expiry</Text>
            <Text style={styles.expDate}>{expiryDate}</Text>
          </>
        )}
      </ImageBackground>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    position: "relative",
  },
  header: {
    width: 328,
    position: "absolute",
    top: 80,
    left: 16,
    opacity: 1,
    fontSize: 30,
    color: "#ffffff",
    fontFamily: "serif",
    fontWeight: "bold",
    lineHeight: 36,
    letterSpacing: -0.165,
    textAlign: "left",
  },
  para1: {
    width: 328,
    position: "absolute",
    top: 135,
    left: 16,
    opacity: 1,
    fontSize: 15,
    color: "grey",
    fontFamily: "serif",
    fontWeight: "bold",
    lineHeight: 24,
    letterSpacing: -0.165,
    textAlign: "left",
  },
  para2: {
    width: 328,
    position: "absolute",
    top: 330,
    left: 16,
    opacity: 1,
    fontSize: 15,
    color: "dimgray",
    lineHeight: 24,
    letterSpacing: -0.165,
    textAlign: "left",
  },
  expiry: {
    position: "absolute",
    top: 72,
    left: 143,
    opacity: 1,
    fontSize: 15,
    color: "dimgray",
    lineHeight: 24,
    letterSpacing: -0.165,
    textAlign: "left",
  },
  expDate: {
    width: 328,
    position: "absolute",
    top: 86,
    left: 143,
    opacity: 1,
    fontSize: 13,
    color: "#ffffff",
    fontFamily: "serif",
    fontWeight: "bold",
    lineHeight: 36,
  },
  pay: {
    width: 96,
    height: 40,
    top: 210,
    left: 16,
    borderWidth: 1,
    gap: 8,
  },
  cardButton: {
    width: 96,
    height: 40,
    borderWidth: 1,
    top: 170,
    left: 130,
    gap: 8,
  },
  touchable: {
    position: "absolute",
    top: 470,
    left: 255,
    width: 96,
    height: 96,
  },
  freezButton: {
    width: "100%",
    height: "100%",
  },
  card: {
    width: 280,
    height: 330,
    left: -7,
    top: 170,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  home: {
    width: 413,
    height: 130,
    bottom: -700,
    gap: 8,
  },
});
