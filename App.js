import { Text, View, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [numAux, setNumAux] = useState(null);
  const [ope, setOpe] = useState(null);

  function handleOnNumber(newNumber, currentNumber) {
    if (currentNumber.toString() == "0" || currentNumber == null) {
      setNumber(newNumber);
    } else {
      setNumber(parseFloat(currentNumber.toString() + newNumber.toString()));
    }
  }

  function handleOnInverse() {
    setNumber(1 / number);
  }

  function handleOnFactorial() {
    let result = number;
    for (let i = number - 1; i > 0; i--) {
      result *= i;
    }
    setNumber(result);
  }

  function handleOnSquareRoot() {
    setNumber(Math.sqrt(number));
  }

  function handleOnDivision() {
    setNumAux(number);
    setOpe("/");
    setNumber("");
  }

  function handleOnMultiplication() {
    setNumAux(number);
    setOpe("*");
    setNumber("");
  }

  function handleOnSubstraction() {
    setNumAux(number);
    setOpe("-");
    setNumber("");
  }

  function handleOnAddition() {
    setNumAux(number);
    setOpe("+");
    setNumber("");
  }

  function handleOnOperation() {
    let result;
    switch (ope) {
      case "/":
        result = numAux / number;
        break;
      case "*":
        result = numAux * number;
        break;
      case "-":
        result = numAux - number;
        break;
      case "+":
        result = numAux + number;
        break;
    }
    setNumber(result);
  }

  function handleOnLogNep() {
    setNumber(Math.log(number));
  }

  function handleOnLog() {
    setNumber(Math.log10(number));
  }

  function handleOnPi() {
    setNumber(Math.PI);
  }

  function handleOnRad() {
    setNumber(number * (Math.PI / 180));
  }

  function handleOnDeg() {
    setNumber(number * (180 / Math.PI));
  }

  function handleOnSen() {
    setNumber(Math.sin(number));
  }

  function handleOnCos() {
    setNumber(Math.cos(number));
  }

  function handleOnTan() {
    setNumber(Math.tan(number));
  }

  function handleOnComma() {
    if (!number.toString().includes(".")) {
      if (number == "") {
        setNumber("0.");
      } else {
        setNumber(number + ".");
      }
    }
  }

  function handleOnClear() {
    setNumber(0);
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
              onPress={() => handleOnNumber(7, number)}
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
              onPress={() => handleOnNumber(8, number)}
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
              onPress={() => handleOnNumber(9, number)}
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
              onPress={() => handleOnNumber(4, number)}
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
              onPress={() => handleOnNumber(5, number)}
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
              onPress={() => handleOnNumber(6, number)}
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
              onPress={() => handleOnNumber(1, number)}
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
              onPress={() => handleOnNumber(2, number)}
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
              onPress={() => handleOnNumber(3, number)}
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
              onPress={() => handleOnNumber(0, number)}
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
              onPress={handleOnComma}
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
