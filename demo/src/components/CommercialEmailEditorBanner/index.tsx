import { Alert } from '@arco-design/web-react';
import { pushEvent } from '@demo/utils/pushEvent';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

export const CommercialEmailEditorBanner = ({ page }: { page: 'HOME' | 'EDITOR' }) => {
  const [visible, setVisible] = useLocalStorage(
    'commercialEmailEditorBannerVisible',
    true,
  );

  useEffect(() => {
    pushEvent({ event: `Show_Banner_at_${page}` });
  }, [page]);

  if (!visible) return null;
  return (
    <Alert
      closable
      onClose={() => setVisible(false)}
      style={{
        alignItems: 'flex-start',
      }}
      banner
      content={
        <div>
          <div>
            Is the current Easy Email not meeting <strong>your requirements</strong> ?
            It's time to try our more powerful commercial version of the email editor.
            <div>
              Reach out to us now to learn more details. Contact us at{' '}
              <a
                onClick={() => {
                  pushEvent({ event: `Contact_at_${page}` });
                }}
                target='_blank'
                href='mailto:962491243@qq.com'
                style={{ fontSize: 16 }}
              >
                <strong>962491243@qq.com</strong>
              </a>
              .
            </div>
          </div>
          <div>
            - <strong>Responsive Design</strong>: Supports displaying different user
            interfaces for desktop and mobile devices.
          </div>
          <div>
            - <strong>Enhanced Editor</strong>: The editor has been improved to use an
            iframe and is compatible with various browsers.
          </div>
          <div>
            - <strong>Easy Customization</strong>: Provides easier customization options
            to tailor the user interface according to specific needs.
          </div>
        </div>
      }
    ></Alert>
  );
};
