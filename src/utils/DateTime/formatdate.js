import moment from 'moment';


export const getLastSeenTimestamp = (lastSeenTimestamp) => {
   const now = moment();
    const lastSeenMoment = new Date(lastSeenTimestamp * 1000);
    const diffInMinutes = now.diff(lastSeenMoment, 'minutes');
    const diffInHours = now.diff(lastSeenMoment, 'hours');
    const diffInDays = now.diff(lastSeenMoment, 'days');
    const diffInWeeks = now.diff(lastSeenMoment, 'weeks');
    const diffInMonths = now.diff(lastSeenMoment, 'months');
    const diffInYears = now.diff(lastSeenMoment, 'years');
    if (diffInMinutes < 1) {
      return 'Last seen just now';
    } else if (diffInMinutes < 60) {
      return `Last seen ${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `Last seen ${diffInHours} hours ago`;
    } else if (diffInDays === 1) {
      return 'Last seen yesterday';
    } else if (diffInDays < 7) {
      return `Last seen ${diffInDays} days ago`;
    } else if (diffInWeeks < 4) {
      return `Last seen ${diffInWeeks} weeks ago`;
    } else if (diffInMonths < 12) {
      return `Last seen ${diffInMonths} months ago`;
    } else {
      return `Last seen ${diffInYears} years ago`;
    }
  };