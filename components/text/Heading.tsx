import * as React from 'react'
import { Text, TextProps } from 'react-native'
import { tw } from 'tailwind'

type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4'

type HeadingProps = TextProps & {
	children: React.ReactNode
	size?: HeadingSize
}

export const Heading: React.VFC<HeadingProps> = (props) => {
	const { size = 'h1', children, style, ...restProps } = props

	let internalStyle = {
		fontFamily: 'Inter_900Black',
	}

	let twClasses = 'text-3xl mb-4'

	if (size === 'h2') {
		internalStyle.fontFamily = 'Inter_800ExtraBold'
		twClasses = 'text-2xl mb-3'
	}

	if (size === 'h3') {
		internalStyle.fontFamily = 'Inter_700Bold'
		twClasses = 'text-xl mb-2'
	}

	if (size === 'h4') {
		internalStyle.fontFamily = 'Inter_400Regular'
		twClasses = 'text-lg mb-1'
	}

	return (
		<Text style={[tw(twClasses), tw('text-nord4'), internalStyle, style]} {...restProps}>
			{children}
		</Text>
	)
}
