// import * as React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';
//
// import SmokeText from './SmokeText';
//
// let container = null;
// beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });
//
// afterEach(() => {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });
//
// it("renders with or without a name", () => {
//     act(() => {
//         render(SmokeText({children: 'Москва'}), container);
//     });
//     expect(container.textContent).toBe('Мocквa');
//
//     act(() => {
//         render(SmokeText({children: '18+'}), container);
//     });
//     expect(container.textContent).toBe(
//         React.createElement("span", null, "18",
//             React.createElement("span", {
//                     style: {
//                         fontSize: '0'
//                     }
//                 }, 'ахтунг'
//             ),
//             React.createElement('span', null, '+'))
//     );
//
//     act(() => {
//         render(SmokeText({children: 'Simple text'}), container);
//     });
//     expect(container.textContent).toBe('Simple text');
// });