import { Text as RText, TextProps as RTextProps } from 'react-native'
import * as React from 'react'

export const inter400 = { fontFamily: 'Inter_400Regular' }
export const inter700 = { fontFamily: 'Inter_700Bold' }
export const inter800 = { fontFamily: 'Inter_800ExtraBold' }
export const inter900 = { fontFamily: 'Inter_900Black' }

type TextProps = RTextProps & {
	children: React.ReactNode
}

export const Text: React.VFC<TextProps> = (props) => {
	const { children, style, ...restProps } = props
	return (
		<RText style={[inter400, style]} {...restProps}>
			{children}
		</RText>
	)
}
