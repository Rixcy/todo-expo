import React from 'react'
import { SafeAreaView } from 'react-native'
import { tw } from 'tailwind'
import { Todo } from './screens/todo'

export default function App() {
	return (
		<SafeAreaView style={tw('bg-nord1 flex-1 pb-8')}>
			<Todo />
		</SafeAreaView>
	)
}
