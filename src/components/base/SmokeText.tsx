import * as React from "react";

export default ({children}) => {
	console.log(children);

	if (/м.*о.*с.*к.*в.*а/i.test(children)) {
		// english letters instead of russian
		children = children.replace('о', 'o').replace('с', 'c').replace('а', 'a');
	}

	if (/18\+/.test(children)) {
		const letters = children.replace('18+', '18 +').split(' ');

		return (
			<span>
				{letters[0]}
				<span style={{fontSize: '0'}}>ахтунг</span>
				<span>{letters[1]}</span>
			</span>
		);
	}

	return children;
};
