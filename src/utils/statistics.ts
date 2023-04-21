const calculatePercentage = (
    completed_amount: number,
    total_amount: number
  ) => {
    if (total_amount === 0 || completed_amount === 0) return 0;
    else return (completed_amount / total_amount) * 100;
  };
  export default calculatePercentage;