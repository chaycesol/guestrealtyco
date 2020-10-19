import { connect, styled } from "frontity";
import { getMediaAttributes } from "../../helpers";
import Image from "@frontity/components/image";

function PostEntryMedia({
  state,
  actions,
  libraries,
  id,
  ratio,
  getSnapshot,
  ...props
}) {
  const imgProps = getMediaAttributes(state, id);
  // is empty if the id doesn't exist in state.source anymore
  const noImgProps = Object.keys(imgProps).length === 0;

  if (noImgProps) return null;
  return (
    <Card>
      <figure {...props}>
        <Image {...imgProps} />
      </figure>
    </Card>
    
  );
}

export default connect(PostEntryMedia);

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`