import React from "react";
import '../styles/SectionRule.module.css';

export default function SectionRule({ title, children, color }) {
  return (
    <section className={`section section-${color}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}