// Camel Case Formatter
String.prototype.toCamelCase = function () {
    return this.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
};


const Switch = (props) => {
    const { className, label, noText } = props;
    let switchClass = className;
    let id = label.toCamelCase();

    (props.large == true ? switchClass += ' switch--large' : null);
    (props.noText == true ? switchClass += ' switch--no-text' : null);
    (props.theme == 'success' ? switchClass += ' switch--success' : null);

    return (
        <div aria-label={label} className={switchClass}>
            <label className="switch__label" htmlFor={id}>
                <input role="switch" type="checkbox" className="switch__input" id={id} />
                <span className="switch__text" data-on="ON" data-off="OFF"></span>
                <span className="switch__handle"></span>
            </label>
        </div>
    );
};

Switch.propTypes = {
    className: React.PropTypes.string,
    theme: React.PropTypes.string,
    label: React.PropTypes.label,
    noText: React.PropTypes.boolean
};

Switch.defaultProps = {
    className: 'switch',
    noText: false
};

function App() {
    return (
        <div>
            <Switch label="Switch One" large />
            <Switch label="Switch No Text Large" theme="success" large noText />
            <Switch label="Switch Two" theme="success" />
            <Switch label="Switch Three" />
            <Switch label="Switch No Text" noText />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

