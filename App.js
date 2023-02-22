import React, { useContext, useState } from 'react';
import { animationContext, clickContext } from './contexts';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import TaskList from './TaskList';

export default function App() {
  const [clicked, setClicked] = useState(false);

  const handleButtonPress = () => {
    setClicked(!clicked);
  }

  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <clickContext.Provider value={handleButtonPress}>
        {!clicked &&
        <Pressable onPress={handleButtonPress} style={styles.button}>
          <Text style={styles.text}>Open List</Text>
        </Pressable>}
        {clicked && <TaskList style={styles.bottom}/>}
      </clickContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B4BC3",
    alignItems: "center"
  },
  top: {
    flex: 1,
    backgroundColor: "#4B4BC3"
  },
  bottom: {
    flex: 4,
    backgroundColor: "#C6ECCF",
    alignItems: "center",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    width: "100%",
    flexDirection: "column-reverse",
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    flex: 0.05,
    width: 150,
    marginBottom: 20
  },
  text: {
    fontWeight: "bold",
  }
});
