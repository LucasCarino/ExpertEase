export const hiringsFormatter = (hirings) => {
    const formattedHirings = hirings.map((hiring, idx) => {
      return {
        service: hiring.service,
        status: hiring.status,
        contactPhone: hiring.contactPhone,
        contactEmail: hiring.contactEmail,
        contactSchedule: hiring.contactSchedule,
        messageToProvider: hiring.messageToProvider,
      };
    });
  
    return formattedHirings;
  };
  