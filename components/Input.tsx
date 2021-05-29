import { TextInput } from 'react-native'
import { inter400 } from './text/Text'
import * as React from 'react'
import { tw } from 'tailwind'

export const Input = () => {
	const [text, setText] = React.useState('')

	return (
		<TextInput
			style={[
				tw('bg-nord3 px-2 border-nord2 rounded-md py-2 px-3 text-nord4 text-xl'),
				inter400,
			]}
			onChangeText={(text) => setText(text)}
			defaultValue={text}
		/>
	)
}
