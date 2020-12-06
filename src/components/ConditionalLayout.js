import React from "react";
import Layout from "./layout";
import { Link, ModalRoutingContext } from "gatsby-plugin-modal-routing";

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo, certificate }) =>
      modal ? (
        <React.Fragment>
          {console.log(certificate)}
          <Link to={closeTo}>Close</Link>
          {children}
        </React.Fragment>
      ) : (
        <Layout {...rest}>{children}</Layout>
      )
    }
  </ModalRoutingContext.Consumer>
);

export default ConditionalLayout;
