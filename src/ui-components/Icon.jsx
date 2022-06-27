import React from 'react';
import cn from 'classnames';

const Icon = ({ glyph, className }) => {
	return (
		<svg className={cn('icon', className)}>
			<use xlinkHref={`#${glyph}`}/>
		</svg>
	);
}

export default Icon;