import { Heading } from 'components/text/Heading'
import { Text } from 'components/text/Text'
import * as React from 'react'
import { tw } from 'tailwind'

export const TodoHeader: React.VFC = () => {
	return (
		<>
			<Heading>Today's tasks</Heading>
			<Text style={tw('text-nord9 mb-4')}>Add some todos!</Text>
		</>
	)
}
