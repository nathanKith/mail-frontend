import teaserSheet from './teaser/styles';

export default (locator, items) => {

	const styles = {
		'.mimic_left .wrapper': {
			'width':  locator.calcString(240, 'px')
		},

		'.mimic_left .wrapper_frame': {
			'border-radius': locator.calcString(2, 'px'),
			'border': '1px solid #ccc',
		},
	};

	Object.assign(styles, teaserSheet(locator));

	if (items) {
		console.log("я здесь");
		let newClasses = {};

		items.forEach((item, index) => {
			const {images} = item;

			let image_src;
			let image_width;
			let image_height;

			if (images[0]) {
				[image_src, image_width, image_height] = images[0];
			}

			const className = `.mimic_left .teaser .picture .picture_img${index}`;
			newClasses[className] = {
				'width': locator.calcString(image_width, 'px'),
				'height': locator.calcString(image_height, 'px'),
				'background-image': `url(${image_src})`,
			};
		});

		Object.assign(styles, newClasses);
	}

	return styles;
};
