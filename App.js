import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import SendMessage from './src/component/SendMessage';
import ReceiveMessage from './src/component/ReceiveMessage';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btn: false,
      text: '',
      chatMesg: [
        { sender: true, message: 'Hello', time: 121546535 },
        { sender: false, message: 'World', time: 111546535 },

      ]
    }
  }

  Send() {
    const { chatMesg, text } = this.state
    var msg = chatMesg
    var obj = { sender: true, message: text, time: Date.now() }
    msg.push(obj)
    this.setState({ chatMesg: msg, text: '', btn: false })
  }

  render() {
    const { chatMesg, btn, text } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: '#f2f3f4' }}>
        <Header
          placement="center"
          centerComponent={{ text: 'Chat', style: { color: '#fff' } }}
        />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' enabled  >
          <ScrollView style={{ flex: 1 }} ref={ref => this.scrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight) => {
              this.scrollView.scrollToEnd({ animated: true });
            }}>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              {
                chatMesg &&
                chatMesg.map((i, index) => {
                  if (i.sender) {
                    return (
                      <SendMessage
                        key={index}
                        text={i.message}
                        time={i.time}
                      />
                    )
                  } else if (true) {
                    return (
                      <ReceiveMessage
                        key={index}
                        text={i.message}
                        time={i.time}
                      />
                    )
                  }
                })
              }
            </View>
          </ScrollView>
          <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: '#f2f3f4' }}>
            <TextInput
              style={styles.input}
              onChangeText={(e) => {
                this.setState({ text: e })
                if (e) {
                  this.setState({ btn: true })
                } else {
                  this.setState({ btn: false })
                }
              }}
              value={text}
              placeholder={'Type a Message ...'}
              placeholderTextColor='rgba(255,255,255,0.7)'
            // autoFocus
            />
            {btn ?
              <Text onPress={() => this.Send()} style={{ fontSize: 18, fontWeight: 'bold', color: "#3498db", paddingTop: 10 }}>
                SEND</Text>
              :
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#3498db", paddingTop: 10, opacity: 0.5 }}>
                SEND</Text>
            }
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(99, 172, 221,0.5)',
    marginBottom: 10,
    color: '#fff',
    height: 40,
    width: '78%',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 18
  },
});
