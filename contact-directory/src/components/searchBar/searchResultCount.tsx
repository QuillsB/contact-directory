import React from 'react';

interface Props {
  count: Number,
}

export default function SearchResultCount(props: Props) {
  const { count } = props;

  return (
    <div>
      <p className='searchResultCount'>{`Total: ${count}`}</p>
    </div>
  );
}
