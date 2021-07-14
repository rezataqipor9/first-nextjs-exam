import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>home page</h1>

      <Link href="/new-meetup">
        <a>new-meetup</a>
      </Link>
      <Link href="/ningas">
     Ningas
    </Link>
    </div>
  );
}
