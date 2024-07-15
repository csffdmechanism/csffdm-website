import React from 'react';
import './styles.scss';

const PdfButton = ({ label, file }) => {
  return (
    <a className="pdf-button" href={file.url} target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path
          d="M12.2542 19.4028C12.07 19.4028 11.8934 19.4766 11.7631 19.6078C11.6329 19.7391 11.5597 19.9171 11.5597 20.1028V24.3028C11.5597 24.4885 11.6329 24.6665 11.7631 24.7978C11.8934 24.929 12.07 25.0028 12.2542 25.0028C12.4383 25.0028 12.615 24.929 12.7452 24.7978C12.8754 24.6665 12.9486 24.4885 12.9486 24.3028V23.6028H13.6389C14.1914 23.6028 14.7213 23.3815 15.112 22.9877C15.5027 22.5939 15.7222 22.0598 15.7222 21.5028C15.7222 20.9458 15.5027 20.4117 15.112 20.0179C14.7213 19.624 14.1914 19.4028 13.6389 19.4028H12.2542ZM13.6389 22.2028H12.9486V20.8028H13.6389C13.8231 20.8028 13.9997 20.8766 14.1299 21.0078C14.2602 21.1391 14.3333 21.3171 14.3333 21.5028C14.3333 21.6885 14.2602 21.8665 14.1299 21.9978C13.9997 22.129 13.8231 22.2028 13.6389 22.2028ZM22.6639 20.1028C22.6639 19.9171 22.7371 19.7391 22.8673 19.6078C22.9975 19.4766 23.1742 19.4028 23.3583 19.4028H25.4486C25.6328 19.4028 25.8094 19.4766 25.9397 19.6078C26.0699 19.7391 26.1431 19.9171 26.1431 20.1028C26.1431 20.2885 26.0699 20.4665 25.9397 20.5978C25.8094 20.729 25.6328 20.8028 25.4486 20.8028H24.0514L24.05 22.2056H25.4486C25.6328 22.2056 25.8094 22.2794 25.9397 22.4106C26.0699 22.5419 26.1431 22.7199 26.1431 22.9056C26.1431 23.0913 26.0699 23.2693 25.9397 23.4006C25.8094 23.5319 25.6328 23.6056 25.4486 23.6056H24.05L24.0528 24.3014C24.053 24.3933 24.0352 24.4844 24.0004 24.5694C23.9657 24.6544 23.9147 24.7317 23.8504 24.7968C23.7204 24.9283 23.5439 25.0024 23.3597 25.0028C23.1755 25.0032 22.9988 24.9298 22.8683 24.7988C22.7378 24.6678 22.6643 24.4899 22.6639 24.3042L22.6597 22.907V22.9042L22.6639 20.1028ZM17.8056 19.4028H18.4972C19.2339 19.4028 19.9405 19.6978 20.4614 20.2229C20.9823 20.748 21.275 21.4602 21.275 22.2028C21.275 22.9454 20.9823 23.6576 20.4614 24.1827C19.9405 24.7078 19.2339 25.0028 18.4972 25.0028H17.8056C17.6214 25.0028 17.4447 24.929 17.3145 24.7978C17.1843 24.6665 17.1111 24.4885 17.1111 24.3028V20.1028C17.1111 19.9171 17.1843 19.7391 17.3145 19.6078C17.4447 19.4766 17.6214 19.4028 17.8056 19.4028ZM18.5 23.6028C18.8684 23.6028 19.2216 23.4553 19.4821 23.1927C19.7426 22.9302 19.8889 22.5741 19.8889 22.2028C19.8889 21.8315 19.7426 21.4754 19.4821 21.2129C19.2216 20.9503 18.8684 20.8028 18.5 20.8028V23.6028ZM18.5 12.4V4H10.1667C9.42995 4 8.72342 4.295 8.20248 4.8201C7.68155 5.3452 7.38889 6.05739 7.38889 6.8V16.1352C6.56806 16.5286 6 17.3728 6 18.35V26.05C6 27.0272 6.56806 27.87 7.38889 28.2648V29.2C7.38889 29.9426 7.68155 30.6548 8.20248 31.1799C8.72342 31.705 9.42995 32 10.1667 32H26.8333C27.57 32 28.2766 31.705 28.7975 31.1799C29.3185 30.6548 29.6111 29.9426 29.6111 29.2V28.2648C30.4319 27.8714 31 27.0272 31 26.05V18.35C31 17.3728 30.4319 16.53 29.6111 16.1352V15.2H21.2778C20.5411 15.2 19.8345 14.905 19.3136 14.3799C18.7927 13.8548 18.5 13.1426 18.5 12.4ZM8.43056 18H28.5694C28.6615 18 28.7498 18.0369 28.815 18.1025C28.8801 18.1681 28.9167 18.2572 28.9167 18.35V26.05C28.9167 26.1428 28.8801 26.2318 28.815 26.2975C28.7498 26.3631 28.6615 26.4 28.5694 26.4H8.43056C8.33847 26.4 8.25015 26.3631 8.18503 26.2975C8.11992 26.2318 8.08333 26.1428 8.08333 26.05V18.35C8.08333 18.2572 8.11992 18.1681 8.18503 18.1025C8.25015 18.0369 8.33847 18 8.43056 18ZM20.5833 12.4V4.7L28.9167 13.1H21.2778C21.0936 13.1 20.917 13.0263 20.7867 12.895C20.6565 12.7637 20.5833 12.5857 20.5833 12.4Z"
          fill="#F8F3EA"
        />
      </svg>

      {label}
    </a>
  );
};

export default PdfButton;