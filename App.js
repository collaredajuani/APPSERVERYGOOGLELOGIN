import React,{Component} from 'react';
import {View ,Text,Image,StyleSheet} from 'react-native';
import {GoogleSignin,GoogleSigninButton} from '@react-native-google-signin/google-signin'
 GoogleSignin.configure({
  androidClientID:'1047986510812-nf1oac6shhtkhl6l70o9mat79fgnceql.apps.googleusercontent.com',
});
class AppLoginGoogle extends Component{
  constructor(props){
    super(props);
    this.state={
      userGoogleinfo:{},
      loaded:false
    };
  }
  signIn=async()=>{
    try{
    await GoogleSignin.hasPlayServices()
    const userInfo= await GoogleSignin.signIn();
    this.setState({
      userGoogleinfo:userInfo,
      loaded:true
    })
  }
  catch(error){
    console.log(error.message);
  }
}
  render()  {
    return(
      <View>
      <GoogleSigninButton
      onPress={this.signIn}
      size={GoogleSigninButton.Size.Wide}
      />
      {this.state.loaded ?
        <View>
          <Text>{this.state.userGoogleinfo.user.name}</Text>
          <Text>{this.state.userGoogleinfo.user.email}</Text>
          <Image
          style={styles.stretch}
          source={{uri:this.state.userGoogleinfo.user.photo}}
          />
        </View> :
        <Text>Not sign in</Text>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 80,
    height: 80,
  },

});
export default AppLoginGoogle;