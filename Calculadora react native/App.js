import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Buttons from './components/Buttons';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles/styles';
import Screen from './components/Screen';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState("");

  const show = (num) => {
    const newVal = value + num;
    setValue(newVal);
  };

  const deleteAll = () => {
    setValue("");
  };

  const deleteByOne = () => {
    const newValue = value.slice(0, -1);
    setValue(newValue);
  };

  const result = () => {
    const newValue = eval(value);
    if (isNaN(newValue)) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 2000);
    } else {
      setValue(newValue.toString());
    }
  };

  const percentage = () => {
    const newValue = parseFloat(value) / 100;
    if (isNaN(newValue)) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 2000);
    } else {
      setValue(newValue.toString());
    }
  };

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Screen value={value} />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
            <Buttons
            value={"AC"}
            colorText={"#333"}
            color={"#ccc"} 
            size={80} fun={() => deleteAll()} />
            <Buttons
            value={"%"}
            colorText={"#333"}
            color={"#ccc"} 
            size={80} fun={() => percentage()} />
            <Buttons
            value={"÷"}
            colorText={"#333"} 
            color={"#ccc"} 
            size={80} fun={() => show("/")} />
            <Buttons
            value={"<-"}
            colorText={"#333"} 
            color={"#ccc"}
            size={80}
            icon={<FontAwesome6 name="delete-left" size={24} color="#333" />} fun={() => deleteByOne()} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"7"} color={"#ddd"} 
          colorText={"#333"} 
          size={80} fun={() => show("7")} />
          <Buttons value={"8"} color={"#ddd"} 
          colorText={"#333"} 
          size={80} fun={() => show("8")} />
          <Buttons value={"9"} color={"#ddd"} 
          colorText={"#333"} 
          size={80} fun={() => show("9")} />
          <Buttons
            value={"×"} 
            colorText={"#333"} 
            color={"#ccc"} 
            size={80} fun={() => show("*")} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"4"} color={"#ddd"} 
          colorText={"#333"} 
          size={80} fun={() => show("4")} />
          <Buttons value={"5"} color={"#ddd"}
          colorText={"#333"} 
          size={80} fun={() => show("5")} />
          <Buttons value={"6"} color={"#ddd"} 
          colorText={"#333"} 
          size={80} fun={() => show("6")} />
          <Buttons
            value={"-"} 
            colorText={"#333"} 
            color={"#ccc"} 
            size={80} fun={() => show("-")} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"1"} color={"#ddd"}
          colorText={"#333"} 
          size={80} fun={() => show("1")} />
          <Buttons value={"2"} color={"#ddd"} 
          colorText={"#333"}
          size={80} fun={() => show("2")} />
          <Buttons value={"3"} color={"#ddd"}
          colorText={"#333"} 
          size={80} fun={() => show("3")} />
          <Buttons
            value={"+"} 
            colorText={"#333"} 
            color={"#ccc"} 
            size={80} fun={() => show("+")} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"0"} color={"#ddd"} 
          colorText={"#333"} 
          size={80} fun={() => show("0")} />
          <Buttons value={"."} color={"#ddd"} 
          colorText={"#333"} 
          size={80} fun={() => show(".")} />
          <Buttons
            value={"="} 
            colorText={"#fff"}
            color={"orange"}
            size={80} fun={() => result()} />
            <Buttons
            value={"^"} 
            colorText={"#333"} 
            color={"#ccc"} 
            size={80} fun={() => show("^")} />
        </View>

      </View>

    </View>
  );
}
