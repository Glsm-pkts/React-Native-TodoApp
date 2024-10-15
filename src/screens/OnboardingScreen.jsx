import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get("window")


const OnboardingScreen = () => {
const navigation = useNavigation();

const handleDone = () => {
navigation.navigate("Home")
setItem("onboarding","1")
    };

const doneButton = ({...props}) => {
    return (
      <TouchableOpacity style={{padding:20, color:"white"}} {...props}> 
        <Text> Done  </Text>
      </TouchableOpacity>
    )
  
}
    
  return (
    <View style={styles.container}>
     <Onboarding 
     DoneButtonComponent={doneButton}
     onDone={handleDone}
     onSkip={handleDone}
     style={{paddingHorizontal:15}}
  pages={[
    {
      backgroundColor: '#257180',
      image:(
        <View style={styles.lottie}>
           <Lottie style={{flex:1}} source={require("../assets/animations/boost.json")}
           autoPlay loop/>
        </View>
      ),
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#CB6040',
        image:(
            <View style={styles.lottie}>
            <Lottie style={{flex:1}} source={require("../assets/animations/work.json")}
            autoPlay loop/>
         </View>
        ),
        title: 'Boost Your Productivity',
            subtitle: 'Join our Udemig courses to enhance your skills!',
      },
      {
        backgroundColor: '#F2E5BF',
        image:(
            <View style={styles.lottie}>
            <Lottie style={{flex:1}} source={require("../assets/animations/achieve.json")}
            autoPlay loop/>
         </View>
        ),
        title: 'Reach Higher Goals',
            subtitle:
              'Utilize our platform to achieve your profssional aspirations.',
          },

  ]}
/>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    lottie:{
        width:width*0.9,
        height:width,
        
    }
})