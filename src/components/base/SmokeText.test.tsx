import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import SmokeText from './SmokeText';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render some tests", () => {
    act(() => {
        render(<SmokeText>Москва</SmokeText>, container);
    });
    expect(container.textContent).toBe('Мocквa');

    act(() => {
        render(<SmokeText>18+</SmokeText>, container);
    });
    expect(container.textContent).toBe('18костыль+');

    act(() => {
        render(<SmokeText>Simple text</SmokeText>, container);
    });
    expect(container.textContent).toBe('Simple text');
});
