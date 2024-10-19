import { Text, View, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("0");

  function handleOnNumber(newNumber, currentNumber) {
    if (currentNumber == "0") {
      setNumber(newNumber);
    } else {
      setNumber(currentNumber + newNumber);
    }
  }

  function handleOnClear() {
    setNumber("0");
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignSelf: "center",
        marginVertical: 80,
      }}
    >
      <Text style={{ fontSize: 45, fontWeight: "bold" }}>Calculadora</Text>

      <View style={{ marginTop: 5 }}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            height: 70,
            width: 340,
            borderRadius: 4,
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 50, textAlign: "right", flex: 1 }}>
            {number}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>sen</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>cos</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>tan</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>deg</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>ln</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>log</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>&Pi;</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>rad</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>1/X</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>!</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>√</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>/</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("7", number)}
            >
              <Text>7</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("8", number)}
            >
              <Text>8</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("9", number)}
            >
              <Text>9</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>x</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("4", number)}
            >
              <Text>4</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("5", number)}
            >
              <Text>5</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("6", number)}
            >
              <Text>6</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>-</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("1", number)}
            >
              <Text>1</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("2", number)}
            >
              <Text>2</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("3", number)}
            >
              <Text>3</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
              onPress={handleOnClear}
            >
              <Text>C</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "blue",
              }}
              onPress={() => handleOnNumber("0", number)}
            >
              <Text>0</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>,</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                width: 80,
                height: 80,
                backgroundColor: "gray",
              }}
            >
              <Text>=</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
