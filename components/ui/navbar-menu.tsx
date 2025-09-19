/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
"use client";
import React from "react";

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <nav
      className="relative rounded-2xl border border-black bg-transparent flex justify-center items-center space-x-4 px-6 py-4"
    >
      {children}
    </nav>
  );
};
