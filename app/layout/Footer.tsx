import React from "react";
import githubIcon from "../../public/github-logo.png";
import twitterIcon from "../../public/twitter-logo.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gray-800 text-white py-12 px-4">
      <div className="flex container justify-between">
        <div className="flex flex-row items-center">
          <div>
            <div className="text-2xl mb-3">Simple Blog by Viky</div>
            <div className="text-sm">© 2025 vBlog</div>
          </div>
        </div>
        <div className="flex">
          <a href="https://github.com" target="_blank" className="mr-3">
            <Image src={githubIcon} alt="github" width={32} height={32} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <Image src={twitterIcon} alt="twitter" width={32} height={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
