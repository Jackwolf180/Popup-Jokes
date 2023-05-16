import React from 'react';

export default function Footer(props) {
  return (
    <div style={{
      backgroundColor: !props.darkModeswithch ? "white" : "#21253a",
      color: !props.darkModeswithch ? "black" : "white",
    }}>
      <footer>
      <p>Copyright 2013-2023 abcd.com | operated by CFI Privacy Policy | Site Terms & Disclosures.Hosted by Anonyms</p>
      </footer>
    </div>
  );
}
