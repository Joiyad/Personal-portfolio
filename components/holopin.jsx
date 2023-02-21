import Image from "next/image";
import Link from "next/link";
import React, { forwardRef } from "react";

const HolopinImage = ({ user }, ref) => (
  <a href="https://www.holopin.io/@joiyad411#" ref={ref} className=" md:px-20 mb-32 flex justify-center">
    <Image
      src={`https://holopin.me/${user}`}
      alt={`@${user}'s Holopin board`}
      width="800px"
      height="250px"
    />
  </a>
);

const HolopinRef = forwardRef(HolopinImage);

const Holopin = ({ user }) => (
  <div>
    <Link href={`https://holopin.io/@${user}`}>
      <HolopinRef user={user} />
    </Link>
  </div>
);

export default Holopin;