class Button extends React.Component {

    render() {
        const {
            variant,
            content,
            ...others
        } = this.props;

        return (
            <button className={variant} {...others}>
                {content}
            </button>
        )
    }
}

React.render(
    <div>
        <Button content="Sample Button" variant="green" />
        <Button content="Matt is Awesome!" />
        <Button content="Sample Button" variant="red" />
    </div>,
    document.getElementById('root')
);