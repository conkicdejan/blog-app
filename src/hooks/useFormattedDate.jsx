import React from 'react';
import { format } from 'date-fns';

function useFormattedDate(str, outputFormat = 'yyyy-mm-dd HH:mm:ss') {
  const formated = str ? format(new Date(str), outputFormat) : '';
  return formated;
}

export default useFormattedDate;
