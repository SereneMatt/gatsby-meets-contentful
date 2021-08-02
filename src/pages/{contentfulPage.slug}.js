import React from 'react';
import { Layout } from 'components';
import { graphql } from 'gatsby';

const ContentfulPage = (props) => {
  console.log('props', props);
  return (
    <Layout>
      <h1>{props.data.contentfulPage.title}</h1>
    </Layout>
  )
}

export default ContentfulPage;

// Injects React props to an object called `data`
export const query = graphql`
  query PageQuery($id: String) {
    contentfulPage(id: {eq: $id}) {
      id
      title
    }
  }
`;
