import React, { useState } from 'react';
import database from '@react-native-firebase/database';
const reference = database().ref('/');
import {
	StyleSheet,
	Text,
	View,
	Switch
} from 'react-native';
import { useEffect } from 'react';


export default function App() {

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
		<View style={styles.container}>
			<Text style={{ color: Enable ? "red" : "green" }}>
				<Text style={{ fontSize: 30 }}>Turn Light On Off</Text>
			</Text>
			<Switch
				trackColor={{ false: "#43f746", true: "#63dff2" }}
				thumbColor={Enable ? "#faf68c" : "#e243f7"}
				onValueChange={toggle}
				value={Enable}
				style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }], marginTop: 30 }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
