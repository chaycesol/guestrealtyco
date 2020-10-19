import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import PostEntryInfo from "../post/postEntryInfo";
import Taxonomies from "../post/taxonomies";
import { formatPostData } from "../../helpers";
import PostEntryMedia from "../post/postEntryMedia";
import featuredStyles from "../styles/featuredStyles";


/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ item, state, type, showMedia = true  }) => {
  const { postInfo, postMeta, featured } = state.theme;
  const {
    id,
    author,
    publishDate,
    title,
    link,
    categories,
    tags,
    featured_media,
    excerpt,
  } = formatPostData(state, item);
  const date = new Date(publishDate);

  return (
    <Container sx={{ maxWidth: "l", mb: "xl" }}>
      <Card>
      <article className="entry" sx={{ variant: "card.default" }}>
        <Link link={link}>
        <h2
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{
              textTransform: "uppercase",
            }} 
          />
          {featured.showOnList && showMedia && (
            <PostEntryMedia
              className="entryMedia"
              id={featured_media.id}
              ratio={20 / 9}
              sx={{ ...featuredStyles }}
            />
          )}
        </Link>
        {postInfo.showOnList && (
          <PostEntryInfo author={author} date={date} />
        )}
        {item.excerpt && (
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        )}
        
        {postMeta.showOnList && (
          <div className="postEntryMeta">
            <Taxonomies tax={categories} name="Categories" />
            <Taxonomies tax={tags} name="Tags" />
          </div>
        )}
      </article>
      </Card>
      
    </Container>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 100%;
margin: 5px;
padding: 5px;
color: #153211;
  img{
    width: 50%;
    height: auto;
  }
`
const Card = styled.div`
width: 80%;
margin: 10px;
padding: 20px;
display: flex;
flex-direction: column;
background-color: #f6f2ec;
border: 2px solid #ccb25c;
  h2{
    font-size: 2rem;
  }
`

