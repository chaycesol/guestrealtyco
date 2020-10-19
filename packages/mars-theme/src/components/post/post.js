import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";

import { getUrlData, formatPostData } from "../../helpers";
import PostEntryInfo from "./postEntryInfo";
import Taxonomies from "./taxonomies";
import PostEntryMedia from "./postEntryMedia";
import featuredStyles from "../styles/featuredStyles";

const Post = ({ state, libraries, actions }) => {
  const data = getUrlData(state);
  const post = state.source[data.type][data.id];

  const { postMeta, postInfo, featured } = state.theme;
  const Html2React = libraries.html2react.Component;

  const {
    author,
    publishDate,
    title,
    categories,
    tags,
    featured_media,
    content
  } = formatPostData(state, post);
  const date = new Date(publishDate);
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  return data.isReady ? (
    <Container className="container" sx={{ maxWidth: "l" }}>
      <article
        sx={{ variant: "card.default", "div figure": { maxWidth: 804, mx: 0 } }}
      >
        {featured.showOnPost && (
          <PostEntryMedia
            id={featured_media.id}
            ratio={16 / 9}
            sx={{
              ...featuredStyles
            }}
          />
        )}
        <Box>
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{
              textTransform: "uppercase",
              fontSize: "xl"
            }}
          />
          {data.isPost && postInfo.showOnPost && (
            <PostEntryInfo author={author} date={date} />
          )}

          <Html2React html={content} />
        </Box>

        {data.isPost && postMeta.showOnPost && (
          <div className="postEntryMeta">
            <Taxonomies tax={categories} name="Categories" />
            <Taxonomies tax={tags} name="Tags" />
          </div>
        )}
      </article>
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  margin: 0;
`

const Box = styled.div`
width: 
`



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
