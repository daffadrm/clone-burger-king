import Link from "next/link";

export default function NavLinkLargeOrder() {
  return (
    <Link href="/largeorder">
      <a className="lg:text-xl font-primary text-3xl text-white">
        <p className="lg:leading-3">
          <span className="lg:text-xs text-branding-accent-primary block text-lg">
            Exclusive
          </span>
          Large Order
        </p>
      </a>
    </Link>
  );
}
