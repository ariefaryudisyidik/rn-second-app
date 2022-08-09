import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class index extends Component {
  state = {
    text: 'text disini',
  };

  // Async + Sync
  // Undefined + Aryudi Syidik

  //   callFirstName = () => {
  //     setTimeout(() => {
  //       return 'Arief';
  //     }, 5000);
  //   };

  //   login = () => {
  //     const first = this.callFirstName();
  //     const last = ' Aryudi Syidik';
  //     const name = first + last;
  //     console.log(name);
  //     this.setState({text: name});
  //   };

  // CallBack
  // async + async
  // Arief + Undefined

  //   callFirstName = callBack => {
  //     setTimeout(() => {
  //       callBack('Arief');
  //     }, 1000);
  //   };

  //   callLastName = callBack => {
  //     setTimeout(() => {
  //       callBack(' Aryudi Syidik');
  //     }, 1000);
  //   };

  //   login = () => {
  //     this.callFirstName(result => {
  //       const first = result;
  //       this.callLastName(result2 => {
  //         const last = result2;
  //         const name = first + last;
  //         this.setState({text: name});
  //       });
  //     });
  //   };

  // Promise
  //   callFirstName = () => {
  //     return new Promise(resolve => {
  //       setTimeout(() => {
  //         resolve('Arief');
  //       }, 1000);
  //     });
  //   };

  //   callLastName = first => {
  //     return new Promise(resolve => {
  //       setTimeout(() => {
  //         resolve(`${first} Aryudi Syidik`);
  //       }, 1000);
  //     });
  //   };

  //   login = () => {
  //     this.callFirstName()
  //       .then(result => {
  //         return this.callLastName(result);
  //       })
  //       .then(result2 => {
  //         this.setState({text: result2});
  //       });
  //   };

  callFirstName = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Arief');
      }, 1000);
    });
  };

  callLastName = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(' Aryudi Syidik');
      }, 1000);
    });
  };

  // Promise All
  //   login = () => {
  //     Promise.all([this.callFirstName(), this.callLastName()]).then(
  //       ([result, result2]) => {
  //         this.setState({text: result + result2});
  //       },
  //     );
  //   };

  // Promise Async / Await
  login = async () => {
    const first = await this.callFirstName();
    const last = await this.callLastName();
    const name = first + last;
    this.setState({text: name});
  };

  render() {
    const {text} = this.state;
    const {login} = this;

    return (
      <View>
        <Button title="Login" onPress={() => login()} />
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
