import React, { Component } from 'react';
import { Button } from '../Components/Button';
import { StyledLink } from '../Components/Link';



export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button primaryBg primaryFont>Hello</Button>
        <StyledLink href="#!!!">Whatever <p>ưdnqiodn</p> </StyledLink>
      </div>
    )
  }
}
