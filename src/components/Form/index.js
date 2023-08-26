import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
  Alert,
} from "react-native";
import ResultImc from "./ResultIMC";
import styles from "./style";
import Input from "../Input";
import { maskHeight, maskWeight } from "../../utils/masks";



export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [TextButton, setTextButton] = useState("Calcular");
  const [errorMenssage, setErrorMenssage] = useState(null);
  const [imcList, setImcList] = useState([])
  const [focus_Height, setFocus_Height] = useState(false)
  const [focus_Weight, setFocus_Weight] = useState(false)
  
  

  function imcCalculator() {
      const objeto = {index: 0}
      const height_new = +height.replace(/[^0-9.]/g, "")
      const weight_new = +weight.replace(/[^0-9.]/g, "")
      
      if (height_new <= 0 || weight_new <= 0){
        Alert.alert("Alert Error", "Imc Invalido",[{
          text: "Conferir"
        }])
        
        return 
      }
      console.log(height_new, weight_new)
   

   const totalImc = (weight_new / (height_new * height_new)).toFixed(2)
   console.log(totalImc)
    setMessageImc("Seu imc é igual:");
    setTextButton("Calcular Novamente");

   if (totalImc == 0 ) {
   
    setImc("Imc Inválido")
   }else{
    setImc("Imc Inválido")
    setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc, }])
    setImc(totalImc)
   }
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMenssage("Campo Obrigatório*");
    }
  }

  function validationImc() {
    if (weight !== "" && height !== "") {
      imcCalculator();
      setHeight("");
      setWeight("");
      setErrorMenssage(null);
      

      
      return;
    }
    setFocus_Height(false)
    setFocus_Weight(false)
    verificationImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }

  function stateFocus(state){
    return state
  }


  return (
      <View style={styles.formContext}>
        {imc == null ? 
      <Pressable onPress={Keyboard.dismiss} style={styles.form}>
        <Text style={styles.formLabel_1}>Altura</Text>
        <TextInput
          maxLength={4}
          style={focus_Height ? styles.focusedTextInput : styles.input}
          onChangeText={value => setHeight(maskHeight(value))}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onFocus={() => setFocus_Height(true)}
          onBlur={() => setFocus_Height(false)}
          returnKeyType="next"
        />
        <Text style={styles.errorMessage}>{errorMenssage}</Text>
        <Text style={styles.formLabel_2}>Peso</Text>
        <TextInput
          maxLength={5}
          style={focus_Weight ? styles.focusedTextInput : styles.input}
          onChangeText={value => setWeight(maskWeight(value))}
          value={weight}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
          returnKeyType="send"
          onFocus={() => setFocus_Weight(true)}
          onBlur={() => setFocus_Weight(false)}
        />
        <Text style={styles.errorMessage}>{errorMenssage}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonCalculator}
          onPress={() => {
            validationImc();
          }}
        >
          <Text style={styles.textButtonCalculator}>{TextButton}</Text>
        </TouchableOpacity >
      </Pressable>
      : 
      <View style={styles.exibitionResultImc}>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
      <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {
            validationImc();
          }}
        >
          <Text style={styles.textButtonCalculator}>{TextButton}</Text>
        </TouchableOpacity>
      </View>
      }
      <FlatList
      style={styles.listImc}
      data={imcList.reverse()}
      renderItem={({item}) => {
        return(
          <Text style={styles.resultImcItem}>
            <Text style={styles.textResultItemList}>Resultado IMC =</Text>
              {item.imc} 
          </Text>
          )
      }}
      keyExtractor={(item) => {
        item.id
        
      }}
      >

      </FlatList>
    </View>
  );
}


