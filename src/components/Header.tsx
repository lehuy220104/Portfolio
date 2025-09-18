import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#aboutme", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#achievement", label: "Achievement" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!open || !panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const handleJump = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
    setOpen(false);
  };

  return (
    <Wrap role="banner">
      <Bar>
        <Brand
          href="#home"
          onClick={(e) => handleJump(e, "#home")}
          aria-label="Lê Văn Đạt - về đầu trang"
        >
          Lê Văn Đạt
        </Brand>

        {/* menu desktop */}
        <NavDesktop aria-label="Thanh điều hướng">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleJump(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </NavDesktop>

        <Burger
          aria-label="Mở menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          data-open={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </Burger>
      </Bar>

      <Panel
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        data-open={open}
      >
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleJump(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Panel>
    </Wrap>
  );
};

export default Header;

/* =============== styles =============== */

const Wrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 1020; /* trên snow + content, dưới modal */
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const Bar = styled.nav`
  max-width: 1100px;
  margin: 0 auto;
  height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.2px;
  color: #111;
  text-decoration: none;
  &:hover { opacity: 0.8; }
`;

const NavDesktop = styled.div`
  @media (max-width: 900px) { display: none; }

  ul {
    display: flex; gap: 18px; align-items: center; margin: 0; padding: 0;
    list-style: none;
  }
  a {
    color: #111; text-decoration: none; padding: 8px 10px; border-radius: 10px;
  }
  a:hover { background: #f1f3f5; }
`;

const Burger = styled.button`
  position: relative;
  width: 40px; height: 40px;
  display: none;
  place-items: center;
  border: none; border-radius: 8px;
  background: transparent;
  cursor: pointer;

  @media (max-width: 900px) { display: grid; }

  span {
    position: absolute; left: 10px; right: 10px; height: 2px;
    background: #111; border-radius: 2px; transition: transform .25s, opacity .2s;
  }
  span:nth-child(1) { top: 13px; }
  span:nth-child(2) { top: 19px; }
  span:nth-child(3) { top: 25px; }

  &[data-open="true"] span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }
  &[data-open="true"] span:nth-child(2) { opacity: 0; }
  &[data-open="true"] span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
`;

const Panel = styled.div`
  position: fixed;
  inset: 0 0 0 auto; /* phủ toàn màn hình */
  width: min(30vw, 320px);
  background: #fff;
  border-left: 1px solid rgba(0,0,0,.08);
  transform: translateX(100%);
  transition: transform .25s ease;
  z-index: 1040; /* trên header bar */
  padding-top: 64px; /* chừa chỗ cho header */

  &[data-open="true"] { transform: translateX(0); }

  ul { list-style: none; padding: 16px; margin: 0; display: grid; gap: 8px; }
  a {
    display: block; padding: 12px 14px; border-radius: 10px;
    color: #111; text-decoration: none;
  }
  a:hover { background: #f1f3f5; }
  
  @media (min-width: 901px) { display: none; }
`;
