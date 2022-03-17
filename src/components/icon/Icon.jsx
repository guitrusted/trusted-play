import React from "react";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";
import { PlusIcon } from "./icons/PlusIcon";
import { StarEmpty } from "./icons/StarEmpty";
import { StarFilled } from "./icons/StarFilled";
import { DotsVertical } from "./icons/DotsVertical";
import { Edit } from "./icons/Edit";

const ICONS = {
  externalLink: ExternalLinkIcon,
  plus: PlusIcon,
  starEmpty: StarEmpty,
  starFilled: StarFilled,
  dotsVertical: DotsVertical,
  edit: Edit,
};

export function Icon({ iconKey, className, style }) {
  const CurrentIcon = ICONS[iconKey];

  if (!CurrentIcon) return <>Icon not found. :(</>;

  return (
    <span className="tp-icon">
      <CurrentIcon className={className} style={style} />
    </span>
  );
}
