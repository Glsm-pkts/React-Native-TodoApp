import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { removeItem } from '../utils/asyncStorage'


const{width, height} = Dimensions.get("window")
const HomeScreen = () => {
const navigation = useNavigation()

const handleReset = async() =>{
await removeItem("onboarded");
navigation.push("Onboarding")
}
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.lottie}>
           <LottieView style={{flex:1}} source={require("../assets/animations/confetti.json")}
           autoPlay loop/>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate("Todo")}
        style={styles.addTaskButton}>
<LinearGradient 
style={styles.addTaskButton} 
colors={["#ECDFCC","#629584"]}>
    <Text style={styles.addTaskText}>New Task, Who's In? </Text>
</LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity  onPress={handleReset}
        style={styles.resetButton}>
<LinearGradient 
style={styles.resetButton} 
colors={["#FCFAEE","#DA8359"]}>
    <Text style={styles.resetText}>Reset </Text>
</LinearGradient>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
       alignItems: 'center',
       backgroundColor:"#E2F1E7",
    },
    lottie:{
        width:width*0.9,
        height:width,
       
        
    },
    addTaskButton:{
paddingVertical: 15,
paddingHorizontal: 30,
borderRadius:15,
shadowColor:"#000000",
shadowOffset:{width:0,height:2},
shadowRadius:10,
shadowOpacity:0.3,
marginBottom:20,

    },
    addTaskText:{
        color:"white",
        fontWeight:"bold",
        textAlign: "center",
        fontSize: 20

    },
    
    resetButton:{
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius:15,
        shadowColor:"#000000",
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:0.3,
        marginBottom:20,
        
    },
    resetText:{
        color:"white",
        fontWeight:"bold",
        textAlign: "center",
        fontSize: 20

    },
    
})