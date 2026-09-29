


const HighLightText = ({text,search}) => {
    if(!search) return <span>{text}</span>
    const index = text.toLowerCase().indexOf(search.toLowerCase());

    if(index === -1) {
        return <span>{text}</span>
    }

    const before = text.slice(0,index);
    const match = text.slice(index, index + search.length);
    const after = text.slice(index+search.length);
  return (
    <span>
        {before}
        <strong>{match}</strong>
        {after}
    </span>
  )
}

export default HighLightText