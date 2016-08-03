'use strict';
const foregroundColor = '#ffffff';
const backgroundColor = '#16161B';
const black = backgroundColor;
const red = '#d1267f';
const green = '#00DA90';
const yellow = '#F8FB3C';
const blue = '#009CE6';
const magenta = '#EC26CD';
const cyan = '#13C7FE';
const gray = '#f1f1f0';
const brightBlack = '#686868';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#16161B',
		cursorColor: '#009CE6',
		colors: [
      // regular
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// bright
			brightBlack,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
		 	brightWhite
		],
		css: `
			${config.css || ''}
      .tabs. .tabs_list .tabs_text {
        color: #13C7FE;
      }
			.tab_active:before {
				border-color: #13C7FE;
		 	}

	});
};
