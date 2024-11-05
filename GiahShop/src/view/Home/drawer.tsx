import React, { useState } from "react";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import close from '../../../public/header/close.svg'
export default function DrawerMobileNavigation() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  const list = () => (
    <div
      role="presentation"
      className="flex flex-col"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ width: 250, padding: "16px" }}
    >
      <div className="flex justify-start">
        <Button className="" onClick={toggleDrawer(false)}>
          <img src={close} alt="" />
        </Button>
      </div>
      <div className="flex flex-col  mt-5">

      <button>
        <h2 className="text-neutral-1  h-14 hover:bg-slate-50 flex items-center justify-center">صحفه اصلی</h2>
      </button>
      <button>
        <h2 className="hover:bg-slate-50 h-14 flex items-center justify-center my-2">گیاه پزشک</h2>
      </button>
      <button>
        <h2 className="flex items-center h-14 hover:bg-slate-50  justify-center my-2">وبلاگ</h2>
      </button>
      <button>
        <h2 className="flex items-center h-14 hover:bg-slate-50  justify-center my-2">تماس با ما</h2>
      </button>
      <button>
        <h2 className="flex items-center h-14 hover:bg-slate-50  justify-center my-2">درباره ما</h2>
      </button>
    </div>
      </div>
  );

  return (
    <div>
      <button
        onClick={toggleDrawer(true)}
        className="w-8 h-7 flex items-center justify-center  rounded-md"
        style={{ background: "#EFEFEF" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#121212"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
