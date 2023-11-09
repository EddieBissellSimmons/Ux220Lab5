class EdElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "Eddie was here";
    }
}
customElements.define("x-ed", EdElement);

class CenterElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>
        `;
    }
}
customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = new Date().getFullYear();
    }
}
customElements.define("x-fullyear", YearElement);

class Lab5Element extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="text-emphasis: filled red">${this.innerHTML}</div>
        `;
    }
}
customElements.define("x-lab5", Lab5Element);