import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Content = styled.div`
  padding-bottom: 2rem;
  max-width: ${props => props.theme.maxWidthText};
  margin: 2rem 0;
`

const CodeBlock = ({ input }) => <Content dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }} />

export default CodeBlock

CodeBlock.propTypes = {
  input: PropTypes.object.isRequired,
}