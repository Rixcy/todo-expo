import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { tw } from 'tailwind'
import NewTodo, { todoStore } from 'components/NewTodo'

export default function App() {
	const todos = todoStore((s) => s.todos)
	return (
		<View style={tw('bg-nord1 h-full')}>
			<SafeAreaView>
				<View style={tw('p-12')}>
					<Text style={tw('text-nord4 text-3xl mb-4')}>Today's tasks</Text>
					<Text style={tw('text-nord9 mb-4')}>
						Open up App.tsx to start working on your app!
					</Text>
					<NewTodo />
					<View style={tw('mt-4')}>
						{todos.length > 0 && (
							<FlatList
								data={todos}
								renderItem={({ item }) => (
									<View style={tw('bg-nord2 p-4 rounded-lg mb-4')} key={item.id}>
										<Text style={tw('text-nord4')}>{item.content}</Text>
									</View>
								)}
							/>
						)}
					</View>
					<StatusBar style="auto" />
				</View>
			</SafeAreaView>
		</View>
	)
}
