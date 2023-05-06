import React, { memo, useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import imagemIA from './assets/IconIa.png'
import seta from './assets/seta.png'

export default function Chat() {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('');
    useEffect(() => {
        setTimeout(() => setMessages(msgs => ([{ id: new Date().getTime(), type: 'receive', text: 'Olá, como podemos te ajudar?' }, ...msgs])), 1000);
    }, [])
    const sendMsg = () => { setMessages([{ id: new Date().getTime(), type: 'send', text: message }, ...messages]); setMessage('') };
    const receiveMsg = () => { setMessages([{ id: new Date().getTime(), type: 'receive', text: message }, ...messages]); setMessage('') };
    return (
        <View style={styles.container}>
            <View className="topo" style={styles.topo}><Image source={seta}/></View>
            <FlatList data={messages} keyExtractor={x => x.id} renderItem={({ item, index }) => <ChatItemMemo {...{ item, index }} />} inverted contentContainerStyle={styles.listStyle} />
            <View style={styles.bottom}>
                <Button title='Resposta(TESTE)' onPress={receiveMsg} disabled={message.length === 0} />
                <TextInput style={styles.input} value={message} placeholder='Type your message' onChangeText={setMessage} />
                <Button title='Send' onPress={sendMsg} disabled={message.length === 0} />
            </View>
        </View>
    )
}
  function ChatItem({ item }) {
    const validarImage = () => {  
      if (item.type === 'receive') {
        return (
          <View style={[styles.chatItemCommon, styles.receive]}> 
            <Image source={imagemIA}/> 
            <Text style={styles.msgtxt_receive}>{item.text}</Text>
          </View>
        );
      } else {
        return (
          <View style={[styles.chatItemCommon, styles.send]}> 
            <Text style={styles.msgtxt_send}>{item.text}</Text>
          </View>
        );
      }
    };
  
    return (
      <View>
        {validarImage()}
      </View>
    );
  }
  

// put you logic of rerendering here (major part for performance)
const ChatItemMemo = memo(ChatItem, (prevProps, nextProps) => true)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    topo:{
        backgroundColor: '#ef4023',
        borderBottomEndRadius:250,
        borderBottomStartRadius:250,
        alignItems:"center",
        justifyContent:"center",
        padding:5
    },
    bottom: {
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        padding: 0,
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    chatItemCommon: {
        marginBottom: 2
    },
    send: {
        alignSelf: 'flex-end',
        marginTop:15,
    },
    receive: {
        alignSelf: 'flex-start',
    },
    msgtxt_send: {
        backgroundColor: '#ef4023',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 10,
        maxWidth: '75%'
    },
    msgtxt_receive: {
      backgroundColor: 'lightgrey',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 10,
      maxWidth: '75%'
  },
    listStyle: {
        paddingHorizontal: 10,
        paddingBottom: 20
    }
})