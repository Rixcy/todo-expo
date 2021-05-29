import {
	useFonts,
	Inter_900Black,
	Inter_800ExtraBold,
	Inter_700Bold,
	Inter_400Regular,
} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { tw } from 'tailwind'
import { Todo } from './screens/todo'

export default function App() {
	let [fontsLoaded] = useFonts({
		Inter_900Black,
		Inter_800ExtraBold,
		Inter_700Bold,
		Inter_400Regular,
	})

	if (!fontsLoaded) return <AppLoading />

	return (
		<SafeAreaView style={tw('bg-nord1 flex-1')}>
			<Todo />
		</SafeAreaView>
	)
}
