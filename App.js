import { Text, View, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("0");
  let num = parseInt(number);

  function handleOnNumber(newNumber, currentNumber) {
    if (currentNumber == "0") {
      setNumber(newNumber);
    } else {
      setNumber(currentNumber + newNumber);
    }
  }

  function handleOnInverse() {
    num = 1 / num;
    setNumber(num.toString());
  }

  function handleOnFactorial() {
    for (let i = num - 1; i > 0; i--) {
      num *= i;
    }
    setNumber(num.toString());
  }

  function handleOnSquareRoot() {
    num = Math.sqrt(num);
    setNumber(num.toString());
  }

  function handleOnDivision() {
    setNumber(number + " / ");
  }

  function handleOnMultiplication() {
    setNumber(number + " * ");
  }

  function handleOnSubstraction() {
    setNumber(number + " - ");
  }

  function handleOnAddition() {
    setNumber(number + " + ");
  }

  function handleOnOperation() {
    let operation = number.split(" ");
    let num1 = parseInt(operation[0]);
    let num2 = parseInt(operation[2]);
    switch (operation[1]) {
      case "/":
        num = num1 / num2;
        break;
      case "*":
        num = num1 * num2;
        break;
      case "-":
        num = num1 - num2;
        break;
      case "+":
        num = num1 + num2;
        break;
    }
    setNumber(num.toString());
  }

  function handleOnLogNep() {
    num = Math.log(num);
    setNumber(num.toString());
  }

  function handleOnLog() {
    num = Math.log10(num);
    setNumber(num.toString());
  }

  function handleOnPi() {}

  function handleOnRad() {
    num = num * (Math.PI / 180);
    setNumber(num.toString());
  }

  function handleOnDeg() {
    num = num * (180 / Math.PI);
    setNumber(num.toString());
  }

  function handleOnSen() {
    num = Math.sin(num);
    setNumber(num.toString());
  }

  function handleOnCos() {
    num = Math.cos(num);
    setNumber(num.toString());
  }

  function handleOnTan() {
    num = Math.tan(num);
    setNumber(num.toString());
  }

  function handleOnComma() {}

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
              onPress={handleOnSen}
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
              onPress={handleOnCos}
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
              onPress={handleOnTan}
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
              onPress={handleOnDeg}
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
              onPress={handleOnLogNep}
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
              onPress={handleOnLog}
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
              onPress={handleOnPi}
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
              onPress={handleOnRad}
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
              onPress={handleOnInverse}
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
              onPress={handleOnFactorial}
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
              onPress={handleOnSquareRoot}
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
              onPress={handleOnDivision}
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
              onPress={handleOnMultiplication}
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
              onPress={handleOnSubstraction}
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
              onPress={handleOnAddition}
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
              onPress={handleOnOperation}
            >
              <Text>=</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
