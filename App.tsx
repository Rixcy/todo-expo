import AppLoading from 'expo-app-loading'
import { SafeAreaView } from 'react-native'
import { Todo } from './screens/todo'
import { tw } from './tailwind'
import React from 'react'

import {
	useFonts,
	Inter_900Black,
	Inter_800ExtraBold,
	Inter_700Bold,
	Inter_400Regular,
} from '@expo-google-fonts/inter'

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
