import { graphql } from "gatsby";

export const mainQuery = graphql`
  fragment MainQuery on OthersJson {
      slug
      heroHeading
      heroDescription
      ctas {
        quote
        scripture
      }
      hangers {
        description
        title
      }
      sermon_grid {
      content {
        title
        subTitle
        body
      }
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
      events_grid {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        content {
          body
          subTitle
          title
        }
      }
      outreaches {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        content {
          body
          subTitle
          title
        }
      }
      leadership {
        sub_title
        leadership_team {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
          title
          url
        }
      }
      mission_grid {
        title
        content {
          body
          title
        }
      }
      vision_grid {
        title
        content {
          title
          body
        }
      }
      lead_pastor {
        title
        image_link {
          childImageSharp {
            gatsbyImageData
          }
        }
        content {
          title
          body
        }
      }
      testimonies {
        quote
        subject
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      events_thumbnail {
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        quote
        location
        title
      }
    }
`;

export const CmsDataQuery = graphql`
    fragment CmsDataQuery on Mdx {
      frontmatter {
        category
        date
        description
        externalLink
        featuredImage
        location
        query
        title
        link
      }
      body
    }
`