import React from "react";
import businessInfo from "../utils/businessInfo";

function Footer() {
  return (
    <footer style={styles.footer} className="footer">
      <h3>{businessInfo.name}</h3>
      <p>
        Three Little Ladies Bakery 📍 {businessInfo.serviceArea} 📧{" "}
        <a
          href={businessInfo.emailLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {businessInfo.email}
        </a>{" "}
        📞{" "}
        <a
          href={businessInfo.phoneLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {businessInfo.phone}
        </a>{" "}
        <div className="footer-hours">
          <p>{businessInfo.hours.monday}</p>
          <p>{businessInfo.hours.tuesday}</p>
          <p>{businessInfo.hours.wednesday}</p>
          <p>{businessInfo.hours.thursday}</p>
          <p>{businessInfo.hours.friday}</p>
          <p>{businessInfo.hours.saturday}</p>
          <p>{businessInfo.hours.sunday}</p>
        </div>
        © 2026 Three Little Ladies Bakery. All rights reserved. This website is
        for informational purposes only and does not constitute an offer to sell
        or a solicitation of an offer to buy any products or services. All
        content is provided "as is" without warranty of any kind, either express
        or implied.
      </p>
    </footer>
  );
}
export default Footer;

const styles = {
  footer: {
    backgroundColor: "#111827",
    color: "#9ca3af",
    padding: "10px",
    textAlign: "center",
    fontSize: ".87rem",
  },
};
