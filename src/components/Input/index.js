import React from "react";
import styles from "../Form/style";
import { TextInput } from "react-native";
import { MaskHeight } from "../../utils/masks";

export default function Input(mask, inputMaskChange) {


    function handleChanger(valor){
        MaskHeight(valor)
    }

    return(
        <>
        <TextInput
          style={styles.input}
          onChangeText={text => handleChanger(text)}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          
        />
        </>
    )
} 