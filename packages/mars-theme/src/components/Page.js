import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import homeHero from "../assets/elements/homeHero.gif"

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      <div>
        {/* <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
        {/* Only display author and date on posts */}
        {data.isPost && (
          <div>
            {author && (
              <StyledLink link={author.link}>
                <Author>
                  By <b>{author.name}</b>
                </Author>
              </StyledLink>
            )}
            <DateWrapper>
              {" "}
              on <b>{date.toDateString()}</b>
            </DateWrapper>
          </div>
        )}
      </div>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <Html2React html={post.content.rendered} />
      </Content>
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  margin: 0;
    .directions{
      display: none;
    }
    #bar2{
      height: 5px;
      width: 25%;
      background-color: #DBC472;
    }
    #bar{
      height: 5px;
      width: 40%;
      background-color: #DBC472;
    }
    .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 100vw;
    overflow: hidden;
    background: #C33764;  /* fallback colour. Make sure this is just one solid colour. */
    background: -webkit-linear-gradient(rgba(255, 255, 255, 0.3), rgba(21, 50, 17, 0.3)), url(${homeHero});
    background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(21, 50, 17, 0.3)), url(${homeHero}); /* The least supported option. */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    }
    img {
      object-fit: cover;
    }
    .hero-header-text{
      display: flex;
      flex-direction: column;
    }
    .hero-header{
      font-style: normal;
      font-weight: 800;
      font-size: 4rem;
      line-height: 80px;
      /* identical to box height, or 143% */
      text-align: center;
      letter-spacing: -0.015em;
      color: #f6f2ec;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    
    .sub-hero{
      background-color: #f6f2ec;
      display: flex;
      flex-direction: column;
      padding-bottom: 10px;
        .sub-header{
          margin-left: 10px;
          h2{
          color: #013110;
          font-size: 2.5em;
          font-weight: 600;
          }
          h4{
            font-size: 1.5rem;
            color: #013110;
          }
      }
      .sub-content{
      background-color: #f6f2ec;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: stretch;
        .sub-text{
          background-color: #f6f2ec;
          width: 40%;
          h3{
            color: #013110
          }
          p{
            color: #000;
          }
        }
      }
    }
    .body1{
      background-color: #013110;
      .body1-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #c1ab22; 
        .body1-img{
          height: 625px;
          width: 55%;
          background: -webkit-linear-gradient(rgba(255, 255, 255, 0.8), rgba(21, 50, 17, 0.8)), url("https://picsum.photos/800/650");
          background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(21, 50, 17, 0.8)), url("https://picsum.photos/800/650"); /* The least supported option. */
        }
        }
        .body1-text{
          width: 45%;
          margin-left: 20px;
          padding-left: 20px;
          h3{
          font-size: 2.5rem;
          color: #ccb25c;
          }
          p{
            color: #DBDBB6;
          }
          .body1-points{
            display: flex;
            flex-direction: column;
            .body1-point{
              display: flex;
              flex-direction: row;
              padding: 10px;
              img{
                width: 90px;
                height: 90px;
              }
              p{
                padding-top: px;
              }
            }
          }
        }
      }
    }
    .benefits{
      display: flex;
      flex-direction: column;
      background-color: #f6f2ec;
    }
    .benefits-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
        color: #013110;
      }
      .benefits-content{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-around;
      }
      .reviews{
        display: flex;
        flex-direction: row;
        background-color: #f6f2ec;
        .reviews-content{
          width: 40%;
          margin: 10px;
          padding: 5%;
          .reviews-header{
            h2{
              color: #013110;
              font-size: 2rem;
            }
            p{
              color: #000;
            }
          }
          .reviews-logos{
            display: flex;
            flex-direction: row;
          }
        }
        .reviews-featured{
          width: 40%;
          margin: 5%;
          padding: 5%;
          h3{
            color: #013110;
            font-size: 1.5rem;
          }
        }
      }
      .signup{
        background-color: #013110;
        padding: 40px;
        .signup-container{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          .signup-text{
            font-size: 1.2rem;
            color: #DBDBB6;
          }
          .signup-buttons{
            display: flex;
            flex-direction: row;
          }
        }
      }
`


const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #f6f2ec;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
