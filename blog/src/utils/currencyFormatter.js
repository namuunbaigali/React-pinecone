import React from "react";

export default function currencyFormatter(rawValue) {
  return Intl.NumberFormat("mm-MN", {
    currency: "MNT",
    maximumFractionDigits: 0,
  }).format(rawValue);
}
