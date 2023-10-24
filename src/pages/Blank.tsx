import styles from './Blank.module.scss';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../utils/http';
import { useState } from 'react';

const Blank = () => {
  const val = 'city';
  const [searchTerm, setSearchTerm] = useState(val);

  const { data, isPending, isError, error,  } = useQuery({
    queryKey: ['events'],
    queryFn: () => fetchEvents(),
    staleTime: 5000,
    // gcTime: 1000
  });

  const { data: searchedData, isPending: searchedIsPending, isError: searchedIsError, error: searchedError } = useQuery({
    queryKey: ['key', searchTerm],
    queryFn: () => fetchEvents(searchTerm),
  });

  let content, searchedContent;

  if (isPending) {
    content = 'Pending';
  }

  if (searchedIsPending) {
    searchedContent = 'Pending';
  }

  if (isError) {
    content = (
      <div>
        <p>En error occurred</p>
        <p>{(error as any).info?.message || 'Failed to fetch events'}</p>
      </div>
    )
  }

  if  (searchedIsError) {
    searchedContent = (
      <div>
        <p>En error occurred</p>
        <p>{(searchedError as any).info?.message || 'Failed to fetch events'}</p>
      </div>
    )
  }

  if (data) {
    content = (data as any[]).map(i => {
      return (<span>{i.id}</span>)
    });
  }

  if (searchedData) {
    searchedContent = (searchedData as any[]).map(i => {
      return (<span>{i.title}</span>)
    });
  }


  return (
    <>
      {content}
      <hr/>
      {searchedContent}
    </>
  )
};

export default Blank;

