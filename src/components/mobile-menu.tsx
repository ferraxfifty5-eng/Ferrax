"use client";

import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-menu"><button aria-expanded={open} aria-controls="mobile-links" aria-label={open ? "Close navigation" : "Open navigation"} className={`menu-button${open ? " is-open" : ""}`} type="button" onClick={() => setOpen(!open)}><span className="menu-label">{open ? "Close" : "Menu"}</span><span className="menu-icon" aria-hidden="true"><i /><i /></span></button>{open && <div className="mobile-links" id="mobile-links"><span className="mobile-links-label">Navigate</span><Link onClick={() => setOpen(false)} href="/services">Services <i>-&gt;</i></Link><Link onClick={() => setOpen(false)} href="/industries">Industries <i>-&gt;</i></Link><Link onClick={() => setOpen(false)} href="/work">Work <i>-&gt;</i></Link><Link onClick={() => setOpen(false)} href="/process">Process <i>-&gt;</i></Link><Link onClick={() => setOpen(false)} href="/about">About <i>-&gt;</i></Link><Link onClick={() => setOpen(false)} href="/pricing">Pricing <i>-&gt;</i></Link><Link onClick={() => setOpen(false)} href="/resources">Resources <i>-&gt;</i></Link><Link onClick={() => setOpen(false)} href="/contact">Contact <i>-&gt;</i></Link><Link className="mobile-audit" onClick={() => setOpen(false)} href="/free-growth-audit">Start a growth audit <i>-&gt;</i></Link></div>}</div>;
}
