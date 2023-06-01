import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import { powerOn } from '../../assets/images/powerOn.png';
import { Image } from 'react-native';
import {
	responsiveFontSize,
	responsiveHeight,
	responsiveScreenHeight,
	responsiveWidth,
  } from 'react-native-responsive-dimensions';
const reference = database().ref('/');
import {
	StyleSheet,
	Text,
	View,
	Switch,
	TouchableOpacity
} from 'react-native';
import { useEffect } from 'react';


export default function App() {
	const [on_OffStatus, setOn_OffStatus] = useState(true);
	console.log("Hasnat Testing");
	useEffect(() => {
		const call = async () => {
			try {
				const data = await database().ref('/LED').once('value');
				console.log(data);
			}
			catch (e) {
				console.log(e);
			}


		}
		call();

	}, [])
	const [Enable, setEnable] = useState(false);
	async function update(state) {

		try {

			if (!Enable) {
				await reference.set({ LED: "ON" });
				console.log("set");
				setEnable(true);

			}
			else {
				await reference.set({ LED: "OFF" });
				console.log("set");
				setEnable(false);
			}

		}
		catch (e) {
			console.log(e);
		}


	}


	// Toggle function
	const toggle = (state) => {
		setEnable(state);
		console.log(state);
		update(state);

	}

	return (
		<View style={{ flex: 1, backgroundColor: '#1c744a'}}>
			  <Image
              source={require('../../assets/images/mainscreen/flowers-gd5216de8a_1280.png')}
              style={{
                width: responsiveWidth(70),
                height: responsiveHeight(45),
                resizeMode: 'contain',
                alignSelf:'center'
              }}
            />
			<View
				style={{
					flex: 1.2,
					backgroundColor: '#FFFFFF',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					alignItems: 'center',
					padding: 20,
				}}>
				<TouchableOpacity style={[styles.circularButton, on_OffStatus ? styles.elevationOff : styles.elevationOn]} onPress={() => { setOn_OffStatus((prev) => !prev) }} activeOpacity={0.9}>
					<Image
						source={ on_OffStatus ? require("../../assets/images/powerOn.png") : require("../../assets/images/powerOff.png")}
						styles={{
							width: 50,
							height: 200,
							resizeMode: 'stretch',
						}}
					/>
					<Text style={{ fontWeight: "bold" }}>{on_OffStatus ? "ON" : "OFF"}</Text>

					{/* <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]}></View>
			  <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]}></View>
			  <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]}></View> */}
				</TouchableOpacity>
			</View>
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	circularButton: {
		width: 170,
		height: 170,
		borderRadius: 100,
		backgroundColor: 'white',
		marginTop: 90,
		justifyContent: 'center',
		alignItems: 'center',


	},
	elevationOn: {
		elevation: 20,
		shadowColor: "red",

	},
	elevationOff: {
		elevation: 20,
		shadowColor: "green",

	},
	line: {
		position: 'absolute',
		width: 20,
		height: 2,
		borderRadius: 1,
		backgroundColor: '#000000',
	},
});
