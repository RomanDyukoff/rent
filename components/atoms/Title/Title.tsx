type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
	levet?: HeadingLevel;
	classNames?: string;
	id?: string;
	children?: React.ReactNode;
}

export const Title = ({
	levet = 'h1',
	classNames = '',
	id = '',
	children = null,
}: TitleProps): JSX.Element => {
	const Tag = levet;

	return (
		<Tag id={id} className={classNames}>
			{children}
		</Tag>
	)
};
