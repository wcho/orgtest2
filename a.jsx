import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div>
                /* This is a comment */ {/* JSX_BAD_COMMENT alarm because this text is recognized as a JSX child instead of a comment. */}
                <div>// is a double slash.</div> {/* JSX_BAD_COMMENT alarm because this text in div element is recognized as a JSX child instead of a comment. */}
            </div>
        );
    }
}
