import React, { FC } from 'react';

type Props = {
  value?: string;
}

const ErrorLog: FC<Props> = ({ value = 'Something went wrong...' }) => (<p className="text-center text-red-600">{value}</p>);

export default ErrorLog;