import React, { FC } from 'react';

type Props = {
  value?: string;
}

const MessageLog: FC<Props> = ({ value = 'Loading...' }) => (<p className="text-center">{value}</p>);

export default MessageLog;