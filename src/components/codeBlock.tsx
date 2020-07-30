import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';

const codeBlock = (props: any) => {

  const { language, value } = props;

  return (
    <SyntaxHighlighter language={language}>
      {value}
    </SyntaxHighlighter>
  );
}

export default codeBlock