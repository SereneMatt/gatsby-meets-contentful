import React from "react";

import Matt from '../components/Matt';

const IndexPage = ({ pageContext }: any): JSX.Element => <Matt name={pageContext.name} />;

export default IndexPage;
