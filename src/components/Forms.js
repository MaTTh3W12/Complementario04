import React from "react";
import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../utils/colors";

export default function Form(props){
    const {setName, setSalario} = props;

    return(
        <View style={styles.viewForm}>
            <TextInput
                style={styles.Input}
                placeholder="Ingrese su nombre"
                placeholderTextColor={colors.PRIMARY_BORDER_COLOR}
                onChange={(e) => setName(e.nativeEvent.text)}
            />
            <TextInput
                placeholder="Ingrese su salario"
                keyboardType="numeric"
                placeholderTextColor={colors.PRIMARY_BORDER_COLOR}
                style={styles.Input}
                onChange={(e) => setSalario(e.nativeEvent.text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        bottom: 15,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.TRANSPARENT,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },

    Input: {
        borderBottomColor: colors.PRIMARY_BORDER_COLOR,
        borderBottomWidth: 1,
        color: colors.SECONDARY_COLOR_TEXT,
        paddingHorizontal: 20
    }
});