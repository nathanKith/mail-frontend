import * as React from "react";

export default ({children}) => {
	if (children.match(/м.*о.*с.*к.*в.*а/i)) {
		return (
			<span>{children}</span>
		);
	}

	if (children.match(/18\+/)) {
		const words = children.replace('18+', '18 +').split(' ');
		const zeroFontSize = {
			fontSize: '0',
		};
		return (
			<span>
				{words[0]}
				<span style={zeroFontSize}>костыль</span>
				<span>{words[1]}</span>
			</span>
		);
	}
	return children;
};
