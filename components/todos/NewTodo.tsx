import { View, TextInput, TouchableHighlight } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { todoStore } from './todo-store'
import React, { useState } from 'react'
import { tw } from 'tailwind'
import clsx from 'clsx'
import { ErrorMessage } from 'components/ErrorMessage'
import { Text } from 'components/text/Text'

export default function NewTodo() {
	const {
		control,
		handleSubmit,
		trigger,
		reset,
		formState: { errors },
	} = useForm<{ todo: string }>()

	const addTodo = todoStore((s) => s.addTodo)

	const onSubmit = handleSubmit((data) => {
		addTodo(data.todo)
		reset()
	})

	const [isFocused, setIsFocused] = useState(false)

	return (
		<View>
			<View style={tw('flex flex-row w-full')}>
				<View style={tw('flex-1')}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								onFocus={() => setIsFocused(true)}
								onBlur={() => {
									setIsFocused(false)
									onBlur()
								}}
								style={tw(
									clsx(
										'bg-nord3 px-2 border border-transparent border-r-0 rounded-l-md py-2 px-3 text-nord4 text-lg w-full flex-1 leading-6',
										{ 'border-nord4': isFocused, 'border-nord15': errors.todo }
									)
								)}
								onChangeText={(value) => onChange(value)}
								onSubmitEditing={async () => {
									const passedValidation = await trigger('todo')
									if (passedValidation) {
										addTodo(value)
										reset()
									}
								}}
								blurOnSubmit={false}
								value={value}
							/>
						)}
						name="todo"
						rules={{ required: true }}
						defaultValue=""
					/>
				</View>

				<TouchableHighlight
					underlayColor="#434C5E"
					style={tw(
						clsx(
							'relative border border-transparent border-l-0 items-center text-nord4 px-4 py-2 text-lg font-medium rounded-r-md bg-nord3',
							{ 'border-nord4': isFocused, 'border-nord15': errors.todo }
						)
					)}
					onPress={onSubmit}
				>
					<Text style={tw('text-xl text-nord4')}>+</Text>
				</TouchableHighlight>
			</View>
			<ErrorMessage show={!!errors.todo}>This is required.</ErrorMessage>
		</View>
	)
}
