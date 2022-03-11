import { ButtonContainer, ButtonTitle } from './styles';

export default function PrimaryButton({ mode = 'contained', color = '', title = 'Click-me', onPress }) {
	return (
		<ButtonContainer mode={mode} onPress={onPress} color={color}>
			<ButtonTitle mode={mode}>{title}</ButtonTitle>
		</ButtonContainer>
	);
}
