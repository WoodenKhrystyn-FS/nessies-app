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
        Follow us: Facebook Instagram © 2026
      </p>
      <div className="footer-hours">
        <p>{businessInfo.hours.monday}</p>
        <p>{businessInfo.hours.tuesday}</p>
        <p>{businessInfo.hours.wednesday}</p>
        <p>{businessInfo.hours.thursday}</p>
        <p>{businessInfo.hours.friday}</p>
        <p>{businessInfo.hours.saturday}</p>
        <p>{businessInfo.hours.sunday}</p>
      </div>
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
