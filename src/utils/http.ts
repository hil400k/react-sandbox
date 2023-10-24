export async function fetchEvents(searchTerm?: string) {
  const url = `http://localhost:4000/events${searchTerm ? ('?search=' + searchTerm) : ''}`
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');

    (error as any).code = response.status;
    (error as any).info = await response.json();

    throw error;
  }

  const { events } = await response.json();

  return events;
}
