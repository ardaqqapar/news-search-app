export function formatDate(dateString: string) {
    const options : any  = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true, // Use 12-hour format
    };
  
    // Parse the input date string and format it
    const formattedDate = new Date(dateString).toLocaleString(undefined, options);
  
    return formattedDate;
}