"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLinks from "./NavLinks/NavLinks";
import { handleLogout } from "@/lib/action";
export function Links({ session }) {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Result",
      path: "/result",
    },
  ];

  return (
    <div>
      <div className={styles.links}>
        {links.map((item) => {
          return <NavLinks link={item} key={item.title} />;
        })}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLinks link={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.btn}> LogOut</button>
            </form>
          </>
        ) : (
          <NavLinks link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <svg
        className={styles.menuButton}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{
          width: "24px",
          height: "24px",
          strokeWidth: "1.5px",
          cursor: "pointer",
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          style={{ stroke: "currentColor" }}
        />
      </svg>
      {open && (
        <div className={styles.mobilelinks}>
          {links.map((item) => {
            return <NavLinks link={item} key={item.title} />;
          })}
          {session?.user ? (
            <>
              {session.user?.isAdmin && (
                <NavLinks link={{ title: "Admin", path: "/admin" }} />
              )}
              <form action={handleLogout}>
                <button className={styles.btn}> LogOut</button>
              </form>
            </>
          ) : (
            <NavLinks link={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
}
