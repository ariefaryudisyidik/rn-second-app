import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Button,
  Dimensions,
  FlatList,
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Program from '../../assets/images/program.jpg';

const colorPrimary = '#3f51b5';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Header = props => {
  return <Text style={styles.header}>{props.title}</Text>;
};

const StaticFlatList = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={({item, index}) => (
        <Text>
          Item {item} | Index ke - {index}
        </Text>
      )}
      keyExtractor={item => item.toString()}
      style={{margin: 16}}
    />
  );
};

const FlatList2 = props => {
  return (
    <FlatList
      data={props.dataPembayaran}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() =>
            ToastAndroid.show(`${item.namaBarang}`, ToastAndroid.SHORT)
          }
          style={styles.flatListItem}>
          <Text style={{color: 'white'}}>{item.namaBarang}</Text>
          <Text style={{color: 'white'}}>{item.harga}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.namaBarang}
      style={{marginHorizontal: 16}}
    />
  );
};

const backAction = () => {
  Alert.alert('Perhatian', 'Apakah anda ingin keluar?', [
    {text: 'No', onPress: () => null, style: 'cancel'},
    {text: 'Yes', onPress: () => BackHandler.exitApp()},
  ]);
  return true;
};

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Izinkan Akses',
        message: 'Izinkan aplikasi mengakses kamera',
        buttonNegative: 'Cancel',
        buttonPositive: 'Ok',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permission diberikan');
    } else {
      console.log('Permission ditolak');
    }
  } catch (e) {
    console.log(e);
  }
};

function Home() {
  const [on, setOn] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Home" />

        <ActivityIndicator size={'small'} color={colorPrimary} />
        <ActivityIndicator size={'large'} color="red" animating={false} />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert('Welcome', 'Hello World', [
                {text: 'No', onPress: () => console.log('Thank You!')},
                {text: 'Yes', onPress: () => console.log("Let's Go")},
              ])
            }
            style={styles.imagePress}>
            <Image source={Program} style={styles.image} />
          </TouchableOpacity>
        </View>

        <View style={styles.itemCenter}>
          <Switch value={on} onValueChange={() => setOn(!on)} />
        </View>

        <TextInput
          placeholder="Your Name"
          value={name}
          onChangeText={value => setName(value)}
          style={styles.textInput}
        />

        <TouchableOpacity
          onPress={() => requestCameraPermission()}
          style={styles.button}>
          <Text style={styles.textButton}>Click Me</Text>
        </TouchableOpacity>

        <StaticFlatList data={[1, 2, 3, 4, 5]} />

        <FlatList2
          dataPembayaran={[
            {
              namaBarang: 'Apel',
              harga: '10000',
            },
            {
              namaBarang: 'Jeruk',
              harga: '15000',
            },
            {
              namaBarang: 'Anggur',
              harga: '20000',
            },
          ]}
        />

        <View style={styles.itemCenter}>
          <Image source={Program} style={styles.image} />
        </View>

        <View style={{margin: 16}}>
          <Button title="Press Me" onPress={() => console.log('Press Me')} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 16},
  header: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    backgroundColor: '#3f51b5',
    padding: 16,
  },
  image: {
    width,
    height: height / 4,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 20,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 16,
    elevation: 2,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  itemCenter: {
    alignItems: 'center',
    marginTop: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#3f51b5',
    marginTop: 16,
    color: 'white',
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  flatListItem: {
    backgroundColor: colorPrimary,
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
});
