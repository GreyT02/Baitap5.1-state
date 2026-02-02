import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
export default function App() {
  // Tạo state background
  const [backgroundColor, setBackgroundColor] = useState("green");

  // Hàm đổi màu nền
  const changeBackground = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle="light-content" />

      <ColorButton title="GREEN" color="green" onPress={changeBackground} />
      <ColorButton title="BLUE" color="blue" onPress={changeBackground} />
      <ColorButton title="BROWN" color="brown" onPress={changeBackground} />
      <ColorButton title="YELLOW" color="yellow" onPress={changeBackground} />
      <ColorButton title="RED" color="red" onPress={changeBackground} />
      <ColorButton title="BLACK" color="black" onPress={changeBackground} />
    </View>
  );
}
function ColorButton({ title, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => onPress(color)}
    >
      <Text
        style={[
          styles.buttonText,
          { color: color === "yellow" ? "black" : "white" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    marginVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
