

function cumstomRender(reactElement, rootContainer) {
    /*
        const domElement = document.createElement(reactElement.name);
        domElement.innerHTML = reactElement.children;
        domElement.setAttribute('href', reactElement.props.href);
        domElement.setAttribute('target', reactElement.props.target);
        domElement.setAttribute('class', reactElement.props.target);
        domElement.setAttribute('id', reactElement.props.target);
        rootContainer.appendChild(domElement)
        */

    const domElement = document.createElement(reactElement.name);
    domElement.innerHTML = reactElement.children;
    for (const key in reactElement.props) {
        domElement.setAttribute(key, reactElement.props[key])
    }
    rootContainer.appendChild(domElement)
}

const reactElement = {
    name: "a",
    props: {
        href: 'https://www.google.com/',
        target: '_blank',
        class: 'google',
        id: 'googleid'
    },
    children: 'Click me Visit Google'
}


const rootContainer = document.getElementById("root");

cumstomRender(reactElement, rootContainer)