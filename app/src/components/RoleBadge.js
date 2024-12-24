import React from "react";

function titleCase(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const RoleBadge = ({ role }) => {
  const roleColors = {
    admin: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      ring: "ring-purple-700",
    },
    manager: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      ring: "ring-indigo-700",
    },
    user: {
      bg: "bg-yellow-50",
      text: "text-yellow-800",
      ring: "ring-yellow-600",
    },
  };

  const { bg, text, ring } = roleColors[role] || roleColors.user;

  return <span className={`inline-flex items-center rounded-md ${bg} px-2 py-1 text-xs font-medium ${text} ring-1 ring-inset ${ring}/10`}>{titleCase(role)}</span>;
};

export default RoleBadge;
