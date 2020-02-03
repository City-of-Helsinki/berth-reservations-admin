import React from 'react';

type Props = { className?: string };

export default ({ className = '' }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 199.404 199.404"
    className={className}
  >
    <path
      d="M8.498.5l.542.537c.355.351.782.617 1.614 1.03l.671.33c.047.022.09.044.134.066l.14.07c1.195.61 1.959 1.159 2.604 1.993.84 1.088 1.279 2.508 1.292 4.377v2.95c.005 2.364.1 3.193.422 3.973l.054.126c.11.248.23.477.56 1.066l.034.06c.307.28.435.533.435.723 0 .398-.57 1.082-2.177 1.697-.945.361-2.073.631-3.308.798-.4 1.278-1.575 2.204-2.963 2.204-1.384 0-2.556-.92-2.96-2.19-1.277-.165-2.442-.44-3.415-.812l-.105-.041C.545 18.853 0 18.191 0 17.801c0-.197.138-.462.47-.754l.112-.199c.274-.496.382-.711.493-.977l.02-.049c.302-.75.395-1.554.405-3.747l.001-.447V8.99c0-1.912.438-3.36 1.292-4.464.657-.85 1.439-1.404 2.673-2.028l.24-.12.472-.23C7.1 1.697 7.56 1.422 7.933 1.06L8.498.5zm.054 17.252c-.858 0-1.555.71-1.555 1.583 0 .872.697 1.582 1.555 1.582.857 0 1.554-.71 1.554-1.582 0-.873-.697-1.583-1.554-1.583zM8.498 2.637l-.034.024c-.379.276-.834.529-1.48.848l-.634.31a28.04 28.04 0 00-.127.064l-.128.065c-1.007.513-1.606.944-2.08 1.557-.615.796-.948 1.875-.959 3.408v2.961c-.006 2.13-.08 3.167-.344 4.042 1.603-.522 3.632-.806 5.788-.806 2.16 0 4.192.285 5.798.808-.27-.867-.35-1.892-.357-3.966L13.94 8.99c0-1.574-.334-2.676-.959-3.485-.484-.626-1.098-1.062-2.143-1.59l-.227-.112-.467-.228c-.717-.352-1.208-.62-1.612-.914l-.034-.024z"
      fill-rule="nonzero"
    />
  </svg>
);
